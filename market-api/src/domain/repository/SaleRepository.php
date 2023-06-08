<?php

namespace Silmara\MarketApi\domain\repository;

use Silmara\MarketApi\domain\model\Sale;
use Silmara\MarketApi\domain\model\SaleItem;
use Silmara\MarketApi\infrastructure\DatabaseConnector;
use PDO;

class SaleRepository
{
    private PDO $pdo;

    public function __construct()
    {
        $this->pdo = DatabaseConnector::getConnection();
    }

    public function getAll(): array
    {
        $sqlQuery = 'SELECT * FROM sales ORDER BY date_time DESC;';
        $sales = $this->pdo->query($sqlQuery)->fetchAll();

        foreach ($sales as &$sale) {
            $items = $this->getItems($sale);
            $sale['items'] = $items;
        }
        return $sales;
    }

    public function getItems(array $sale): array
    {
        $id = $sale['id'];
        $sqlQuery = "SELECT si.*, pt.tax_rate, p.code as product_code, p.description as product_description
                     FROM sale_items si INNER JOIN products p ON p.id = si.id_product
                     INNER JOIN product_types pt ON pt.id = p.id_product_type
                     WHERE id_sale = '$id';";
        return $this->pdo->query($sqlQuery)->fetchAll();
    }

    public function post(Sale $sale): bool
    {
        return $this->postSales($sale) &&
            $this->postItems($sale);
    }

    private function postSales(Sale $sale): bool
    {
        $sql = 'INSERT INTO sales(total, tax) VALUES (?, ?) RETURNING id';
        $statement = $this->pdo->prepare($sql);
        $statement->bindValue(1, $sale->getTotal());
        $statement->bindValue(2, $sale->getTax());

        $result = $statement->execute();
        $sale->setId($statement->fetch(PDO::FETCH_ASSOC)['id']);

        return $result;
    }

    private function postItems(Sale $sale): bool
    {
        $items = $sale->getItems();
        foreach ($items as $item)
        {
            if (!$this->postItem($item, $sale->getId()))
            {
                return false;
            }
        }
        return true;
    }

    private function postItem(SaleItem $item, string $idSale): bool
    {
        $sql = 'INSERT INTO sale_items(quantity, price, tax, id_product, id_sale) VALUES (?, ?, ?, ?, ?)';
        $statement = $this->pdo->prepare($sql);
        $statement->bindValue(1, $item->getQuantity());
        $statement->bindValue(2, $item->getPrice());
        $statement->bindValue(3, $item->getTax());
        $statement->bindValue(4, $item->getProduct());
        $statement->bindValue(5, $idSale);

        return $statement->execute();
    }
}