import colorConverter from 'color-convert'


export const RgbToCmyk = (color: any) => {

    return colorConverter.rgb.cmyk(color)

}