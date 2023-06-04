<?php

namespace Silmara\MarketApi\controller;

class ProductController
{
    // Prevents the class to be instantiated
    private function __construct(){}

    public static function processingRequest(){
        /*  /product-types  */
        if (sizeof(array_filter(explode("/", $_SERVER['REQUEST_URI']))) > 1) {
            echo "Route not found";
            exit();
        }
    }
}