import { Module } from '../core/module'
import { random } from '../utils';

const shapes = {
    circle: 0,
    rectangle: 1,
    polygon: 2,
}

export class ShapeModule extends Module {
    constructor(type, text, emoji) {
        super(type, text, emoji);
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = window.innerWidth - 100;      //ширина canvas
        this.canvas.height = window.innerHeight - 100;    //высота canvas

        document.querySelector('body').append(this.canvas);
    }

    clearRect() {
        this.ctx.fillStyle = `rgb(${Math.floor(random(0, 256))}, ${Math.floor(random(0, 256))}, ${Math.floor(random(0, 256))})`;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
    }

    getRandomParameters() {
        return {
            x: random(0, this.canvas.width),
            y: random(0, this.canvas.height),
            width: random(25, 200),
            height: random(25, 200)
        }
    }

    drawCircle() {
        const {x, y, width, height} = this.getRandomParameters();

        this.ctx.arc(x, y, Math.min(width, height) / 2, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    drawRectangle() {
        const {x, y, width, height} = this.getRandomParameters();

        this.ctx.rect(x, y, width, height);
        this.ctx.fill();
    }

    drawPolygon() {
        const {x, y, width, height} = this.getRandomParameters();
        const sides = Math.floor(random(3, 8));
        const angle = (Math.PI * 2) / sides;

        this.ctx.moveTo(x + width * Math.cos(0), y + height * Math.sin(0));

        for (let i = 1; i < sides; i++) {
            this.ctx.lineTo(x + width * Math.cos(angle * i), y + height * Math.sin(angle * i));
        }

        this.ctx.closePath();
        this.ctx.fill();
    }

    trigger() {
        this.clearRect();
        const shapeType = Math.floor(Math.random()*3);

        switch(shapeType) {
            case shapes.circle:
                this.drawCircle()
                break;
            case shapes.rectangle:
                this.drawRectangle()
                break;
            case shapes.polygon:
                this.drawPolygon()
                break;
        }
    }
}