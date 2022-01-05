//import * as faker from 'faker';
import ExampleController from '../src/controllers/example.controller';
import User, { IUser } from '../src/models/example.model';
import * as dbHandler from './db';


beforeAll(async () => {
    await dbHandler.connect();
});

afterEach(async () => {
    await dbHandler.clearDatabase();
});

afterAll(async () => {
    await dbHandler.closeDatabase();
});

describe('USER POST TEST', () => {
    it('can be created correctly', async () => {
        // expect that two assertios will be made
        expect.assertions(2);
        // create new post model instance
        const user: IUser = await ExampleController.CreateUser({
           // email:faker.internet.email(),
           // firstName: faker.name.findName(),
           // lastName: 'Sanchez'
           email:'b@b.com',
           firstName: 'Beny',
           lastName: 'Sanchez'
        });
        // save test user to in-memory db
        await user.save();
        // find inserted user by lastName
        const userInDb = await User.findOne({lastName: 'Sanchez'}).exec();
       
        // check that title is expected
        expect(userInDb.lastName).toEqual('Sanchez');
    });
});