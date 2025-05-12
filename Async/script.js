// Our synchronous code runs first and asynchronous code runs after here console.log("") statements will run first
// and then setTimeout will run because it is asynchronous.
// apka code subse pehle synchronous part chlata hai, synchrnous code ko js chalati hai main thread pay.kiunki js
// single threded hai. uska likha hua code chalna chalu hota hai pehle and main thread occupy hojata hai. main thread
// pay hamesha subse pehle pura synchronous code chalega. jb yeh pura code finish hoga tb ja k aync code k chalnay ki bari ayegi.
// js single threaded hai js aik operation hi ek time pay kar skti hai.
// thread mtlb- apk processor main cores hotain hain her code main khai saray threads hotay hain
// her thread aik wakt main aik operation perform kr skta hai.
console.log("hey");
setTimeout(function () {
  console.log("hey2");
}, 1000);
console.log("hey3");

//main thread -> jahan pay sunchronous code chalata hai subse pehle.
//main stack -> jo b main stack pay aiga wohi chalay ga.
//webapi -> browser ki tarf say kai saray features hotay hainjo js main nahi hote. wo features
// hum js main use to krte hain per wo js k feature ni hotay wo hmain browser say milte hain.

// Sync code main thread main chalana chalu hojata hai. and async code ko webapis behind the scenes operate
// krna chalu kr deti hain. jb yeh code (async) complete hota hai to iska completion callback queue main move hojata hai.
// aik event loop hota hai jo check krta hai k main thread khali hai k nai. ta k jo chezain callback queue main hain
// unhain main thread pay laya ja ske.

//callback queue
//microtask queue
//macrotask queue.
