import colorConverter from 'color-convert'


export const HextoRgb = (color: any) => {

    return colorConverter.hex.rgb(color)

}