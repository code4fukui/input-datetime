import { InputWithValidator } from "https://code4fukui.github.io/input-number/InputWithValidator.js";
import { Validator } from "https://code4fukui.github.io/input-number/Validator.js";

class InputTime extends InputWithValidator {
  constructor(opts) {
    super(new Validator(), opts);
    this.inp.type = "time";
    this.inp.onkeydown = this.inp.onkeyup = undefined;
  }
}

customElements.define("input-time", InputTime);

export { InputTime };
