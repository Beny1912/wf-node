# WeFox Challenge

## Requirements & considerations

- [x] The Node.js version must be the newest release.
- [x] Usage of Typescript is highly encouraged.
- [x] The EcmaScript version to follow should be the newest one supported
      by that Node.js version.
- [x] All the endpoints URLs and HTTP methods should be as standard as
      possible.
- [x] Server must use Express.js.
- [x] The database models required are open to your considerations.
- [x] Use any package that you may consider relevant (ORMs, utilities and
      so on). Take into account that we might ask about why you used them!

## Nice to have

- [x] External services dockerized.
- [x] External services added in docker-compose.
- [x] Use of Jest for the tests.

## External services

- [x] MongoDB

## External APIs

- [x] Google Maps Geocoding API
- [x] Open Weather API

Note: These APIs are proposed due to being very popular and easy to use, but require
registration. If you don’t want to register in these services, you can use the Nominatim API
from Openstreetmaps and 7Timer!.

## Exercise

- [x] Create a REST API Node.js project that can handle validations and retrieve the data only
      from the previously mentioned external APIs.

- [x] Setup a Express.js server with MongoDB services to handle authentication through access
      tokens (OAuth2-like). This authentication must validate the execution of any create, update
      and delete endpoints. Tokens must expire after 10h.

- [x] **Add an endpoint** to login following the OAuth2 standard.

- [x] **Add an endpoint** that receives an address and validate if its real with Google Maps. This
      address must be in an object with the properties street, streetNumber, town, postalCode and
      country. This endpoint isn’t authenticated and it shouldn’t check any token.

- [x] **Add an endpoint** that receives an address and check the weather with the latitude and
      longitude of that address. This endpoint is authenticated and it should check the user
      credentials.

- [x] **Add relevant tests** (unit, integration and E2E). You do not need to cover all of the
      application but we expect to have basic coverage to evaluate.

## Nice to have

- [ ] Cache the usages of external services for 12 hours. For example: If an address has
      been checked in that timeframe, shouldn’t be requested against the external API again.

- [x] Add the OpenAPI (Swagger) endpoint definition for your amazing API.

## Setup

### Postman link

[Postman link](https://www.getpostman.com/collections/c11f98853e55adbcaf18)

You need to configure the next Environment Vars: HOST, PORT, TOKEN (should be obtained with signin endpoint)

### Postman file

[Postman file](Wefox.postman_collection.json)

You need to configure the next Environment Vars: HOST, PORT, TOKEN (should be obtained with signin endpoint)

### Run project

```bash

git clone https://github.com/Beny1912/wf-node.git

cd wf-node

docker-compose up

```

### Run test

```bash

git clone https://github.com/Beny1912/wf-node.git

cd wf-node

npm i

npm run test

```

### Run project dev

Global requirements:

[Node 17.3.0](https://nodejs.org/en/)

[Docker Desktop](https://www.docker.com/products/docker-desktop)

[MongoDB](https://www.mongodb.com/es)

Global npm packages

[Eslint](https://www.npmjs.com/package/eslint)

[Typescript](https://www.npmjs.com/package/typescript)

[Jest](https://www.npmjs.com/package/jest)

[Prettier](https://www.npmjs.com/package/prettier)

[Nodemon](https://www.npmjs.com/package/nodemon)

[Husky](https://www.npmjs.com/package/husky)


```bash

git clone https://github.com/Beny1912/wf-node.git

cd wf-node

npm i

npm run start-dev

```
