<?php

require_once('car.php');
require_once('account.php');

$car = new Car("SDS0934", new Account("Andres Herrera", "SDF3932"));

$car->PrintDataCar();