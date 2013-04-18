uax11
=====

Convert between full/half-width ASCII characters:

```js
var uax11 = require('uax11');
var full = uax11.toFullwidth('Döt'); // Ｄｏ̈ｔ
var half = uax11.toHalfwidth('Ｎｅｔ'); // Net
```

This module handles combining characters correctly, and returns the result in
`NFD` form by default. To get back `NFC`, please use the `toFullwidthNFC` and
`toHalfwidthNFC` functions instead.

For details, see Unicode Standard Annex #11: http://www.unicode.org/reports/tr11/

# CC0 1.0 Universal

To the extent possible under law, 唐鳳 has waived all copyright
and related or neighboring rights to uax11.

This work is published from Taiwan.

http://creativecommons.org/publicdomain/zero/1.0
