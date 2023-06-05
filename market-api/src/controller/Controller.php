<?php

namespace Silmara\MarketApi\controller;

abstract class Controller
{
    public function processingRequest(): void {
        $this->checkInnerRoutes();
        $this->processingMethod();
    }

    protected function checkInnerRoutes(): void {
        if (sizeof(array_filter(explode("/", $_SERVER['REQUEST_URI']))) > 1) {
            http_response_code(404);
            exit();
        }
    }

    protected function processingMethod(): void {
        $method = $_SERVER['REQUEST_METHOD'];
        $data = json_decode(file_get_contents('php://input'), true);

        switch ($method) {
            case 'GET': {
                $this->getRequest();
                break;
            }
            case 'POST': {
                if (!$this->isContentValid($data)) {
                    http_response_code(400);
                    exit();
                }
                $this->postRequest($data);
                break;
            }
            default: http_response_code(405);
        }
    }

    protected function isContentValid($data): bool {
        return ($data != null) && (sizeof($data) > 0);
    }

    abstract protected function getRequest();
    abstract protected function postRequest(array $data);
}