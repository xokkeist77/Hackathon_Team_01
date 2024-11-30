import "./styles.css"
import {ContextMenu} from "./menu";

const contextMenuInstance = new ContextMenu("menu")
const menu = document.getElementById('menu');


document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        contextMenuInstance.open();
    })

    document.body.addEventListener('click', event => {
        if (menu && menu.classList.contains('open') && !menu.contains(event.target)) {
            contextMenuInstance.close();
        }
    })
})



