import { Validator } from "https://code4fukui.github.io/input-number/Validator.js";

class DateValidator extends Validator { // yyyy-mm-dd
  validate(s) {
    if (!s) {
      return s;
    }
    const ymd = s.split("-");
    const year = parseInt(ymd[0]);
    if (year <= 9999) {
      return s;
    }
    return 9999 + "-" + ymd[1] + "-" + ymd[2];
  }
}

export { DateValidator };
