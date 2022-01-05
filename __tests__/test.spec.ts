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
        expect(res.text).toEqual('Server OK');
    })

    test('CHECK ADRESS ENDPOINT STATUS',async () => {
        const res = await request(app).post("/checkAddress").send({
            "street":"gran capitan",
            "streetNumber":"2",
            "town":"Utrera",
            "postalCode":"41710",
            "country":"España"
        });
        expect(res.statusCode).toEqual(200);
        //expect(res.text).toEqual('Server OK');
    });
    test('CHECK ADRESS ENDPOINT RESPONSE',async () => {
        const res = await request(app).post("/checkAddress").send({
            "street":"gran capitan",
            "streetNumber":"2",
            "town":"Utrera",
            "postalCode":"41710",
            "country":"España"
        });
        expect(res.body.formatted_address).toBeDefined();
    });
    test('CHECK ERROR ADRESS ENDPOINT STATUS',async () => {
        const res = await request(app).post("/checkAddress").send({
            "street":"nila",
            "streetNumber":"2",
            "town":"Utrera",
            "postalCode":"41710",
            "country":"España"
        });
        expect(res.statusCode).toEqual(400);
    });
    test('CHECK ERROR ADRESS ENDPOINT RESPONSE',async () => {
        const res = await request(app).post("/checkAddress").send({
            "street":"nila",
            "streetNumber":"2",
            "town":"Utrera",
            "postalCode":"41710",
            "country":"España"
        });
        expect(res.body.message).toBeDefined();
    });
});
describe('ENDPOINT CHECK ADDRESS', () => {

    test('CHECK ADRESS ENDPOINT STATUS',async () => {
        const res = await request(app).post("/checkAddress").send({
            "street":"gran capitan",
            "streetNumber":"2",
            "town":"Utrera",
            "postalCode":"41710",
            "country":"España"
        });
        expect(res.statusCode).toEqual(200);
        //expect(res.text).toEqual('Server OK');
    });
    test('CHECK ADRESS ENDPOINT RESPONSE',async () => {
        const res = await request(app).post("/checkAddress").send({
            "street":"gran capitan",
            "streetNumber":"2",
            "town":"Utrera",
            "postalCode":"41710",
            "country":"España"
        });
        expect(res.body.formatted_address).toBeDefined();
    });
    test('CHECK ERROR ADRESS ENDPOINT STATUS',async () => {
        const res = await request(app).post("/checkAddress").send({
            "street":"nila",
            "streetNumber":"2",
            "town":"Utrera",
            "postalCode":"41710",
            "country":"España"
        });
        expect(res.statusCode).toEqual(400);
    });
    test('CHECK ERROR ADRESS ENDPOINT RESPONSE',async () => {
        const res = await request(app).post("/checkAddress").send({
            "street":"nila",
            "streetNumber":"2",
            "town":"Utrera",
            "postalCode":"41710",
            "country":"España"
        });
        expect(res.body.message).toBeDefined();
    });


});

describe('ENDPOINT GET WEATHER', () => {

    test('CHECK ADRESS ENDPOINT STATUS',async () => {
        const res = await request(app).post("/getWeather").send({
            "street":"gran capitan",
            "streetNumber":"2",
            "town":"Utrera",
            "postalCode":"41710",
            "country":"España"
        });
        expect(res.statusCode).toEqual(200);
    });
    test('CHECK ADRESS ENDPOINT RESPONSE',async () => {
        const res = await request(app).post("/getWeather").send({
            "street":"gran capitan",
            "streetNumber":"2",
            "town":"Utrera",
            "postalCode":"41710",
            "country":"España"
        });
        expect(res.body.weather).toBeDefined();
    });
    test('CHECK ERROR ADRESS ENDPOINT STATUS',async () => {
        const res = await request(app).post("/getWeather").send({
            "street":"nila",
            "streetNumber":"2",
            "town":"Utrera",
            "postalCode":"41710",
            "country":"España"
        });
        expect(res.statusCode).toEqual(400);
    });
    test('CHECK ERROR ADRESS ENDPOINT RESPONSE',async () => {
        const res = await request(app).post("/getWeather").send({
            "street":"nila",
            "streetNumber":"2",
            "town":"Utrera",
            "postalCode":"41710",
            "country":"España"
        });
        expect(res.body.message).toBeDefined();
    });

})