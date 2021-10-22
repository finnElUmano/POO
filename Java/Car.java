package Java;

class car {
  Integer id;
  String license;
  Account driver;
  Integer passenger;

  public car(String license, Account driver) {
    this.license = license;
    this.driver = driver;
  }

  void printDataCar() {
    System.out.println("License: " + license + " Driver: " + driver.name);
  }

}