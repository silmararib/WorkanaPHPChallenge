<?php

namespace Silmara\MarketApi\domain;

class Product
{
    private string $code;
    private string $description;
    private float $unitPrice;
    private string $typeCode;

    public function __construct($code, $description, $unitPrice, $typeCode)
    {
        $this->code = $code;
        $this->description = $description;
        $this->unitPrice = $unitPrice;
        $this->typeCode = $typeCode;
    }
}