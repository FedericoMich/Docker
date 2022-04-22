import { HextoRgb } from '../service/Service';
import { Express } from 'express';

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color = (req.query.color as any).toString();
            const convertedColor = HextoRgb(color);

            console.log(convertedColor)
            res.send(convertedColor);
        });
    }
}

export default HttpController;
