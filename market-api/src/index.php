<?php
header("Access-Control-Allow-Origin: *");

require_once '../vendor/autoload.php';

use Silmara\MarketApi\domain\controller\Router;

Router::routing();
