import fs from 'fs';
import { IVehicleRequest } from '../../interfaces/IVehicleRequest';

export function writeJsonData(data: IVehicleRequest) {
    fs.appendFile('src/database/data.json', JSON.stringify(data) + ',\n', err => {
        if (err) throw new Error('Erro ao criar arquivo');
    });
}
