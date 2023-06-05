<?php

namespace Silmara\MarketApi\domain\controller;

use Silmara\MarketApi\domain\model\ProductType;
use Silmara\MarketApi\domain\repository\ProductTypeRepository;

class ProductTypeController extends Controller
{
    private ProductTypeRepository $repository;

    public function __construct()
    {
        $this->repository = new ProductTypeRepository();
    }

    protected function getRequest(): void
    {
        $list = $this->repository->getAll();
        $json = json_encode($list);
        echo $json;
    }

    protected function postRequest(array $data): void
    {
        $type = new ProductType($data['code'], $data['description'], $data['tax_rate']);
        if (!$this->repository->post($type)) {
            http_response_code(500);
            exit();
        }
    }

    protected function isContentValid($data): bool
    {
        return parent::isContentValid($data) &&
            array_key_exists('code', $data) &&
            array_key_exists('description', $data) &&
            array_key_exists('tax_rate', $data);
    }
}