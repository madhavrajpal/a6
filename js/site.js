document.addEventListener("DOMContentLoaded",function(){
  // console.log("Hello World!");

  // let student = {
  //   fullName: "Student Name",
  //   address: "123 Street, Toronto, ON.",
  //   enrolled: true,
  //   addresses: [
  //     {mailing: "57 ABC Avenue, Milcroft, ON"}, {residence: "99 Seneca Street"}
  //   ],
  //   age: 35
  // }

  // console.log(student); // object
  // console.log(JSON.stringify(student)); // JSON Formatted String

  // let JSONstudent = '{"fullName":"Student Name","address":"123 Street, Toronto, ON.","enrolled":true,"addresses":[{"mailing":"57 ABC Avenue, Milcroft, ON"},{"residence":"99 Seneca Street"}],"age":35}';
  // let parsedStudent = JSON.parse(JSONstudent);
  // console.log(parsedStudent.addresses[0].mailing); // 57 ABC Avenue, Milcroft, ON

  // Pull in a random quote from URL: "https://dummyjson.com/quotes/random" using XMLHttpRequest

  // let xhr = new XMLHttpRequest();

  // xhr.open("GET", "https://dummyjson.com/quotes/random");
  // xhr.onload = function(){ // once the request has completed
  //   //console.log("request completed");
  //   //console.log(this.responseText);
  //   let quoteObject = JSON.parse(this.responseText);
  //   console.log(quoteObject.quote);
  // };

  // xhr.send();

  // Pull in a random quote from URL: "https://dummyjson.com/quotes/random" using Fetch

  // fetch("https://dummyjson.com/quotes/random",{
  //   method: "GET"
  // }).then(res=>res.json()).then(data=>{
  //   console.log(data.quote);
  // })

});

// async function getQuote(){
//   let quoteParagraph = document.getElementById("quote");
//   //let data = {}
//   const fetchRes = await fetch("https://dummyjson.com/quotes/random");
//   const quote = fetchRes.json().quote;

//   console.log(quote)
//   return quote;

  

//   // quoteParagraph.innerText = data.quote; // ERROR, will be undefined

// }

