<?php
 
namespace Models;
 
use \Illuminate\Database\Eloquent\Model;
use Models\Product;
 
/*
* @property integer                                  id
* @property integer                                  product_id
* @property float                                    priceRenew
* @property float                                    priceOrder
* @property string                                   cycle
* @property integer                                  months
* @property \Carbon\Carbon                           created_at
* @property \Carbon\Carbon                           update_at
*/
class Price extends Model {
  protected $hidden = array('created_at', 'updated_at', 'product_id', 'id');

  public function product()
  {
      return $this->belongsTo(Product::class);
  }
}
 
?>