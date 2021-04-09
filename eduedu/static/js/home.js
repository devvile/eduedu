console.log("japa");

function SetDefaultTime() {
  var currentDateTime = new Date();
  var millis = currentDateTime.getTime();
  //currentDateTime.getTimezoneOffset("UTC + 01:00") * 60000;
  currentDateTime.setTime(millis);
  return currentDateTime;
}

let x = SetDefaultTime();

console.log(x);
console.log(x.toLocaleTimeString());
//console.log(x.toLocaleString("pl-Pl", { timeZone: "Europe/Warsaw" }));
