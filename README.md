# input-datetime
  
- https://code4fukui.github.io/input-datetime/
- input-date, input-time, input-datetime-local
- todo: input-datetime (with timezone)

## usage

```html
<script type="module" src="https://code4fukui.github.io/input-datetime/input-date.js"></script>
<input-date id=inp required=required></input-date>

<script type="module">
onload = () => {
  inp.onchange = () => {
    console.log(inp.value);
  };
};
</script>
```
