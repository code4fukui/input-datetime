import { InputWithValidator } from "https://code4fukui.github.io/input-number/InputWithValidator.js";
import { Validator } from "https://code4fukui.github.io/input-number/Validator.js";

class InputTime extends InputWithValidator {
  constructor(opts) {
    super(new Validator(), opts);
    this.inp.type = "time";
    this.inp.onkeydown = this.inp.onkeyup = undefined;
  }
  set value(v) {
    super.value = v.toString();
  }
  get value() {
    return super.value;
  }
}

customElements.define("input-time", InputTime);

export { InputTime };
