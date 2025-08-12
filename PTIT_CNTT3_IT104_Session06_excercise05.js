var Vehicle = /** @class */ (function () {
    function Vehicle(speed) {
        this.speed = speed;
    }
    Vehicle.prototype.speedUp = function () {
        console.log("Tang toc do.");
    };
    Vehicle.prototype.slowDown = function () {
        console.log("Giam toc do");
    };
    Vehicle.prototype.stop = function () {
        console.log("Dua toc do ve 0");
    };
    return Vehicle;
}());
var speedVehicle = new Vehicle(40);
speedVehicle.slowDown();
speedVehicle.speedUp();
speedVehicle.stop();
