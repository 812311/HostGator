<?php

namespace Models;

use \Illuminate\Database\Eloquent\Model;
use Models\Price;

/*
* @property integer                                  id
* @property string                                   name
* @property \Carbon\Carbon                           created_at
* @property \Carbon\Carbon                           update_at
*/

class Product extends Model
{
    protected $hidden = array('created_at', 'updated_at');

    public function price()
    {
        return $this->hasMany(Price::class);
    }

    public function formatToNormalize()
    {
        $newArrayCycle = [];
        foreach ($this->price as $cycle){
            $newArrayCycle[$cycle['cycle']] = $cycle;
            unset($newArrayCycle[$cycle['cycle']]['cycle']);
        }

        $this['cycle'] = $newArrayCycle;

        unset($this['price']);

        return $this;
    }
}

?>