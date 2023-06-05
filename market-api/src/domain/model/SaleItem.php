<?php

namespace Silmara\MarketApi\domain\model;

class SaleItem
{
    private float $quantity;
    private float $price;
    private float $tax;
    private string $product;

    public function __construct($data)
    {
        $this->quantity = $data['quantity'];
        $this->price = $data['price'];
        $this->tax = $data['tax'];
        $this->product = $data['id_product'];
    }

    public function getQuantity(): float
    {
        return $this->quantity;
    }

    public function getPrice(): float
    {
        return $this->price;
    }

    public function getTax(): float
    {
        return $this->tax;
    }

    public function getProduct(): string
    {
        return $this->product;
    }
}