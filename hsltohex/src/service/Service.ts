import colorConverter from 'color-convert'


export const HsltoHex = (color: any) => {

    return colorConverter.hsl.hex(color)

}