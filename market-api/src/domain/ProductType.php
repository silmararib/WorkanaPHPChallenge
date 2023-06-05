<?php

namespace Silmara\MarketApi\domain;

class ProductType
{
    private string $code;
    private string $description;
    private float $taxRate;

    public function __construct($code, $description, $taxRate = 0)
    {
        $this->code = $code;
        $this->description = $description;
        $this->taxRate = $taxRate;
    }

}