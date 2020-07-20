<?php

require 'vendor/autoload.php';
require 'config/config.php';

use Models\Database;
//Initialize Illuminate Database Connection
new Database();


$configuration = [
  'settings' => [
      'displayErrorDetails' => true,
  ],
];

$configuration = new \Slim\Container($configuration);

?>