<?php

namespace Silmara\MarketApi\domain\repository;

use Silmara\MarketApi\domain\model\ProductType;
use Silmara\MarketApi\infrastructure\DatabaseConnector;
use PDO;

class ProductTypeRepository
{
    private PDO $pdo;

    public function __construct()
    {
        $this->pdo = DatabaseConnector::getConnection();
    }

    public function getAll(): array
    {
        $sqlQuery = 'SELECT * FROM product_types ORDER BY code;';
        return $this->pdo->query($sqlQuery)->fetchAll();
    }

    public function post(ProductType $type): bool
    {
        $sql = 'INSERT INTO product_types (code, description, tax_rate) VALUES (?, ?, ?)';
        $statement = $this->pdo->prepare($sql);
        $statement->bindValue(1, $type->getCode());
        $statement->bindValue(2, $type->getDescription());
        $statement->bindValue(3, $type->getTaxRate());

        return $statement->execute();
    }
}