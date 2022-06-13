import { Motorcycle } from '../models/Motorcycle';
import { Car } from '../models/Car';
import { writeJsonData } from '../helpers/VehiclesHelper';
import { IVehicleRequest } from '../../interfaces/IVehicleRequest';

export function createVehicle(data: IVehicleRequest) {

    if (data.type === 'motorcycle') {
        const motorcycle = new Motorcycle(
            data.model,
            data.yearManufacture,
            data.brand,
            +data.passengers!
        )

        writeJsonData(motorcycle);
        
        return { success: true };
    }

    if (data.type === 'car') {
        const car = new Car(
            data.model,
            data.yearManufacture,
            data.brand,
            +data.quantityDoors!
        )
        
        writeJsonData(car)

        return { success: true };
    }
}
