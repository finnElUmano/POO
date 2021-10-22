<?php

class Car {
  public $id;
  public $licence;
  public $driver;
  public $passenger;

  public function function___construct($licence, $driver) {
    $this-> licence = $licence;
    $this-> driver= $driver;
  }

  public function PrintDataCar(){
    echo "licence:$this->licence,conductor:{$this->driver->name},document:{$this->driver->document}";
  }
}
?>