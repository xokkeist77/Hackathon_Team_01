import { Module } from "../core/module";

export class ClicksModule extends Module {
  trigger() {
    let count = 0;
    console.log("triggered");

    const addOne = () => {
      count++;
    };

    document.addEventListener("click", addOne);

    setTimeout(() => {
      document.removeEventListener("click", addOne);
      alert(`За 3 секунды ты сделал ${count} кликов`);
    }, 3000);
  }
}
