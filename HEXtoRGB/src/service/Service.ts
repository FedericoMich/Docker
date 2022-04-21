import colorConverter from 'color-convert'


export const CmykToHsl = (color: any) => {

    return colorConverter.cmyk.hsl(color)

}