<?php

namespace Silmara\MarketApi\infrastructure;

use PDO;

class DatabaseConnector
{
    private static PDO $connection;

    public static function getConnection(): PDO {
        if (!isset(self::$connection)) {
            self::connecting();
            self::settingDatabase();
        }
        return self::$connection;
    }
    private function __construct(){ }

    private static function connecting(): void
    {
        self::$connection = new PDO(
            'pgsql:host=localhost;port=5432;dbname=market',
            'postgres',
            'postgres'
        );
        self::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        self::$connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    }

    private static function settingDatabase(): void {
        $sql = '
                CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
                
                CREATE TABLE IF NOT EXISTS product_types (
                    id uuid NOT NULL DEFAULT uuid_generate_v4(),
                    code VARCHAR(10) NOT NULL,
                    description VARCHAR(100) NOT NULL,
                    tax_rate NUMERIC(20,2) NOT NULL DEFAULT 0,
                    
                    CONSTRAINT product_types_pk PRIMARY KEY (id)
                );
                
                CREATE TABLE IF NOT EXISTS products (
                    id uuid NOT NULL DEFAULT uuid_generate_v4(),
                    code VARCHAR(10) NOT NULL,
                    description VARCHAR(100) NOT NULL,
                    unit_price NUMERIC(20,2) NOT NULL DEFAULT 0,
                    id_product_type uuid NOT NULL,
                    
                    CONSTRAINT products_pk PRIMARY KEY (id),
                    CONSTRAINT product_type_fk FOREIGN KEY (id_product_type) REFERENCES product_types(id)
                );
                
                CREATE TABLE IF NOT EXISTS sales (
                    id uuid NOT NULL DEFAULT uuid_generate_v4(),
                    total NUMERIC(20,2) NOT NULL DEFAULT 0,
                    tax NUMERIC(20,2) NOT NULL DEFAULT 0,
                    date_time timestamp DEFAULT now(), 
                    
                    CONSTRAINT sales_pk PRIMARY KEY (id)
                );
                
                CREATE TABLE IF NOT EXISTS sale_items (
                    id uuid NOT NULL DEFAULT uuid_generate_v4(),
                    quantity NUMERIC(20,2) NOT NULL DEFAULT 0,
                    price NUMERIC(20,2) NOT NULL DEFAULT 0,
                    tax NUMERIC(20,2) NOT NULL DEFAULT 0,
                    id_product uuid NOT NULL,
                    id_sale uuid NOT NULL,
                    
                    CONSTRAINT sale_items_pk PRIMARY KEY (id),
                    CONSTRAINT product_fk FOREIGN KEY (id_product) REFERENCES products(id),	
                    CONSTRAINT sale_fk FOREIGN KEY (id_sale) REFERENCES sales(id)
                );
        ';

        self::$connection->exec($sql);
    }
}