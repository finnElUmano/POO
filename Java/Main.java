package Java;
class Main {
  public static void main(String[] args) {
    System.out.println("hola mundo");
    UberX uberX = new UberX("AMQ123", new Account("Andres Herrera ", "DFK4853"), "Chevrolet", "Sonic");
    uberX.setPassenger(4);
    uberX.printDataCar();

    /*car car2 = new car("KJK239", new Account("Andrea Herrera", "DSFS3042"));
    car2.passenger = 3;
    car2.printDataCar();*/
  }
}