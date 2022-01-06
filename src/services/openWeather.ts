import OpenWeatherMap from "openweathermap-ts";

class OpenWeather {
  getWeatherByCoordinates(lat: number, lng: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const openWeather = new OpenWeatherMap({
        apiKey:
          process.env["APIKEY_OPENW"] || "16311551410b12e29a444fb2306239db",
        language: "es",
        units: "metric",
      });
      openWeather
        .getCurrentWeatherByGeoCoordinates(lat, lng)
        .then((weather) => {
          resolve(weather);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }
}

export default OpenWeather;
