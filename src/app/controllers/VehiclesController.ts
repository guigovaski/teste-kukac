import { Request, Response } from 'express';

import { createVehicle } from '../services/VehiclesService';

class VehiclesController {

    getVehiclesData(req: Request, res: Response) {
        const {
            model,
            yearManufacture,
            brand,
            quantityDoors,
            passengers
        } = req.body;

        if (!model || !yearManufacture || !brand)
            return res.json({error: 'Preencha os campos corretamente'});

        if (passengers) {
            if (+passengers < 1 || +passengers > 2)
                return res.status(400)
                    .json({error: 'Informe um número de passageiros válido'});

            const motorcycle = createVehicle({
                type: 'motorcycle',
                model,
                yearManufacture,
                brand,
                passengers
            });

            res.json(motorcycle);

        } else {

            if (+quantityDoors < 2 || +quantityDoors > 4)
                return res.status(400)
                    .json({error: 'Quantidade de portas inválida'});

            const car = createVehicle({
                type: 'car',
                model,
                yearManufacture,
                brand,
                quantityDoors
            });

            return res.json(car);
        }
    }
}

export default new VehiclesController();
