import { Module } from "../core/module";

export class ClicksModule extends Module {

    trigger() {
        const addOne = () => {
            count++;
        };

        document.addEventListener("click", addOne);

        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        let count = 0;

        this.timeout = setTimeout(() => {
            document.removeEventListener("click", addOne);
            alert(`За 3 секунды ты сделал ${count} кликов`);
        }, 3000);
    }
}