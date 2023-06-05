<?php

namespace Silmara\MarketApi\controller;

use Silmara\MarketApi\domain\Product;

class ProductController extends Controller
{
    protected function getRequest()
    {
        // TODO: Implement getRequest() method.
    }

    protected function postRequest(array $data): void
    {
        $product = new Product($data['code'], $data['description'], $data['unitPrice'], $data['typeCode']);
    }

    protected function isContentValid($data): bool {
        return parent::isContentValid($data) &&
            array_key_exists('code', $data) &&
            array_key_exists('description', $data) &&
            array_key_exists('unitPrice', $data) &&
            array_key_exists('typeCode', $data);
    }
}