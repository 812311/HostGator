<?php


use Phinx\Seed\AbstractSeed;

class PriceSeeder extends AbstractSeed
{
    public function getDependencies()
    {
        return [
            'ProductSeeder'
        ];
    }
    /**
     * Run Method.
     *
     * Write your database seeder using this method.
     *
     * More information on writing seeders is available here:
     * https://book.cakephp.org/phinx/0/en/seeding.html
     */
    public function run()
    {
        $data = [
            [
                'product_id'    => '1',
                'priceRenew'=> 10.99,
                'priceOrder'=> 10.99,
                'cycle' => 'Monthly',
                'months'=> 1
            ],
            [
                'product_id'    => '1',
                'priceRenew'=> 102.99,
                'priceOrder'=> 102.99,
                'cycle' => 'Annually',
                'months'=> 12
            ],
            [
                'product_id'    => '1',
                'priceRenew'=> 306.99,
                'priceOrder'=> 306.99,
                'cycle' => 'Triennially',
                'months'=> 36
            ],
        ];

        $table = $this->table('Prices');
        $table->insert($data)
              ->save();

    }
}
