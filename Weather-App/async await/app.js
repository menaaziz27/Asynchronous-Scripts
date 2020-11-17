//inst classes//

const ft = new Fetch();
const ui = new UI();

//add event listeners//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");

button.addEventListener("click", async () => {
  // get user input
  const currentVal = search.value;
  // wait for the resonse
  const data = await ft.getCurrent(currentVal)
  //call a UI method//
  ui.populateUI(data);
});
