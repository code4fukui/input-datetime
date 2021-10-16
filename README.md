# input-alpha
  
https://code4fukui.github.io/input-alpha/

## usage

```html
<script type="module" src="https://code4fukui.github.io/input-alpha/input-alpha.js"></script>
<input-alpha id=inp maxlength=5></input-alpha>

<script type="module">
onload = () => {
  inp.onchange = () => {
    console.log(inp.value);
  };
};
</script>
```
