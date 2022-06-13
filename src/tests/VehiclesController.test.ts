import request from 'supertest';
import { app } from '../app';

describe('Create vehicles', () => {

    it('should create successfully an motorcycle vehicle', async () => {
        const res = await request(app)
                            .post('/api/vehicles')
                            .send({
                                model: 'GPZ900',
                                yearManufacture: '03/06/1984',
                                brand: 'Kawasaki',
                                passengers: 2
                            })
                            
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            success: true
        });
    });

    it('should returns an error when create an motorcycle vehicle', async () => {
        const res = await request(app)
                            .post('/api/vehicles')
                            .send({
                                model: 'GZP900',
                                yearManufacture: '03/06/1984',
                                brand: 'Kawasaki',
                                passengers: 4
                            })
        expect(res.statusCode).toEqual(400);
        expect(res.body).not.toEqual({
            success: true
        });
    });

    it('should create successfully an car vehicle', async () => {
        const res = await request(app)
                            .post('/api/vehicles')
                            .send({
                                model: 'HB20',
                                yearManufacture: '12/09/2012',
                                brand: 'Hyundai',
                                quantityDoors: 4
                            })

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            success: true
        });
    });

    it('should returns an error when create an car vehicle', async () => {
        const res = await request(app)
                            .post('/api/vehicles')
                            .send({
                                model: 'HB20',
                                yearManufacture: '12/09/2012',
                                brand: 'Hyundai',
                                quantityDoors: 1
                            })
        expect(res.statusCode).toEqual(400);
        expect(res.body).not.toEqual({
            success: true
        });
    });

});
