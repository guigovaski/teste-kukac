import { Request, Response } from 'express';
import 'dotenv/config';
import { getCeps } from '../../api/cepsApi';

class CepsController {

    async getCeps(req: Request, res: Response) {
        const cepsArr = [];

        for (let i in req.body) {
            if (req.body && cepsArr.length < 5) {
                cepsArr.push(req.body[i])
            } else {
                return res.status(400)
                    .json({error: "Forneça no máximo 5 CEP's"});
            }
        }

        const requests = await getCeps(cepsArr);
        
        Promise.all(requests)
            .then(responses => {
                const data = responses.map(response => response.data);
                return res.json(data);
            })
            .catch(err => res.json({error: err}))
    }

}

export default new CepsController();
