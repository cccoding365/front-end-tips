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

2. Waterfall layout design

- Use JavaScript instead of CSS
- Create image Element
- Set the position of images
- Listening window resize

3. Flip animation

- First: 记录要监控的元素位置
- Last: 记录元素结构变化后的位置
- Invert: 移动元素到 First 的位置
- Play: 使用动画还原元素到本来的位置