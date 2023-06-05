<?php

namespace Silmara\MarketApi\domain\model;

class SaleItem
{
    private Product $product;
    private float $quantity;
    private float $price;
    private float $tax;

    public function __construct($quantity, $price, $tax)
    {
        $this->quantity = $quantity;
        $this->price = $price;
        $this->tax = $tax;
    }
}