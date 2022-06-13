import { Request, Response } from 'express';

import { getPalindromesHelper, getPurchaseInfosHelper } from '../services/AppsService';

class AppsController {

    getPalindromes(req: Request, res: Response) {
        const { first, last } = req.body;

        if ((!first || !last) || last < first)
            return res.status(400)
                .json({error: 'Preencha todos os campos e informe o intervalo de maneira correta'});
        
        const palindromes = getPalindromesHelper(first, last);

        return res.json(palindromes);
    }

    getPurchaseInfos(req: Request, res: Response) {
        const { total, payment } = req.body;

        if ((!total || !payment) || payment < total) 
            return res.status(400)
                .json({error: 'Preencha todos os campos e informe um valor válido'});

        const infos = getPurchaseInfosHelper(total, payment);

        return res.json(infos);
    }

}

export default new AppsController();
