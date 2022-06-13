import { IVehiclePattern } from '../../interfaces/IVehiclesPattern';

export class Car implements IVehiclePattern {
    model: string;
    yearManufacture: string;
    brand: string;
    quantityDoors: number;

    constructor(
        model: string, 
        yearManufacture: string,
        brand: string,
        quantityDoors: number
    ) {
        this.model = model;
        this.yearManufacture = yearManufacture;
        this.brand = brand;
        this.quantityDoors = quantityDoors;
    }

}
