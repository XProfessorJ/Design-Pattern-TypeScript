interface Shape {
    draw(): void;
}

class Circle implements Shape {
    draw(): void {
        console.log('draw() Circle')
    }
}

class Rectangle implements Shape {
    draw(): void {
        console.log('draw() Rectangle')
    }
}

class ShapeDecorator implements Shape {
    shape: Shape;
    draw(): void {
        this.shape.draw();
    }
    constructor(shape: Shape) {
        this.shape = shape;
    }
}

class RedShapeDecorator extends ShapeDecorator {
    constructor(shape: Shape) {
        super(shape);
    }
    draw(): void {
        this.shape.draw()
    }
    private  setRedBorder(shape:Shape){
       console.log('setRedBorder')
     }
}