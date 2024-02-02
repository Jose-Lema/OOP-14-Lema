function Rectangle(name, width, height) {
    this.name = name,
    this.width = width,
    this.height = height;

    this.area = () => this.height * this.width;
}

const rect1 = new Rectangle('Rectangle 1', 12, 13);
console.log(rect1.area());