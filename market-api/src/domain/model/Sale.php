<?php

namespace Silmara\MarketApi\domain\model;

class Sale
{
    private string $id;
    private float $total;
    private float $tax;
    private array $items;

    public function __construct($data)
    {
        $this->total = $data['total'];
        $this->tax = $data['tax'];
        $this->items = [];

        foreach ($data['items'] as $item) {
            $saleItem = new SaleItem($item);
            $this->items[] = $saleItem;
        }
    }

    public function getTotal(): float
    {
        return $this->total;
    }

    public function getTax(): float
    {
        return $this->tax;
    }

    public function getItems(): array
    {
        return $this->items;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function setId(string $id): void
    {
        $this->id = $id;
    }

    public function setItems(array $items): void
    {
        $this->items = $items;
    }


}
