<?php

namespace Silmara\MarketApi\controller;

use Silmara\MarketApi\domain\ProductType;

class ProductTypeController extends Controller
{
    protected function getRequest()
    {
        // TODO: Implement getRequest() method.
    }

    protected function postRequest(array $data): void
    {
        $type = new ProductType($data['code'], $data['description'], $data['taxRate']);
    }

    protected function isContentValid($data): bool {
        return parent::isContentValid($data) &&
            array_key_exists('code', $data) &&
            array_key_exists('description', $data) &&
            array_key_exists('taxRate', $data);
    }
}