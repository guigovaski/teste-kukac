import request from 'supertest';
import { app } from '../app';

describe("Get CEP's", () => {
    it("should returns 5 CEP's from API", async () => {
        const res = await request(app)
                            .post('/api/ceps')
                            .send({
                                cep1: '82410-220',
                                cep2: '82410-220',
                                cep3: '82410-220',
                                cep4: '82410220',
                                cep5: '82410220'
                            })

        expect(res.statusCode).toEqual(200);
        expect(res.body).not.toHaveProperty('error');
    });

    it("should return an error of exceeded the limit of the CEP's", async () => {
        const res = await request(app)
                            .post('/api/ceps')
                            .send({
                                cep1: '82410220-3',
                                cep2: '82410220-3',
                                cep3: '82410220-3',
                                cep4: '82410220-3',
                                cep5: '82410220-3',
                                cep6: '82410220-3'
                            })

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
    });

    it("should return an error from invalid CEP's", async () => {
        const res = await request(app)
                            .post('/api/ceps')
                            .send({
                                cep1: '824102209-3',
                                cep2: '824102209-3',
                                cep3: '824102209-3'
                            })

        expect(res.body).toContain(null);
    });
});
