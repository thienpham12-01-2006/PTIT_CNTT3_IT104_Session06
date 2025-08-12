var Circle = /** @class */ (function () {
  function Circle(radius) {
    this.radius = radius;
  }
  Circle.prototype.calculateArea = function () {
    console.log("chu vi hinh tron la:", 2 * 3.14 * this.radius);
  };
  Circle.prototype.calculatePrimeter = function () {
    console.log("dien tich hinh tron la:", 3.14 * Math.pow(this.radius, 2));
  };
  return Circle;
})();
var Rectangle = /** @class */ (function () {
  function Rectangle(width, height) {
    this.width = width;
    this.height = width;
  }
  Rectangle.prototype.calculateArea = function () {
    console.log("chu vi hinh chu nhat la:", 2 * (this.width + this.height));
  };
  Rectangle.prototype.calculatePrimeter = function () {
    console.log("dien tich hinh chu nhat la:", this.width * this.height);
  };
  return Rectangle;
})();
var circle = new Circle(3);
circle.calculateArea();
circle.calculatePrimeter();
var rectangle = new Rectangle(3, 5);
rectangle.calculateArea();
rectangle.calculatePrimeter();
