"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbToHsl = exports.CMYKtoCMY = void 0;
const color_convert_1 = __importDefault(require("color-convert"));
const urlParams = new URLSearchParams(window.location.search);
const Value1 = urlParams.get('value1');
const Value2 = urlParams.get('value2');
const Value3 = urlParams.get('value3');
const Value4 = urlParams.get('value4');
const CMYKtoCMY = (color) => {
    const colorToConvert = { cyan: v1, magenta: 0, yellow: 100, black: 0 };
    const convertedColor = color_convert_1.default;
    C = (C * (1 - K) + K);
    M = (M * (1 - K) + K);
    Y = (Y * (1 - K) + K);
    return {
        hexValue: { hex: '00FF40' }
    };
};
exports.CMYKtoCMY = CMYKtoCMY;
/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSL representation
 */
const rgbToHsl = (r, g, b) => {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return [h, s, l];
};
exports.rgbToHsl = rgbToHsl;
//# sourceMappingURL=Service.js.map