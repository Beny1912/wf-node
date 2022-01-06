import { Client } from "@googlemaps/google-maps-services-js";

class GoogleService {
  checkAddress(fullAddress: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const client = new Client({});
      client
        .geocode({
          params: {
            key:
              process.env["APIKEY_GOOGLE"] ||
              "AIzaSyBSRJmSMa2v1ImlWfagxXD_Jw9e3Z79TYk",
            address: fullAddress,
          },
          timeout: 10000, // milliseconds
        })
        .then((r) => {
          if (r.data.status === "ZERO_RESULTS" || r.data.results.length === 0) {
            resolve({
              find: "NO",
              results: [],
            });
          } else if (r.data.status === "OK") {
            //Address valid
            resolve({
              find: "YES",
              results: [
                {
                  formatted_address: r.data.results[0].formatted_address,
                  lat: r.data.results[0].geometry.location.lat,
                  lng: r.data.results[0].geometry.location.lng,
                },
              ],
            });
          }
        })
        .catch((e) => {
          reject(e.response.data.error_message);
        });
    });
  }
  getCoordinatesFromAddress(fullAddress: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const client = new Client({});
      client
        .geocode({
          params: {
            key:
              process.env["APIKEY_GOOGLE"] ||
              "AIzaSyBSRJmSMa2v1ImlWfagxXD_Jw9e3Z79TYk",
            address: fullAddress,
          },
          timeout: 10000, // milliseconds
        })
        .then((r) => {
          if (r.data.status === "ZERO_RESULTS" || r.data.results.length === 0) {
            resolve({
              find: "NO",
              coordinates: [],
            });
          } else if (r.data.status === "OK") {
            //Address valid
            resolve({
              find: "YES",
              coordinates: [
                {
                  lat: r.data.results[0].geometry.location.lat,
                  lng: r.data.results[0].geometry.location.lng,
                },
              ],
            });
          }
        })
        .catch((e) => {
          reject(e.response.data.error_message);
        });
    });
  }
}
export default GoogleService;
