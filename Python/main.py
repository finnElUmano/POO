from car import Car      #primero el nombre del archivo luego de la clase
from account import Account

if __name__ == "__main__":
  print("hello World")
  
  car = Car("DSFD394", Account("Felipe Guzman", "KDJD0390")) 
  print(vars(car))
  print(vars(car.driver))

