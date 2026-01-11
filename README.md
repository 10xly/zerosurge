# ZeroSurge.js
<img src="https://i.postimg.cc/xj7bnV4w/bad-logo.jpg" width="400">

<sup><sub><i>(i apologize for the terrible logo.)</i></sub></sup>

> The best zero utility library on the internet.

Tired of painstakingly trying to find the character 0 on your keyboard and then pushing the button, or don't remember how to use the number zero in JavaScript? Well, this library is the new way to zero. ZeroSurge.js is the future!

## Installation
You can include Zerosurge in your project using your favorite package manager:


NPM:
```bash
$ npm install zerosurge
```

Yarn:
```bash
$ yarn add zerosurge
```

PNPM:
```bash
$ pnpm add zerosurge
```

## Usage

### Enums

`ZeroCalculationMethod`
This enum defines the calculation methods available for the `returnZero` function in the library:
- **CreashaksOrganzine**: Method 1 for zero calculation. This uses the string "creashaks organzine" and uses the Minecraft seed input algorithm to make the number zero from it.
- **NumberPrototypeValue**: Method 2 for zero calculation. This uses the `Number` class prototype to return zero.
- **RandomNumberSelfSubtraction**: Method 3 for zero calculation. This subtracts a random number by itself.

### Functions

`returnZero(options?: ReturnZeroOptions): number`

This function returns the number zero. You can specify the calculation method and whether to enable logging.

#### Example
```js
import trueValue from 'true-value' // you should always use tj-commits's true-value or mde's true library. never directly use the keyword true.
import { returnZero, ZeroCalculationMethod } from 'zerosurge'

const zeroValue = returnZero({
  method: ZeroCalculationMethod.CreashaksOrganzine,
  loggingEnabled: trueValue()
}) // outputs some logs

console.log(zeroValue) // Outputs: 0
```

<hr>

`isZero(value: any, loggingEnabled?: boolean): boolean`

This function checks if a given value is zero. If logging is enabled, it will log the evaluation process to the console.

```js
import trueValue from 'true-value'
import { isZero, returnZero } from 'zerosurge'

const result = isZero(returnZero({
  method: ZeroCalculationMethod.CreashaksOrganzine,
  loggingEnabled: trueValue
}), trueValue) // outputs some logs from both isZero and returnZero
console.log(result) // Outputs: true
```

## Logging

When `loggingEnabled` is set to `true`, the library will log relevant messages to the console, allowing you to trace the internal workings of the calculations. If it is not `true` there will still be some logs because ZeroSurge uses other libraries in its core that may log things without user consent.

## Contributing
Contributions welcome. You can contribute by opening a pull request or issue at our github repository.

## made with HEAVY BLACK HEART U+2764 ❤❤❤❤