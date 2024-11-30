import {Module} from "../core/module";

export class RandomShape extends Module {

    trigger() {
        this.action()
    }

    action() {
        const shape = document.createElement('div');
        shape.style.position = 'absolute';
        shape.style.width = `${Math.floor(Math.random() * 100) + 50}px`;
        shape.style.height = `${Math.floor(Math.random() * 100) + 50}px`;
        shape.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        shape.style.left = `${Math.floor(Math.random() * (window.innerWidth - 100))}px`;
        shape.style.top = `${Math.floor(Math.random() * (window.innerHeight - 100))}px`;
        document.body.appendChild(shape);
    }

}
