
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0rdsgFpEizQMi7HlWSbvw5Pu3jVUl5wE",
  authDomain: "laptoppakistan.firebaseapp.com",
  projectId: "laptoppakistan",
  storageBucket: "laptoppakistan.appspot.com",
  messagingSenderId: "61309345527",
  appId: "1:61309345527:web:1ce2633b5703af0c0a7df2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import{getDatabase, ref ,set ,child ,update , remove}
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const db = getDatabase();

var namebox = document.getElementById("namebox")
var phoneno = document.getElementById("phoneno")
var address = document.getElementById("address")
var laptoptype = document.getElementById("laptoptype")

var insert = document.getElementById("insert")
var Delete = document.getElementById("delete")

function insertdata(){
set(ref(db,"Customer/"+ namebox.value),{
   CustomerName: namebox.value,
   CustomerNo: phoneno.value,
   CustomerAddress: address.value,
   Laptoptype: laptoptype.value

})
.then(()=>{
alert("Order Placed Succesfully")

})
.catch((error)=>{

    alert("error Occured"+error)
});
}

insert.addEventListener('click',insertdata)


function removedata(){
    remove(ref(db,"Customer/"+ namebox.value),{
     })
     .then(()=>{
     alert("Order deleted Succesfully")
     
     })
     .catch((error)=>{
     
         alert("error Occured"+error)
     });
     }
     
     Delete.addEventListener('click',removedata)
