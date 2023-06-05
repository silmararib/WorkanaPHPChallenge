<?php

namespace Silmara\MarketApi\domain\controller;

final class Router
{
    // Prevents the class to be instantiated
    private function __construct(){}

    public static function routing() {
        $uri = array_values(array_filter(explode("/", $_SERVER['REQUEST_URI'])));
        $route = sizeof($uri) > 0 ? $uri[0] : '';

        switch($route) {
            case 'products': { (new ProductController())->processingRequest(); break; }
            case 'product-types': { (new ProductTypeController())->processingRequest(); break; }
            case 'sales': { (new SaleController())->processingRequest(); break; }
            default: http_response_code(404);
        }
    }
}