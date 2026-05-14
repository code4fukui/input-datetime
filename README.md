# input-datetime

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A set of custom HTML elements for date, time, and local date-time inputs, featuring built-in validation.

## Demo

Try the live demo: **https://code4fukui.github.io/input-datetime/**

## Features

- Provides `<input-date>`, `<input-time>`, and `<input-datetime-local>` custom elements.
- Simple, drop-in replacement for standard `<input>` elements.
- Built-in validation: automatically caps years greater than 9999 to prevent invalid data entry.
- Supports standard attributes like `id` and `required`.
- Easy to integrate and use with vanilla JavaScript.
- Future plan: `<input-datetime>` with timezone support.

## Usage

### 1. Import the Element

Import the desired element script into your HTML file. You can import one or more as needed.

```html
<!-- For <input-date> -->
<script type="module" src="https://code4fukui.github.io/input-datetime/input-date.js"></script>

<!-- For <input-time> -->
<script type="module" src="https://code4fukui.github.io/input-datetime/input-time.js"></script>

<!-- For <input-datetime-local> -->
<script type="module" src="https://code4fukui.github.io/input-datetime/input-datetime-local.js"></script>
```

### 2. Use in HTML

Place the custom element tag in your HTML. You can use standard attributes like `id` and `required`.

```html
<label for="my-date">Date:</label>
<input-date id="my-date" required></input-date>

<label for="my-time">Time:</label>
<input-time id="my-time"></input-time>

<label for="my-datetime">Date & Time (Local):</label>
<input-datetime-local id="my-datetime" required></input-datetime-local>
```

### 3. Interact with JavaScript

You can get and set the `.value` property of the element just like a standard input.

```html
<script type="module">
  const myDate = document.getElementById("my-date");

  // Get the value on change
  myDate.onchange = () => {
    console.log("Selected date:", myDate.value); // e.g., "2023-10-27"
  };

  // Set the value programmatically with a string
  myDate.value = "2025-01-01";
</script>
```

You can also set values using `Day`, `Time`, and `DateTime` objects from the [js.sabae.cc/DateTime.js](https://js.sabae.cc/DateTime.js) library.

```html
<script type="module">
  import { DateTime, Day, Time } from "https://js.sabae.cc/DateTime.js";

  // Set the current date, time, or datetime
  document.getElementById("my-date").value = new Day();
  document.getElementById("my-time").value = new Time();
  document.getElementById("my-datetime").value = new DateTime();
</script>
```

## Validation

The `<input-date>` and `<input-datetime-local>` elements include a validator that prevents years greater than 9999. If a user enters a year like `10000`, it will be automatically corrected to `9999`.

## License

MIT

---
by [@taisukef](https://fukuno.jig.jp/3370)