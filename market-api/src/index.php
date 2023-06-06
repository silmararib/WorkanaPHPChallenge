<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');


require_once '../vendor/autoload.php';

use Silmara\MarketApi\domain\controller\Router;

Router::routing();
