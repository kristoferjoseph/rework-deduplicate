rework-deduplicate
================
[![BuildStatus](https://travis-ci.org/kristoferjoseph/rework-deduplicate.png?branch=master)](https://travis-ci.org/kristoferjoseph/rework-deduplicate)
Rework plugin to remove duplicate class definitions

Install
-------
`npm i --save`

Usage
-----
```
var rework = require('rework'),
    dedupe = require('rework-deduplicate'),
    read = require('fs').readFileSync,
    output;

    output = rework(read('path/to/source.css', 'utf8'))
        .use(dedupe());
```

Example
-------

Input:

```
.button {
    background: black;
}
.button {
    background: red;
}
.button {
    background: black;
}
```

Output:
```
.button {
    background: black;
}
.button {
    background: red;
}
```

