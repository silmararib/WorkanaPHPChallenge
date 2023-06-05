<?php

namespace Silmara\MarketApi\domain\controller;

use Silmara\MarketApi\domain\model\Sale;

class SaleController extends Controller
{
    protected function getRequest()
    {
        // TODO: Implement getRequest() method.
    }

    protected function postRequest(array $data): void
    {
        $sale = new Sale($data['total'], $data['tax']);
    }

    protected function isContentValid($data): bool {
        return parent::isContentValid($data) &&
            array_key_exists('total', $data) &&
            array_key_exists('tax', $data);
    }
}