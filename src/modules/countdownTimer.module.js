import { Module } from "../core/module";

export class CountdownTimer extends Module {
  trigger() {
    this.timer = { count: "" };
    console.log(document.getElementById("timer-form"));
    if (
      !document.getElementById("timer-form") &&
      !document.getElementById("timer")
    ) {
      this.$rootElement = document.createElement("form");
      this.$rootElement.className = "timer-form";
      this.$rootElement.id = "timer-form";

      this.$timerFormInputLabel =
        document.createElement("label");
      this.$timerFormInputLabel.className =
        "timer-form__input-label";
      this.$timerFormInputLabel.innerText =
        "Задайте время до окончания таймера, мин:сек";

      this.$timerFormMinutesInput =
        document.createElement("input");
      this.$timerFormMinutesInput.className =
        "timer-form__minute-input";
      this.$timerFormMinutesInput.name = "minutes";
      this.$timerFormMinutesInput.type = "number";
      this.$timerFormMinutesInput.max = "60";
      this.$timerFormMinutesInput.min = "0";

      this.$timerFormSecondsInput =
        document.createElement("input");
      this.$timerFormSecondsInput.className =
        "timer-form__minute-input";
      this.$timerFormSecondsInput.name = "seconds";
      this.$timerFormSecondsInput.type = "number";
      this.$timerFormSecondsInput.max = "60";
      this.$timerFormSecondsInput.min = "1";

      this.$timerFormSubmitButton =
        document.createElement("button");
      this.$timerFormSubmitButton.disabled = true;
      this.$timerFormSubmitButton.className =
        "timer-form__submit-button";
      this.$timerFormSubmitButton.type = "submit";
      this.$timerFormSubmitButton.innerText = "Задать";

      this.$timerFormInputLabel.appendChild(
        this.$timerFormMinutesInput
      );
      this.$timerFormInputLabel.appendChild(
        this.$timerFormSecondsInput
      );

      this.$rootElement.appendChild(
        this.$timerFormInputLabel
      );

      this.$timerFormInputLabel.appendChild(
        this.$timerFormSubmitButton
      );

      document.body.appendChild(this.$rootElement);
    }
    this.$inputSeconds = this.$timerFormSecondsInput;
    this.$inputMinutes = this.$timerFormMinutesInput;
    this.$button = this.$timerFormSubmitButton;

    this.$inputSeconds.addEventListener(
      "input",
      this.handleInput.bind(this)
    );
    this.$inputMinutes.addEventListener(
      "input",
      this.handleInput.bind(this)
    );
    this.$rootElement.addEventListener(
      "submit",
      this.handleSubmit.bind(this)
    );
  }

  get isValid() {
    return this.timer.count >= 1 && this.timer.count <= 60;
  }

  handleInput(event) {
    this.timer.count = event.target.value;

    if (this.isValid) {
      this.$button.disabled = false;
    } else {
      this.$button.disabled = true;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      this.timer.count =
        Number(this.$inputSeconds.value) +
        Number(this.$inputMinutes.value) * 60;
      this.countTimer(this.timer.count);
      this.timer.count = "";
    }
    // ...
  }

  countTimer(count) {
    document.getElementById("timer-form").remove();
    this.$timerElement = document.createElement("form");
    this.$timerElement.className = "timer";
    this.$timerElement.id = "timer";

    document.body.appendChild(this.$timerElement);

    const timer = (count) => {
      if (count <= 0) {
        this.$timerElement.textContent =
          "Обратный отсчет окончен, удаляюсь!";
        setTimeout(() => {
          this.$timerElement.remove();
        }, 1500);
      } else {
        this.$timerElement.textContent =
          "Обратный отсчет: " + count;
        setTimeout(timer, 1000, --count);
      }
    };

    timer(count);
  }
}
