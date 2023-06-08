<?php

namespace Silmara\MarketApi\domain\repository;

use Silmara\MarketApi\domain\model\Product;
use Silmara\MarketApi\infrastructure\DatabaseConnector;
use PDO;

class ProductRepository
{
    private PDO $pdo;

    public function __construct()
    {
        $this->pdo = DatabaseConnector::getConnection();
    }

    public function getAll(): array
    {
        $sqlQuery = 'SELECT p.*, pt.tax_rate, pt.code as type_code, pt.description as type_description 
                     FROM products p INNER JOIN product_types pt ON pt.id = p.id_product_type
                     ORDER BY p.code;';
        return $this->pdo->query($sqlQuery)->fetchAll();
    }

    public function post(Product $product): bool
    {
        $sql = 'INSERT INTO products(code, description, unit_price, id_product_type) VALUES (?, ?, ?, ?) RETURNING id';
        $statement = $this->pdo->prepare($sql);
        $statement->bindValue(1, $product->getCode());
        $statement->bindValue(2, $product->getDescription());
        $statement->bindValue(3, $product->getUnitPrice());
        $statement->bindValue(4, $product->getType());

        return $statement->execute();
    }
}