:cherries: [@collection-abstraction/pairs](https://collection-abstraction.github.io/pairs)
==

Pairs set for JavaScript.
See [docs](https://collection-abstraction.github.io/pairs/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {EfficientlyInvertiblePairs as Pairs} from '@collection-abstraction/pairs';
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

[![License](https://img.shields.io/github/license/collection-abstraction/pairs.svg)](https://raw.githubusercontent.com/collection-abstraction/pairs/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@collection-abstraction/pairs.svg)](https://www.npmjs.org/package/@collection-abstraction/pairs)
[![Tests](https://img.shields.io/github/workflow/status/collection-abstraction/pairs/ci?event=push&label=tests)](https://github.com/collection-abstraction/pairs/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/collection-abstraction/pairs.svg)](https://github.com/collection-abstraction/pairs/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/collection-abstraction/pairs.svg)](https://github.com/collection-abstraction/pairs/issues)
[![Downloads](https://img.shields.io/npm/dm/@collection-abstraction/pairs.svg)](https://www.npmjs.org/package/@collection-abstraction/pairs)

[![Code issues](https://img.shields.io/codeclimate/issues/collection-abstraction/pairs.svg)](https://codeclimate.com/github/collection-abstraction/pairs/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/collection-abstraction/pairs.svg)](https://codeclimate.com/github/collection-abstraction/pairs/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/collection-abstraction/pairs/main.svg)](https://codecov.io/gh/collection-abstraction/pairs)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/collection-abstraction/pairs.svg)](https://codeclimate.com/github/collection-abstraction/pairs/trends/technical_debt)
[![Documentation](https://collection-abstraction.github.io/pairs/badge.svg)](https://collection-abstraction.github.io/pairs/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@collection-abstraction/pairs)](https://bundlephobia.com/result?p=@collection-abstraction/pairs)
