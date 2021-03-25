:cherries: [@aureooms/js-pairs](https://aureooms.github.io/js-pairs)
==

Pairs set for JavaScript.
See [docs](https://aureooms.github.io/js-pairs/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {EfficientlyInvertiblePairs as Pairs} from '@aureooms/js-pairs';
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

[![License](https://img.shields.io/github/license/aureooms/js-pairs.svg)](https://raw.githubusercontent.com/aureooms/js-pairs/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-pairs.svg)](https://www.npmjs.org/package/@aureooms/js-pairs)
[![Build](https://img.shields.io/travis/aureooms/js-pairs/main.svg)](https://travis-ci.com/aureooms/js-pairs/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-pairs.svg)](https://david-dm.org/aureooms/js-pairs)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-pairs.svg)](https://david-dm.org/aureooms/js-pairs?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-pairs.svg)](https://github.com/aureooms/js-pairs/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-pairs.svg)](https://www.npmjs.org/package/@aureooms/js-pairs)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-pairs.svg)](https://codeclimate.com/github/aureooms/js-pairs/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-pairs.svg)](https://codeclimate.com/github/aureooms/js-pairs/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-pairs/main.svg)](https://codecov.io/gh/aureooms/js-pairs)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-pairs.svg)](https://codeclimate.com/github/aureooms/js-pairs/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-pairs/badge.svg)](https://aureooms.github.io/js-pairs/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-pairs)](https://bundlephobia.com/result?p=@aureooms/js-pairs)
