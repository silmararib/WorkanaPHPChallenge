<?php

namespace Silmara\MarketApi\domain\model;

class ProductType
{
    private string $code;
    private string $description;
    private float $taxRate;

    public function __construct($data)
    {
        $this->code = $data['code'];
        $this->description = $data['description'];
        $this->taxRate = $data['tax_rate'];
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