import {Module} from "../core/module";

export class ClearModule extends Module {
    trigger() {
        this.hidePageContent()
        document.body.style.backgroundColor = 'white'
    }

    hidePageContent() {
        document.body.style.visibility = 'hidden';
    }
}