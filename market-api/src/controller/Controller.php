<?php

namespace Silmara\MarketApi\controller;

abstract class Controller
{
    public function processingRequest(){
        $this->checkInnerRoutes();
        $this->processingMethod();
    }

    protected function checkInnerRoutes() {
        if (sizeof(array_filter(explode("/", $_SERVER['REQUEST_URI']))) > 1) {
            echo "Route not found";
            exit();
        }
    }

    protected function processingMethod() {
        $method = $_SERVER['REQUEST_METHOD'];
        $data = json_decode(file_get_contents('php://input'), true);

        switch ($method) {
            case 'GET': { $this->getRequest(); break; }
            case 'POST': { $this->postRequest($data); break; }
            default: echo "Method not allowed";
        }
    }

    abstract protected function getRequest();
    abstract protected function postRequest(array $data);
}