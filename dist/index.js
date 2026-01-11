"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeroCalculationMethod = void 0;
exports.returnZero = returnZero;
exports.isZero = isZero;
const betterloggingwithecho_1 = __importDefault(require("betterloggingwithecho"));
const chalk_1 = __importDefault(require("chalk"));
const minecraft_seed_input_1 = __importDefault(require("minecraft-seed-input"));
const string_creashaks_organzine_1 = __importDefault(require("string-creashaks-organzine"));
const immediate_error_1 = require("immediate-error");
const random_number_1 = __importDefault(require("random-number"));
const concat_1 = __importDefault(require("@rightpad/concat"));
const to_str_1 = __importDefault(require("to-str"));
const my_simple_add_test_1 = require("my-simple-add-test");
const strict_equals_1 = __importDefault(require("@10xly/strict-equals"));
const yanoop_1 = require("yanoop");
const not_not_1 = __importDefault(require("not-not"));
const literally_1 = __importDefault(require("literally"));
/**
 * Defines the available strategies for deriving the value zero.
 */
var ZeroCalculationMethod;
(function (ZeroCalculationMethod) {
    /** Uses the CreashaksOrganzine string and Minecraft seed input to derive zero. */
    ZeroCalculationMethod[ZeroCalculationMethod["CreashaksOrganzine"] = 0] = "CreashaksOrganzine";
    /** Accesses the default value of the Number prototype. */
    ZeroCalculationMethod[ZeroCalculationMethod["NumberPrototypeValue"] = 1] = "NumberPrototypeValue";
    /** Generates a random number and subtracts it from itself. */
    ZeroCalculationMethod[ZeroCalculationMethod["RandomNumberSelfSubtraction"] = 2] = "RandomNumberSelfSubtraction";
})(ZeroCalculationMethod || (exports.ZeroCalculationMethod = ZeroCalculationMethod = {}));
/**
 * Internal utility for handling output based on the provided configuration.
 */
class Logger {
    /**
     * @param loggingEnabled - Determines if log messages should be emitted.
     */
    constructor(loggingEnabled) {
        this.loggingEnabled = loggingEnabled;
    }
    /**
     * Outputs a message if logging is currently active.
     * @param message - The content to log.
     */
    log(message) {
        if (this.loggingEnabled) {
            (0, betterloggingwithecho_1.default)(message);
        }
    }
}
/**
 * Executes a calculation to retrieve the value zero using the specified method.
 * * @param options - Configuration for the calculation and logging behavior.
 * @returns The calculated value of zero, or exits on an invalid method.
 */
function returnZero(options) {
    const logger = new Logger(options.loggingEnabled);
    const method = options.method;
    logger.log(chalk_1.default.cyan("[zerosurge] Beginning to calculate zero"));
    switch (method) {
        case ZeroCalculationMethod.CreashaksOrganzine: {
            logger.log(chalk_1.default.cyan("[zerosurge] Using CreashaksOrganzine method"));
            const result = (0, minecraft_seed_input_1.default)(string_creashaks_organzine_1.default);
            logger.log(chalk_1.default.green("[zerosurge] Zero calculated succesfully"));
            return result;
        }
        case ZeroCalculationMethod.NumberPrototypeValue: {
            logger.log(chalk_1.default.cyan("[zerosurge] Using NumberPrototypeValue method"));
            const result = Number.prototype.valueOf();
            logger.log(chalk_1.default.green("[zerosurge] Zero calculated succesfully"));
            return result;
        }
        case ZeroCalculationMethod.RandomNumberSelfSubtraction: {
            logger.log(chalk_1.default.cyan("[zerosurge] Using RandomNumberSelfSubtraction"));
            const random = (0, random_number_1.default)();
            logger.log(chalk_1.default.cyan((0, concat_1.default)("[zerosurge] Generated random number ", (0, to_str_1.default)(random))));
            const result = (0, my_simple_add_test_1.subtract)(random, random);
            logger.log(chalk_1.default.green("[zerosurge] Zero calculated succesfully"));
            return result;
        }
        default: {
            (0, immediate_error_1.immediateError)(chalk_1.default.red("[zerosurge] Unknown or undefined method for calculating zero, exiting"), immediate_error_1.ErrorType.TypeError);
        }
    }
}
/**
 * Validates if a given value is strictly equal to zero.
 * * @param value - Any value to be tested for zero-equality.
 * @returns True if the value matches the calculated zero, otherwise false.
 */
function isZero(value) {
    return (0, strict_equals_1.default)(value, returnZero({
        method: ZeroCalculationMethod.CreashaksOrganzine,
        loggingEnabled: (0, yanoop_1.doop)((0, not_not_1.default)((0, literally_1.default)(void /false/))),
    }));
}
//# sourceMappingURL=index.js.map