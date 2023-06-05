<?php

namespace Silmara\MarketApi\domain\model;

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
