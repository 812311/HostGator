<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class ProductTable extends AbstractMigration
{
    public function up()
    {
            $table = $this->table('Products');
            $table->addColumn('name', 'string');
            $table->addTimestamps();
            $table->create();
    }

    public function down()
    {
        	Schema::dropIfExists('Products');
    }
}
