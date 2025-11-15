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
var ZeroCalculationMethod;
(function (ZeroCalculationMethod) {
    ZeroCalculationMethod[ZeroCalculationMethod["CreashaksOrganzine"] = 0] = "CreashaksOrganzine";
    ZeroCalculationMethod[ZeroCalculationMethod["NumberPrototypeValue"] = 1] = "NumberPrototypeValue";
    ZeroCalculationMethod[ZeroCalculationMethod["RandomNumberSelfSubtraction"] = 2] = "RandomNumberSelfSubtraction";
})(ZeroCalculationMethod || (exports.ZeroCalculationMethod = ZeroCalculationMethod = {}));
class Logger {
    constructor(loggingEnabled) {
        this.loggingEnabled = loggingEnabled;
    }
    log(message) {
        if (this.loggingEnabled) {
            (0, betterloggingwithecho_1.default)(message);
        }
    }
}
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
            logger.log(chalk_1.default.cyan("[zerosurge] Generated random number " + random));
            const result = random - random;
            logger.log(chalk_1.default.green("[zerosurge] Zero calculated succesfully"));
            return result;
        }
        default: {
            (0, immediate_error_1.immediateError)(chalk_1.default.red("[zerosurge] Unknown or undefined method for calculating zero, exiting"), immediate_error_1.ErrorType.TypeError);
        }
    }
}
function isZero(value) {
    // @ts-expect-error: It's falsy because we don't want to use false keyword in case it changes.
    return value === returnZero({ method: ZeroCalculationMethod.CreashaksOrganzine, loggingEnabled: !!(void (/false/)) });
}
//# sourceMappingURL=index.js.map