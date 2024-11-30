import { Figure, Circle, Rectangle, Polygon } from "./figure";

const shapes = {
    circle: 0,
    rectangle: 1,
    polygon: 2,
}
//класс в котором создается canvas и его контекст помещаем в body
export class FigureManager {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext("2d");
    
        this.canvas.width = window.innerWidth;      //ширина canvas
        this.canvas.height = window.innerHeight;    //высота canvas
    
        document.querySelector('body').append(this.canvas);
    }

    display() {
        const props = {
            canvas: this.canvas,
            ctx: this.ctx,
        }

        const shapeType = Math.floor(Math.random()*3);

        let figure;
        
        switch(shapeType) {
            case shapes.circle:
                figure = new Circle(props);
                break;
            case shapes.rectangle:
                figure = new Rectangle(props);
                break;
            case shapes.polygon:
                figure = new Polygon(props);
                break;
            default: 
                return;
        }        
        figure.render();
    }    
}
