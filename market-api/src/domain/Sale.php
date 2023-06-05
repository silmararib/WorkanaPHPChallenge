<?php

namespace Silmara\MarketApi\domain;

class Sale
{
    private array $item;
    private float $total;
    private float $tax;

    public function __construct($total, $tax)
    {
        $this->total = $total;
        $this->tax = $tax;
    }

}
