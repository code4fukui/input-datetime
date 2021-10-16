import { InputWithValidator } from "https://code4fukui.github.io/input-number/InputWithValidator.js";
import { Validator } from "https://code4fukui.github.io/input-number/Validator.js";
import { DateTime } from "https://js.sabae.cc/DateTime.js";

class InputDateTimeLocal extends InputWithValidator {
  constructor(opts) {
    super(new Validator(), opts);
    this.inp.type = "datetime-local";
    this.inp.onkeydown = this.inp.onkeyup = undefined;
  }
  set value(v) {
    if (v instanceof DateTime) {
      this.inp.value = v.toStringLocal();
    } else {
      this.inp.value = v.toString();
    }
  }
  get value() {
    return super.value;
  }
}

customElements.define("input-datetime-local", InputDateTimeLocal);

export { InputDateTimeLocal };
