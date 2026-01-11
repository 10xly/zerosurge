const { ZeroCalculationMethod, isZero, returnZero } = require("./dist/index")
const kleur = require("kleur")
const attempt = require("attempt-statement")
const assert = require("assert-fn")
const noop = require("n0p3-es2015-cjs")
const ltc = require("logtoconsole").log

const loggingEnabled = false

attempt(() => {
  assert(
    returnZero({
      method: ZeroCalculationMethod.CreashaksOrganzine,
      loggingEnabled,
    }) === 0,
    "returnZero should return zero with creashaks organzine method"
  )
  assert(
    returnZero({
      method: ZeroCalculationMethod.NumberPrototypeValue,
      loggingEnabled,
    }) === 0,
    "returnZero should return zero with number prototype value method"
  )
  assert(
    returnZero({
      method: ZeroCalculationMethod.RandomNumberSelfSubtraction,
      loggingEnabled,
    }) === 0,
    "returnZero should return zero with number prototype value method"
  )
  assert(
    isZero(0, loggingEnabled) === true,
    "isZero should return true if the input is zero"
  )
  assert(
    isZero((Math.random() + 0.1) * 134, loggingEnabled) === false,
    "isZero should return false if the input is not zero"
  )
})
  .rescue((e) => {
    ltc(kleur.red("× Tests failed!!! " + e.message))
    throw e
  })
  .else(() => {
    ltc(kleur.green("✔ TESTS PASSED!!!!"))
  })
  .ensure(noop)
  .end()
