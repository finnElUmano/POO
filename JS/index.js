var car = new Car("WWD459", new Account("Andres Herrera", "DSFD3843"));
car.passenger = 4;
car.printDataCar();

var uberX = new UberX("EKK342", new Account("David Guzman", "9DF0G"), "Chevrolet", "Camaro")
uberX.passenger = 4;
uberX.printDataCar();

var paypal = new Paypal("DFSF88", "ejemplo2@outlook.com");
paypal.printDataPayment();

var user = new User0("Daniel Oscar", "SD001S", "jose89@gmail.com", "mypass");
user.printDataAccount();

/*
var car = new Car("WWD459", new Account("Andres Herrera", "DSFD3843"));
car.passenger = 4;
car.printDataCar();
*/