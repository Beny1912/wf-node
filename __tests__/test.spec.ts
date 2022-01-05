import app from './../src/app';
import request from 'supertest';


describe('CREATE SERVER', () => {
    test('CHECK IF JEST WORK OK', async () =>{
        expect(1).toBe(1)
    });
    test('CHECK IF JEST WORK KO', async () =>{
        expect(2).toBe(1)
    });
    test('CHECK HEALTH ENDPOINT STATUS',async () => {
        const res = await request(app).get("/health").send();

        expect(res.statusCode).toEqual(200);
    })
    test('CHECK HEALTH ENDPOINT RETURN',async () => {
        const res = await request(app).get("/health").send();
        console.log(res);
        expect(res.text).toEqual('Server OK');
    })
});