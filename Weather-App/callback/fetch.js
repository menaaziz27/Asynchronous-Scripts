class Fetch {
  getCurrent(input, cb) {
    const myKey = "409ffd869a214fabb28a917628eaed6e";

    //make request to url

    fetch(
      `http://api.weatherbit.io/v2.0/current?city=${input}&key=${myKey}`
    )
      .then((res) => res.json())

      .then(data => {
        cb(data)
      });
  }
}