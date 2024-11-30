import { Module } from "../core/module";

export class CountdownTimer extends Module {
  trigger() {
    function countdownTimer() {
      if (!document.getElementById("timer")) {
        const timerElement = document.createElement("div");
        timerElement.className = "timer";
        timerElement.id = "timer";
        document.body.appendChild(timerElement);
        let count = 3;
        // let count = Number(
        //   prompt("Введите время до окончания работы таймера")
        // );

        const timer = (count) => {
          if (!count) {
            timerElement.textContent =
              "Обратный отсчет окончен, удаляюсь!";
            setTimeout(() => {
              timerElement.remove();
            }, 1500);
          } else {
            timerElement.textContent =
              "Обратный отсчет: " + count;
            setTimeout(timer, 1000, --count);
          }
        };

        timer(count);
      }
    }
  }
}

const timer = new CountdownTimer();

document.addEventListener("click", timer.trigger());
