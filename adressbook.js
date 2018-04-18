$(document).ready(function(){


//declaring button variables
  var addButton = document.getElementById("addbtn");
  var showButton = document.getElementById("showbtn");
    var deleteButton = document.getElementById("delbtn");


//input form variables
var fullName = document.getElementById("name");
var phone = document.getElementById("phone");
var location = document.getElementById("city");
var email = document.getElementById("email");

// array to store values
var addressBook = [];

// event listeners
delbtn.addEventListener("click", removeContact)
addbtn.addEventListener("click" , addAndStore);
function addPerson (fullName, phone, location, email) {
  this.fullName=fullName;
  this.phone=phone;
  this.location=location;
  this.email=email;
  console.log(addPerson.fullName);
};
function removeContact(e){

}
function showContact(){
  if(localStorge["addbook"]=== undefined){
    localStorge["addbook"]= "[]";
  }
  else{
    addressBook= JSON.parse(localStorge["addbook"]);
  }
}

function addAndStore(){
  val isEmpty = fullName.value != "" && phone.value != "" && location.value!= "" && email.value!="";

  if(isEmpty){
    var object = {
      "fullName":"Francis Eze", "phone":"+2346837483739", "location":"Onitsha", "email":"ezefrancis@gmail.com"
    };
    adressbook.push(object);
    localStorge["addbook"]= JSON.stringify(adressbook);

  };
};
});

      //on click methodfor the form
