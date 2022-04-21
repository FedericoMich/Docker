import colorConverter from 'color-convert'
import { Cmyk, Hex } from '../model/color'


const urlParams = new URLSearchParams(window.location.search);
const Value1 = urlParams.get('value1');
const v1: number = +Value1;
const Value2 = urlParams.get('value2');
const Value3 = urlParams.get('value3');
const Value4 = urlParams.get('value4');

const convert = (color: Cmyk) => {
    const colorToConvert: Cmyk = {cyan: v1, magenta: 0, yellow: 100, black: 0};
    const convertedColor = colorConverter;
    return {
        hexValue: {hex: '00FF40'}
    } 

}