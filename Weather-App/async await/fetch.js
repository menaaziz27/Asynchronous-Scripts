class Fetch {
  async getCurrent(input) {

    const myKey = "{ Your Key }";

    //make request to url
    const response = await fetch(
      `http://api.weatherbit.io/v2.0/current?city=${input}&key=${myKey}`
    );

    const data = await response.json();

    return data;
  }
}
