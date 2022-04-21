import colorConverter from 'color-convert'


export const CmykToHsl=(color:any)=> {

    colorConverter.cmyk.hsl(color)

}