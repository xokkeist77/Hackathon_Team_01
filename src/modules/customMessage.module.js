import { Module } from "../core/module";
import { random } from "../utils";

export class CustomMessage extends Module {
  trigger() {
    this.message = [
      { id: 0, text: "lorem ipsum" },
      { id: 1, text: "Cached modules" },
      { id: 2, text: "Entrypoint main" },
      { id: 3, text: "Assets by path" },
      { id: 4, text: "Compiled successfully" },
      { id: 5, text: "Parser.unexpected" },
      { id: 6, text: "Module build failed" },
      { id: 7, text: "SyntaxError" },
      { id: 8, text: "auxiliary assets" },
      { id: 9, text: "code generated" },
      { id: 10, text: "main.bundle.js" },
    ];
    let idMessage = random(0, 10);
    let message = this.message[idMessage].text;

    if (!document.getElementById("message")) {
      this.$messageElement = document.createElement("div");
      this.$messageElement.className = "message";
      this.$messageElement.id = "message";
      document.body.appendChild(this.$messageElement);
      let count = 2;
      const timer = (count) => {
        if (count <= 0) {
          this.$messageElement.remove();
        } else {
          this.$messageElement.textContent = `${message}(${count})`;
          setTimeout(timer, 1000, --count);
        }
      };
      timer(count);
    }
  }
}
