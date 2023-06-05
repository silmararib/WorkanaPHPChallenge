<?php

namespace Silmara\MarketApi\domain\model;

class ProductType
{
    private string $code;
    private string $description;
    private float $taxRate;

    public function __construct($code, $description, $taxRate)
    {
        $this->code = $code;
        $this->description = $description;
        $this->taxRate = $taxRate;
    }

    public function getCode(): string
    {
        return $this->code;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getTaxRate(): float
    {
        return $this->taxRate;
    }
}