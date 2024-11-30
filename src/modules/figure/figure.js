//общий класс для фигур
export class Figure {
    constructor (props) {
        this.props = props;
        this.x = this.randomInRange(0, props.canvas.width);
        this.y = this.randomInRange(0, props.canvas.height);
        this.width = this.randomInRange(25, 200); 
        this.height = this.randomInRange(25, 200);
        const color = `rgb(${Math.floor(this.randomInRange(0, 256))}, ${Math.floor(this.randomInRange(0, 256))}, ${Math.floor(this.randomInRange(0, 256))})`;
        this.props.ctx.fillStyle = color;
    }

    randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }
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
        const sides = Math.floor(this.randomInRange(3, 8)); 
        const angle = (Math.PI * 2) / sides;
        this.props.ctx.moveTo(this.x + this.width * Math.cos(0), this.y + this.height * Math.sin(0));
        for (let i = 1; i < sides; i++) {
            this.props.ctx.lineTo(this.x + this.width * Math.cos(angle * i), this.y + this.height * Math.sin(angle * i));
        }
        this.props.ctx.closePath();
        this.props.ctx.fill();
    }
}