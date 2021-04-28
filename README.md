:cherries: [@data-structure/pairs](https://data-structures-and-algorithms.github.io/pairs)
==

Pairs set for JavaScript.
See [docs](https://data-structures-and-algorithms.github.io/pairs/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {EfficientlyInvertiblePairs as Pairs} from '@data-structure/pairs';
const pairs = Pairs.from(['ab', [1,2], [1,3]]);
pairs.left(); // a 1
pairs.right(); // b 2 3
pairs.invert().right(); // a 1
pairs.leftOf(3); // 1
pairs.rightOf(1); // 2 3
pairs.has([1, 2]); // true
pairs.add('bc');
...
```

[![License](https://img.shields.io/github/license/data-structures-and-algorithms/pairs.svg)](https://raw.githubusercontent.com/data-structures-and-algorithms/pairs/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@data-structure/pairs.svg)](https://www.npmjs.org/package/@data-structure/pairs)
[![Tests](https://img.shields.io/github/workflow/status/data-structures-and-algorithms/pairs/ci:test?event=push&label=tests)](https://github.com/data-structures-and-algorithms/pairs/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/data-structures-and-algorithms/pairs.svg)](https://david-dm.org/data-structures-and-algorithms/pairs)
[![Dev dependencies](https://img.shields.io/david/dev/data-structures-and-algorithms/pairs.svg)](https://david-dm.org/data-structures-and-algorithms/pairs?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/data-structures-and-algorithms/pairs.svg)](https://github.com/data-structures-and-algorithms/pairs/issues)
[![Downloads](https://img.shields.io/npm/dm/@data-structure/pairs.svg)](https://www.npmjs.org/package/@data-structure/pairs)

[![Code issues](https://img.shields.io/codeclimate/issues/data-structures-and-algorithms/pairs.svg)](https://codeclimate.com/github/data-structures-and-algorithms/pairs/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/data-structures-and-algorithms/pairs.svg)](https://codeclimate.com/github/data-structures-and-algorithms/pairs/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/data-structures-and-algorithms/pairs/main.svg)](https://codecov.io/gh/data-structures-and-algorithms/pairs)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/data-structures-and-algorithms/pairs.svg)](https://codeclimate.com/github/data-structures-and-algorithms/pairs/trends/technical_debt)
[![Documentation](https://data-structures-and-algorithms.github.io/pairs/badge.svg)](https://data-structures-and-algorithms.github.io/pairs/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@data-structure/pairs)](https://bundlephobia.com/result?p=@data-structure/pairs)
