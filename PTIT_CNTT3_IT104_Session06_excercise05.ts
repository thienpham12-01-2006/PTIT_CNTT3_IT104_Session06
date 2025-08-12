interface ChangeSpeed {
  speedUp(): void;
  slowDown(): void;
  stop(): void;
}
class Vehicle implements ChangeSpeed {
  private speed: number;
  constructor(speed: number) {
    this.speed = speed;
  }

  speedUp(): void {
    console.log("Tang toc do.");
  }

  slowDown(): void {
    console.log("Giam toc do");
  }
  stop(): void {
    console.log("Dua toc do ve 0");
  }
}

let speedVehicle = new Vehicle(40);

speedVehicle.slowDown();
speedVehicle.speedUp();
speedVehicle.stop();
