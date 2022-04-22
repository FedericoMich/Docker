import { RgbToCmyk } from '../service/Service';
import { Express } from 'express';

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color = JSON.parse(req.query.color as any);
            const convertedColor = RgbToCmyk(color);

            console.log(convertedColor)
            res.send(convertedColor);
        });
    }
}

export default HttpController;
