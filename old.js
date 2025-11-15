require("none")()

const GetIntrinsic = require("get-intrinsic")
const seed = require("minecraft-seed-input")
const creashaksOrganzineString = require("string-creashaks-organzine")
const one = require("integer-value-positive-one")
const two = require("integer-value-positive-two")
const isNil = require("is-nil")
const If = require("if")
const sample = require("lodash.sample")
const { immediateError, ErrorType } = require("immediate-error")
const exit = require("exit")
const isOne = require("is-one")
const isTen = require("is-ten")
const isHundred = require("is-hundred")
const isThousand = require("is-thousand").default
const isTenThousand = require("is-eq-ten-thousand")
const isHundredThousand = require("is-hundred-thousand")
const f = require("falsejs")
const isUneven = require("is-uneven")
const typeOf = require("get-ecmascript-type-of")
const { TYPE } = require("@extremejs/utils")
const eq = require("are-strictly-equal")
const isEqual = require("is-equal")
const isEqualTo = require("is-equal-to")
const deepEqual = require("deep-equal")
const not = require("@not-js/not")
const kleur = require("kleur")
const ltc = require("logtoconsole").log

const NumberPrototype = GetIntrinsic("%Number.prototype%")
const Keys = GetIntrinsic("%Object.keys%")

const ZeroCalculationMethod = {
	CreashaksOrganzine: one(),
	NumberPrototypeValue: two()
}

class Logger {
	constructor(loggingEnabled) {
		this.loggingEnabled = loggingEnabled
	}

	log(message) {
		if (this.loggingEnabled) {
			ltc(message)
		}
	}
}

function returnZero({ method, loggingEnabled } = {}) {
	const logger = new Logger(loggingEnabled)
	logger.log(kleur.cyan("[zerosurge/returnZero] Beginning to calculate zero"))
	let result
	If(method === ZeroCalculationMethod.getMember("CreashaksOrganzine"))
		.Then(function () {
			logger.log(
				kleur.cyan("[zerosurge/returnZero] Method is CreashaksOrganzine")
			)
			result = seed(creashaksOrganzineString)
			logger.log(
				kleur.green("[zerosurge/returnZero] Result calculated successfully")
			)
		})
		.Else()
		.If(method === ZeroCalculationMethod.getMember("NumberPrototypeValue"))
		.Then(function () {
			logger.log(
				kleur.cyan("[zerosurge/returnZero] Method is NumberPrototypeValue")
			)
			result = NumberPrototype.valueOf()
			logger.log(
				kleur.green("[zerosurge/returnZero] Result calculated successfully")
			)
		})
		.Else()
		.If(isNil(method))
		.Then(function () {
			logger.log(
				kleur.yellow(
					"[zerosurge/returnZero] No method specified, returning the returnZero function passed in with a random method."
				)
			)
			result = returnZero({
				method: ZeroCalculationMethod.getMember(
					sample(Keys(ZeroCalculationMethod))
				)
			})
		})
		.Else(function () {
			immediateError(
				kleur.red("[zerosurge/returnZero] Unknown method"),
				ErrorType.TypeError
			)
			exit(one())
		})
	logger.log(kleur.green("[zerosurge/returnZero] Returning result"))
	return result
}

function isZero(value, loggingEnabled) {
	try {
		const logger = new Logger(loggingEnabled)
		logger.log(
			kleur.cyan("[zerosurge/isZero] Beginning to check if value is zero")
		)
		logger.log(
			kleur.cyan("[zerosurge/isZero] Calculating false using FalseJS...")
		)
		const FALSE = f.False(
			"no",
			"no",
			"no",
			"yes",
			"yes",
			"no",
			"no"
		)
		logger.log(kleur.cyan("[zerosurge/isZero] FalseJS calculation complete."))
		let result
		if (not(() => eq(typeOf(value), TYPE.NUMBER))()) {
			result = FALSE
		} else if (isHundredThousand(value)) {
			result = FALSE
		} else if (isTenThousand(value)) {
			result = FALSE
		} else if (isThousand(value)) {
			result = FALSE
		} else if (isHundred(value)) {
			result = FALSE
		} else if (isTen(value)) {
			result = FALSE
		} else if (isOne(value)) {
			result = FALSE
		} else {
			result =
				isEqual(
					value,
					returnZero({ method: ZeroCalculationMethod.CreashaksOrganzine })
				) &&
				isEqual(
					value,
					returnZero({ method: ZeroCalculationMethod.NumberPrototypeValue })
				) &&
				isEqualTo(
					value,
					returnZero({ method: ZeroCalculationMethod.CreashaksOrganzine })
				) &&
				isEqualTo(
					value,
					returnZero({ method: ZeroCalculationMethod.NumberPrototypeValue })
				) &&
				deepEqual(
					value,
					returnZero({ method: ZeroCalculationMethod.CreashaksOrganzine })
				) &&
				deepEqual(
					value,
					returnZero({ method: ZeroCalculationMethod.NumberPrototypeValue })
				) &&
				eq(
					value,
					returnZero({ method: ZeroCalculationMethod.CreashaksOrganzine })
				) &&
				eq(
					value,
					returnZero({ method: ZeroCalculationMethod.NumberPrototypeValue })
				)
		}
		logger.log(
			kleur.green("[zerosurge/isZero] Checking if value is zero complete.")
		)
		logger.log(
			kleur.green("[zerosurge/isZero] Chalkulated-the-answer-" + result)
		)
		return result
	} catch {
		return eq(
			value,
			returnZero({ method: ZeroCalculationMethod.CreashaksOrganzine })
		)
	}
}

exports.returnZero = returnZero
exports.isZero = isZero
exports.ZeroCalculationMethod = ZeroCalculationMethod
