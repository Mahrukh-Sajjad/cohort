// our callstack has high preference anything that is in call stack will run on main thread. if our call stack
// is empty then things from  call back queue are shifted to call stack.
// synchronous code goes to call stack first and then main thread.
// javascript is a single threaded language which performs 1 operation at a time.
// sync -> callstack -> main thread
// async -> webapis -> callback queue -> call stack empty -> callstack -> main thread.

function getDetails(username, cb) {
  setTimeout(function () {
    console.log("sending request to instagram...");
  }, 1000);
  setTimeout(function () {
    console.log("fetching data...");
  }, 3000);
  setTimeout(function () {
    cb();
  }, 6000); // in this code you have to manually write time.
}
getDetails("Harshvandanasharma", function () {
  console.log("Data saved in gallery");
});

//callback -> koi function ko chalate waqt yeh bata daina k kam kerny k bad konsa function chalana hai.

function stepOne(cb) {
  console.log("step 1");
  cb();
}

function stepTwo(cb) {
  console.log("step 2");
  cb();
}

function stepThree(cb) {
  console.log("step 3");
  cb();
}

stepOne(() => {
  stepTwo(() => {
    stepThree(() => {
      console.log("All calbacks called");
    });
  });
}); // This is called callback hell. Callback Hell JavaScript (ya kisi bhi asynchronous programming language) mein
//  ek aisi situation ko kehte hain jab aap kai nested callbacks likh dete ho — ek callback ke andar doosra, phir
//  uske andar teesra — aur yeh itne deeply nested ho jaate hain ke code:

// Mushkil se samajh aata hai

// Maintain karna hard hota hai

// Debugging aur error handling complex ban jaati hai this is also called christmas tree problem or effect.

//server ka code  jb be server k liye hoga usually wo async nahi hoga per jb b request kahi aur jaegi
// wo kb tk response laye ghi koi barosa ni hai. aesa code jo hmain pata hi ni k kb chalay ga
// us code k liye promises use krtay hain.

const pr = new Promise(function (res, rej) {
  //if res runs then then part of the promise runs otherwise catch part runs.
  //first thing is always resolve and second thing is always reject.
  console.log("Instagram jao data lao");
  console.log("Instagram mein data collect hora hai");
  console.log("Instagram main data collect main error aya");
  rej();
});

pr.then(function () {
  console.log("resolved");
}).catch(function () {
  console.log("rejected");
});

function stepOne() {
  return new Promise(function (res, rej) {
    console.log("step1");
    res();
  });
}

function stepTwo() {
  return new Promise(function (res, rej) {
    console.log("step2");
    res();
  });
}

function stepThree() {
  return new Promise(function (res, rej) {
    console.log("step3");
    res();
  });
}
stepOne()
  .then(stepTwo)
  .then(stepThree)
  .then(function () {
    console.log("All steps done");
  });
