# WeFox Challenge

## Requirements & considerations

- [] The Node.js version must be the newest release.
- [] Usage of Typescript is highly encouraged.
- [] The EcmaScript version to follow should be the newest one supported
by that Node.js version.
- [] All the endpoints URLs and HTTP methods should be as standard as
possible.
- [] Server must use Express.js.
- [] The database models required are open to your considerations.
- [] Use any package that you may consider relevant (ORMs, utilities and
so on). Take into account that we might ask about why you used them!

## Nice to have

- [] External services dockerized.
- [] External services added in docker-compose.
- [] Use of Jest for the tests.

## External services

- [] MongoDB

## External APIs

- [] Google Maps Geocoding API
- [] Open Weather API

Note: These APIs are proposed due to being very popular and easy to use, but require
registration. If you don’t want to register in these services, you can use the Nominatim API
from Openstreetmaps and 7Timer!.

## Exercise

- [] Create a REST API Node.js project that can handle validations and retrieve the data only
from the previously mentioned external APIs.

- [] Setup a Express.js server with MongoDB services to handle authentication through access
tokens (OAuth2-like). This authentication must validate the execution of any create, update
and delete endpoints. Tokens must expire after 10h.

- [] **Add an endpoint** to login following the OAuth2 standard.

- [] **Add an endpoint** that receives an address and validate if its real with Google Maps. This
address must be in an object with the properties street, streetNumber, town, postalCode and
country. This endpoint isn’t authenticated and it shouldn’t check any token.

- [] **Add an endpoint** that receives an address and check the weather with the latitude and
longitude of that address. This endpoint is authenticated and it should check the user
credentials.

- [] **Add relevant tests** (unit, integration and E2E). You do not need to cover all of the
application but we expect to have basic coverage to evaluate.


## Nice to have

- [] Cache the usages of external services for 12 hours. For example: If an address has
been checked in that timeframe, shouldn’t be requested against the external API again.

- [] Add the OpenAPI (Swagger) endpoint definition for your amazing API.

## Setup

