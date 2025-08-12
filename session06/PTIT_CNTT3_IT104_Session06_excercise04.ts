interface Geometry {
  calculateArea(): void;
  calculatePrimeter(): void;
}

class Circle implements Geometry {
  private radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): void {
    console.log(`chu vi hinh tron la:`, 2 * 3.14 * this.radius);
  }

  calculatePrimeter(): void {
    console.log("dien tich hinh tron la:", 3.14 * this.radius ** 2);
  }
}

class Rectangle implements Geometry {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = width;
  }

  calculateArea(): void {
    console.log("chu vi hinh chu nhat la:", 2 * (this.width + this.height));
  }

  calculatePrimeter(): void {
    console.log("dien tich hinh chu nhat la:", this.width * this.height);
  }
}

let circle = new Circle(3);
circle.calculateArea();
circle.calculatePrimeter();

let rectangle = new Rectangle(3, 5);
rectangle.calculateArea();
rectangle.calculatePrimeter();