import { Circle, Rectangle, Polygon } from "./figure";

const shapes = {
    circle: 0,
    rectangle: 1,
    polygon: 2,
}

//класс в котором создается canvas и его контекст помещаем в body
export class FigureManager {

        trigger(){
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext("2d");

            this.canvas.width = window.innerWidth - 50;      //ширина canvas
            this.canvas.height = window.innerHeight - 50;
            document.querySelector('body').append(this.canvas);

            this.iff(this.canvas)

            document.body.addEventListener("click", () => {
                this.display()
            });
        }

    iff(a) {
            if (a) {
                return  document.querySelector('body').append(a);

            } else {
                return  document.querySelector('body').remove();
            }
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