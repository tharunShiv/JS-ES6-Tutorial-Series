// Promises

let certifyPromise = () => {
  return new Promise((resolve, reject) => {
    // some processing happens and canditate gets the certificate
    certified = true;
    if (certified) {
      //success
      resolve("certificate obtained");
    } else {
      //failure
      reject("Certificate rejected");
    }
  });
};

let jobPromise = () => {
  return new Promise((resolve, reject) => {
    // some processing happens and canditate gets the certificate
    jobObtained = false;
    if (jobObtained) {
      resolve("Job obtained");
    } else {
      //failure
      reject("Job rejected");
    }
  });
};

// certificatePromise
//   .then(successResult => {
//     console.log(successResult);
//     return jobPromise;
//   })
//   .catch(failureResult => {
//     console.log(failureResult);
//   })
//   .then(successResult => {
//     console.log(successResult);
//   })
//   .catch(failureResult => {
//     console.log(failureResult);
//   });

console.log("Rest of the code");

// thatFunction
//   .then(() => {
//     // code to be run if its successful
//   })
//   .catch(() => {
//     // code to be run if its unsuccesful
//   });

// focus on rejects
// Promise.all([certifyPromise(), jobPromise()])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(result => {
//     console.log(result);
//   });

// focus on resolves
Promise.race([certifyPromise(), jobPromise()])
  .then(result => {
    console.log(result);
  })
  .catch(result => {
    console.log(result);
  });
