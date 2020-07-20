<?php

return
[
    'paths' => [
        'migrations' => '%%PHINX_CONFIG_DIR%%/app/migrations',
        'seeds' => '%%PHINX_CONFIG_DIR%%/app/seeds'
    ],
    'environments' => [
        'default_migration_table' => 'phinxlog',
        'default_environment' => 'development',
        
        'development' => [
            'adapter' => 'mysql',
            'host' => 'localhost',
            'name' => 'testhg',
            'user' => 'root',
            'pass' => 'password',
            'port' => '3306',
            'charset' => 'utf8',
        ]
    ],
    'version_order' => 'creation'
];
