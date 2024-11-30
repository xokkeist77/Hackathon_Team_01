import { FigureManager } from './modules/figure/figureManager'
import './styles.css'


const figureManager = new FigureManager();
window.addEventListener("click", () => {
    figureManager.display()
});

//setInterval(figureManager.display.bind(FigureManager), 1000);
//console.log(document.querySelector('body'))