import { Module } from '../core/module'
import { random } from '../../src/utils'

const shapes = {
    circle: 0,
    rectangle: 1,
    polygon: 2,
    figure: 3,
}
export class ShapeModule extends Module {
    constructor(type, text, emoji, onlyClean) {
        super(type, text, emoji);
        this.onlyClean = onlyClean;
        this.canvas = document.querySelector('canvas');
        if (!this.canvas) {
            this.canvas = document.createElement('canvas');
        }
        this.ctx = this.canvas.getContext("2d");
    
        this.canvas.width = window.innerWidth - 100;      //ширина canvas
        this.canvas.height = window.innerHeight - 100;    //высота canvas
    
        document.querySelector('body').append(this.canvas);        
    }

    trigger() {
        this.display();
    }

    display() {
        const props = {
            canvas: this.canvas,
            ctx: this.ctx,
        }

        const shapeType = this.onlyClean ? shapes.figure : Math.floor(Math.random()*3);
        
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
            case shapes.figure:
                figure = new Figure(props);
                break;
            default: 
                return;
        }        
        figure.render();
    }    
}

//общий класс для фигур
export class Figure {
    constructor (props) {
        this.props = props;
        this.x = random(0, props.canvas.width);
        this.y = random(0, props.canvas.height);
        this.width = random(25, 200); 
        this.height = random(25, 200);
        const color = `rgb(${Math.floor(random(0, 256))}, ${Math.floor(random(0, 256))}, ${Math.floor(random(0, 256))})`;
        this.props.ctx.fillStyle = color;
    }

    // randomInRange(min, max) {
    //     return Math.random() * (max - min) + min;
    // }
    //очистка canvas и очистка списка подпутей перед отрисовкой новой фигуры
    render() {
        this.props.ctx.clearRect(0, 0, this.props.canvas.width, this.props.canvas.height);
        this.props.ctx.beginPath();
    }
}

//класс кругов
export class Circle extends Figure {
    render() {
        super.render();
        this.props.ctx.arc(this.x, this.y, Math.min(this.width, this.height) / 2, 0, 2 * Math.PI); 
        this.props.ctx.fill();      
    }
}
//класс прямоугольников
export class Rectangle extends Figure {
    render() {
        super.render();
        this.props.ctx.rect(this.x, this.y, this.width, this.height); 
        this.props.ctx.fill();
    }   
}
//класс многоугольников
export class Polygon extends Figure {
    render() {
        super.render();
        const sides = Math.floor(random(3, 8)); 
        const angle = (Math.PI * 2) / sides;
        this.props.ctx.moveTo(this.x + this.width * Math.cos(0), this.y + this.height * Math.sin(0));
        for (let i = 1; i < sides; i++) {
            this.props.ctx.lineTo(this.x + this.width * Math.cos(angle * i), this.y + this.height * Math.sin(angle * i));
        }
        this.props.ctx.closePath();
        this.props.ctx.fill();
    }
}
