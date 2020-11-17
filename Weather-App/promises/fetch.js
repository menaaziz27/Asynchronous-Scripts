class Fetch {
  getCurrent(input) {
    const myKey = "409ffd869a214fabb28a917628eaed6e";

    //make request to url

    return fetch(
      `http://api.weatherbit.io/v2.0/current?city=${input}&key=${myKey}`
    )
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.log(err))
  }
}
