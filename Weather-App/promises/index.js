const promise = new Promise((resolve, reject) => {
  setTimeout(() =>
    reject()
    , 2000)
});

function onSuccess() {
  console.log("Fulfilled!!");
}

function onReject() {
  console.log("Rejected!!");
}

promise.then(onSuccess);
promise.catch(onReject);