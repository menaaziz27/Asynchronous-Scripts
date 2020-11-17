class Fetch {
  getCurrent(input, cb) {
    const myKey = "{ Your Key }";

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