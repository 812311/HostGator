<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class PriceTable extends AbstractMigration
{
    public function up()
    {
            $table = $this->table('Prices');
            $table->addColumn('product_id', 'integer');
            $table->addForeignKey('product_id', 'Products', 'id', array('delete'=> 'NO_ACTION', 'update'=> 'NO_ACTION'));
            $table->addColumn('priceRenew', 'float');
            $table->addColumn('priceOrder', 'float');
            $table->addColumn('cycle', 'string');
            $table->addColumn('months', 'integer');
            $table->addTimestamps();
            $table->create();
    }

    public function down()
    {
        	Schema::dropIfExists('Prices');
    }
}
