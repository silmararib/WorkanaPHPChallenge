<?php

namespace Silmara\MarketApi\domain\controller;

use Silmara\MarketApi\domain\model\Sale;
use Silmara\MarketApi\domain\repository\SaleRepository;

class SaleController extends Controller
{
    private SaleRepository $repository;

    public function __construct()
    {
        $this->repository = new SaleRepository();
    }

    protected function getRequest(): void
    {
        $list = $this->repository->getAll();
        echo json_encode($list);
    }

    protected function postRequest(array $data): void
    {
        $sale = new Sale($data);
        if (!$this->repository->post($sale)) {
            http_response_code(500);
            exit();
        }
    }

    protected function isContentValid($data): bool {
        return parent::isContentValid($data) &&
            array_key_exists('total', $data) &&
            array_key_exists('tax', $data) &&
            array_key_exists('items', $data) &&
            parent::isContentValid($data['items']) &&
            $this->areContentItemsValid($data['items']);
    }

    private function areContentItemsValid($items): bool {
        $result = true;

        foreach ($items as $data) {
            $result = $result &&
            array_key_exists('quantity', $data) &&
            array_key_exists('price', $data) &&
            array_key_exists('tax', $data) &&
            array_key_exists('id_product', $data);
        }

        return $result;
    }
}