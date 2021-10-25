import { InputWithValidator } from "https://code4fukui.github.io/input-number/InputWithValidator.js";
import { DateValidator } from "./DateValidator.js";

class InputDate extends InputWithValidator {
  constructor(opts) {
    super(new DateValidator(), opts);
    this.inp.type = "date";
    this.inp.onkeydown = this.inp.onkeyup = undefined;
    this.inp.addEventListener("change", () => {
      const v = this.inp.value;
      if (v) {
        const v2 = this.validator.validate(v);
        if (v != v2) {
          this.inp.value = v2;
        }
      }
    });
  }
  set value(v) {
    super.value = v.toString();
  }
  get value() {
    return super.value;
  }
}

customElements.define("input-date", InputDate);

export { InputDate };
