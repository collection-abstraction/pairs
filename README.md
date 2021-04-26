:cherries: [@aureooms/js-pairs](https://make-github-pseudonymous-again.github.io/js-pairs)
==

Pairs set for JavaScript.
See [docs](https://make-github-pseudonymous-again.github.io/js-pairs/index.html).

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

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-pairs.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-pairs/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-pairs.svg)](https://www.npmjs.org/package/@aureooms/js-pairs)
[![Tests](https://img.shields.io/github/workflow/status/make-github-pseudonymous-again/js-pairs/ci:test?event=push&label=tests)](https://github.com/make-github-pseudonymous-again/js-pairs/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/make-github-pseudonymous-again/js-pairs.svg)](https://david-dm.org/make-github-pseudonymous-again/js-pairs)
[![Dev dependencies](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-pairs.svg)](https://david-dm.org/make-github-pseudonymous-again/js-pairs?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-pairs.svg)](https://github.com/make-github-pseudonymous-again/js-pairs/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-pairs.svg)](https://www.npmjs.org/package/@aureooms/js-pairs)

[![Code issues](https://img.shields.io/codeclimate/issues/make-github-pseudonymous-again/js-pairs.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-pairs/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/make-github-pseudonymous-again/js-pairs.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-pairs/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/make-github-pseudonymous-again/js-pairs/main.svg)](https://codecov.io/gh/make-github-pseudonymous-again/js-pairs)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/make-github-pseudonymous-again/js-pairs.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-pairs/trends/technical_debt)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-pairs/badge.svg)](https://make-github-pseudonymous-again.github.io/js-pairs/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-pairs)](https://bundlephobia.com/result?p=@aureooms/js-pairs)
