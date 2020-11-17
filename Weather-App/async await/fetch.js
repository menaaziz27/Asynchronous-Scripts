class Fetch {
  async getCurrent(input) {

    const myKey = "409ffd869a214fabb28a917628eaed6e";

    //make request to url
    const response = await fetch(
      `http://api.weatherbit.io/v2.0/current?city=${input}&key=${myKey}`
    );

    const data = await response.json();

    return data;
  }
}
