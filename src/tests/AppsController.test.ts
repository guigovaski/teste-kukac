import request from 'supertest';
import { app } from '../app';

describe('Palindromes of interval', () => {
    it('should returns palinromes of the range', async () => {
        const res = await request(app)
                            .post('/api/palindromes')
                            .send({
                                first: 1,
                                last: 102
                            })

        const palindromesArr = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101];

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(palindromesArr);                
    });

    it('should returns an error from a range of numbers', async () => {
        const res = await request(app)
                            .post('/api/palindromes')
                            .send({
                                first: 2,
                                last: -102
                            })
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
    });
});

describe('Money change', () => {
    it('should returns exactly change', async () => {
        const res = await request(app)
                            .post('/api/purchase')
                            .send({
                                total: 176,
                                payment: 500,
                            })
        
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            total: 176,
            payment: 500,
            change: 324,
            hundredChange: 3,
            tenChange: 2,
            unitChange: 4
        });
    });

    it('should returns an error from os krl', async () => {
        const res = await request(app)
                            .post('/api/purchase')
                            .send({
                                total: 212,
                                payment: 95
                            })

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
    });
});
