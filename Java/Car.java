package Java;

class Car {
  private Integer id;
  private String license;
  private Account driver;
  protected Integer passenger;

  public Car(String license, Account driver) {
    this.license = license;
    this.driver = driver;
  }

  void printDataCar() {
    if(passenger != null){
      System.out.println("License: " + license + " Driver: " + driver.name + "Passenger: " + passenger);
    }
  }

  public Integer getPassenger(){
    return passenger;
  }
  
  public void setPassenger(Integer passenger) {
    if (passenger == 4){
    this.passenger = passenger;
    }else{
      System.out.println("Nesesitas asignar 4 pasjeros");
    }
  }

}