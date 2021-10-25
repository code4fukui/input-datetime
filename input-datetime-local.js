import { InputWithValidator } from "https://code4fukui.github.io/input-number/InputWithValidator.js";
import { DateValidator } from "./DateValidator.js";
import { DateTime } from "https://js.sabae.cc/DateTime.js";

class InputDateTimeLocal extends InputWithValidator {
  constructor(opts) {
    super(new DateValidator(), opts);
    this.inp.type = "datetime-local";
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
    if (v instanceof DateTime) {
      super.value = v.toStringLocal();
    } else {
      super.value = v.toString();
    }
  }
  get value() {
    return super.value;
  }
}

customElements.define("input-datetime-local", InputDateTimeLocal);

export { InputDateTimeLocal };
