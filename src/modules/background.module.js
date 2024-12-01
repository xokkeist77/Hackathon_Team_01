import {Module} from "../core/module";
import {random} from "../utils";

export class BackgroundModule extends Module {

    trigger() {
        this._getRandomColor()
    }

    _getRandomColor() {
        let numberOfRandom = random(0, 16);
        const letters = "0123456789ABCDEF";
        let colors = "#";
        for (let i = 0; i < 6; i++) {
            colors += letters[Math.floor(Math.random() * numberOfRandom)];
        }
        return document.body.style.backgroundColor = colors
    }
}