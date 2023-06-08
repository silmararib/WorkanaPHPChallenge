<?php

namespace Silmara\MarketApi\domain\model;

class Product
{
    private string $code;
    private string $description;
    private float $unitPrice;
    private string $type;

    public function __construct($data)
    {
        $this->code = $data['code'];
        $this->description = $data['description'];
        $this->unitPrice = $data['unit_price'];
        $this->type = $data['id_product_type'];
    }

    public function getCode(): string
    {
        return $this->code;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getUnitPrice(): float
    {
        return $this->unitPrice;
    }

    public function getType(): string
    {
        return $this->type;
    }
}