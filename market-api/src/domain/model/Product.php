<?php

namespace Silmara\MarketApi\domain\model;

class Product
{
    private string $code;
    private string $description;
    private float $unitPrice;
    private string $type;

    public function __construct($code, $description, $unitPrice, $type)
    {
        $this->code = $code;
        $this->description = $description;
        $this->unitPrice = $unitPrice;
        $this->type = $type;
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