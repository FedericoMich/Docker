import { HsltoHex } from '../service/Service';
import { Express } from 'express';

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color = JSON.parse(req.query.color as any);
            const convertedColor = HsltoHex(color);
            res.send(convertedColor);
        });
    }
}

export default HttpController;
