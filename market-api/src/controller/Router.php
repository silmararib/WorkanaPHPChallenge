<?php

namespace Silmara\MarketApi\controller;

final class Router
{
    // Prevents the class to be instantiated
    private function __construct(){}

    public static function routing() {
        $route = array_values(array_filter(explode("/", $_SERVER['REQUEST_URI'])))[0];

        switch($route) {
            case 'products': { (new ProductController())->processingRequest(); break; }
            case 'product-types': { (new ProductTypeController())->processingRequest(); break; }
            case 'sales': { (new SaleController())->processingRequest(); break; }
            default: echo "Route not found";
        }
    }
}