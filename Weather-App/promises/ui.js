class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
  }

  populateUI(data) {

    this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.data[0].city_name}, ${data.data[0].country_code}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Temp now is ${data.data[0].app_temp}</h6>
                <p class="card-text ">Weather conditions are described as: ${data.data[0].weather.description}</p>
                
            </div>
        </div>
        
        
        `;
  }
}
