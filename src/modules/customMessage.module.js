import { Module } from "../core/module";

export class CustomMessage extends Module {
  trigger() {
    function message() {
      if (!document.getElementById("message")) {
        const messageElement =
          document.createElement("div");
        messageElement.className = "message";
        messageElement.id = "message";
        document.body.appendChild(messageElement);
        let message = prompt("Введите сообщение");
        // );
        let count = 3;
        const timer = (count) => {
          if (!count) {
            messageElement.remove();
          } else {
            messageElement.textContent = `${message}(${count})`;
            setTimeout(timer, 1000, --count);
          }
        };
        timer(count);
      }
    }
  }
}

const customMessage = new CustomMessage();

document.addEventListener(
  "keydown",
  new customMessage.trigger()
);
