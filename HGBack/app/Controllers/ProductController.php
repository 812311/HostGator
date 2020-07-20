<?php

namespace Controllers;

use Models\Product;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Models\Price;

class ProductController
{

    public static function getAllProducts(Request $request, Response $response, array $args): Response
    {
        $products = Product::with('price')->get();

        $result = [];
        foreach ($products as $product) {
            $indexProd = $product['id'];
            $product = $product->formatToNormalize();
            $result["product_$indexProd"] = $product;
        }
        $response = $response->withJson(["products" => $result]);
        return $response;
    }

    public static function getProduct(Request $request, Response $response, array $args): Response{
        $id = $args['id'] ?? '9999';
        $result = [];
        $product = Product::with('price')->find($id);
        $result["product_$id"] = $product->formatToNormalize();
        $response = $response->withJson(["products" => $result]);
        return $response;
    }
}

?>