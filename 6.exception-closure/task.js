function parseCount(count) {
    const result = Number.parseFloat(count);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch(error) {
        return error;
    }
}

class Triangle {
    constructor(a,b,c) {
        if (a + b < c  || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return (this.a + this.b + this.c);
    }

    get area() {
        return Number.parseFloat(Math.sqrt(this.perimeter * (this.perimeter / 2 - this.a) * (this.perimeter / 2 - this.b) * (this.perimeter / 2 - this.c) / 2).toFixed(3));
    }
} 

function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c);
    } catch {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}