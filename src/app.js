import "./styles.css"
import {ContextMenu} from "./menu";

const contextMenu = new ContextMenu("#menu")
const menu = document.getElementById('menu');

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        menu.style.left = event.clientX + 'px';
        menu.style.top = event.clientY + 'px';
        contextMenu.open();

    })

    document.body.addEventListener('click', event => {
        if (menu && menu.classList.contains('open') && !menu.contains(event.target)) {
            contextMenu.close();
        }
    })
})



