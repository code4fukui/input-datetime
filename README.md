# input-datetime
  
https://code4fukui.github.io/input-datetime/

## usage

```html
<script type="module" src="https://code4fukui.github.io/input-datetime/input-datetime.js"></script>
<input-datetime id=inp required=required></input-datetime>

<script type="module">
onload = () => {
  inp.onchange = () => {
    console.log(inp.value);
  };
};
</script>
```
