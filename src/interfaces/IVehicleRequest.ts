export interface IVehicleRequest {
    type?: 'motorcycle' | 'car';
    model: string;
    yearManufacture: string;
    quantityDoors?: string | number;
    brand: string;
    passengers?: string | number;
}
