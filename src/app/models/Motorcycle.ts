import { IVehiclePattern } from '../../interfaces/IVehiclesPattern';

export class Motorcycle implements IVehiclePattern {
    model: string;
    yearManufacture: string;
    brand: string;
    passengers: number;
    private wheels = 2;

    constructor(
        model: string,
        yearManufacture: string,
        brand: string,
        passengers: number,
    ) {
        this.model = model;
        this.yearManufacture = yearManufacture;
        this.brand = brand;
        this.passengers = passengers;
    }

}
