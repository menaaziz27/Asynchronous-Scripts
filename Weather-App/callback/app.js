//inst classes//

const ft = new Fetch();
var ui = new UI();

//add event listeners//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal, (data) => {
    ui.populateUI(data);
  })

});