# Front-end Tips

Record some front-end knowledge, is constantly updated ...

1. Variable exchange

```js
var a = 1;
var b = 2;

// Temp
var temp = a;
a = b;
b = temp;

// ES6
[b, a] = [a, b];

// Math
a = a + b;
b = a - b;
a = a - b;

// Funny
a = b + (b = a) - b;

// Funny again
a = a ^ b;
b = a ^ b;
a = a ^ b;
```
