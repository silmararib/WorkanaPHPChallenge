<?php

namespace Silmara\MarketApi\controller;

final class Controller
{
    // Prevents the class to be instantiated
    private function __construct(){}

    public static function routing() {
        $route = array_values(array_filter(explode("/", $_SERVER['REQUEST_URI'])))[0];

        switch($route) {
            case 'products': { ProductController::processingRequest(); break; }
            case 'product-types': { ProductTypeController::processingRequest(); break; }
            case 'sales': { SaleController::processingRequest(); break; }
            default: echo "Route not found";
        }
    }
}