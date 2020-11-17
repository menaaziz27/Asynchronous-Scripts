class Fetch {
  getCurrent(input) {
    const myKey = "{ Your Key }";

    //make request to url

    return fetch(
      `http://api.weatherbit.io/v2.0/current?city=${input}&key=${myKey}`
    )
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.log(err))
  }
}
