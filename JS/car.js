function Car(licence, driver) {
  this.id;
  this.licence = licence;
  this.driver = driver;
  this.passenger;
}

Car.prototype.printDataCar = function() {
  console.log(this.driver);
  console.log(this.driver.name);
  console.log(this.driver.document);
}

/*
CON ECMA+6

class Car {
  constructor (license, driver) {
    this.licence = licence
    this.driver = driver
    this.id
    this.passenger
  }
  
  //printDatacar(){} Also works

  printDataCar = () =>{
  consoale.log(this.driver);
  console.log(this.driver.name);
  console.log(this.driver.document);
  }
  
}
si queremos declarar un metodo, con esta nueva sintaxis 
dejaremos de utilizar la palabra clave function..!

*/ 