<?php

namespace Silmara\MarketApi\domain\controller;

use Silmara\MarketApi\domain\model\Product;
use Silmara\MarketApi\domain\repository\ProductRepository;

class ProductController extends Controller
{
    private ProductRepository $repository;

    public function __construct()
    {
        $this->repository = new ProductRepository();
    }

    protected function getRequest(): void
    {
        $list = $this->repository->getAll();
        echo json_encode($list);
    }

    protected function postRequest(array $data): void
    {
        $product = new Product($data);
        if (!$this->repository->post($product)) {
            http_response_code(500);
            exit();
        }
    }

    protected function isContentValid($data): bool {
        return parent::isContentValid($data) &&
            array_key_exists('code', $data) &&
            array_key_exists('description', $data) &&
            array_key_exists('unit_price', $data) &&
            array_key_exists('type', $data);
    }
}