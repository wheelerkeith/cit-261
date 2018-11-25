// add the list of majors to the form
function populateMajors() {
   // create the majors array
   var majors = ["Computer Engineering", "Computer Information Technology", "Computer Science", "Software Engineering", "Web Design and Development"];

   // loop through the array adding each major as a radio button to the form
   for (var i = 0; i < majors.length; i++) {
       // create the child list item element
       var listItem = document.createElement("li");

       // create the radio button element
       var radio = document.createElement("input");
       radio.setAttribute("name", "major");
       radio.setAttribute("id", majors[i]);
       radio.setAttribute("value", majors[i]);
       radio.setAttribute("type", "radio");

       // create the label element
       var label = document.createElement("label");
       label.setAttribute("for", majors[i]);

       // create the label text
       var labelText = document.createTextNode(majors[i]);

       // add all the parts
       label.appendChild(labelText);
       listItem.appendChild(radio);
       listItem.appendChild(label);
       document.getElementById("majors").appendChild(listItem);
   }
}

// a function to generate a JS object
function generateObject() {
   // gather the value of each element
   var name = document.getElementById("javascriptObjectData").elements.namedItem("name").value;
   var age = document.getElementById("javascriptObjectData").elements.namedItem("age").value;
   var major = document.getElementById("javascriptObjectData").elements.namedItem("major").value;

   // remove whitespace
   name = name.trim();
   age = age.trim();

   // clean the data
   var nameCheck = name.search(/^[a-zA-Z]+(\s[a-zA-Z]*)*$/);
   var ageCheck = age.search(/^[0-9]+$/);

   // check that the data is well formatted
   if (nameCheck == 0 && ageCheck == 0) {
       // create the object
       var you = {
           name: name,
           age: age,
           get showContent() {
               return "Your name: " + this.name + "<br />Your age: " + this.age + "<br />Your major: " + this.major;
           }
       };

       // add a property to the object
       you.major = major;

       // add methods to the object
       you.showObject = function () {
           return "{ name: " + name + ", age: " + age + ", major: " + major + "}<br />";
       };

       // replace element with the object details
       document.getElementById("objectResults").innerHTML = you.showObject() + you.showContent;
   } else {
       // replace element with error
       document.getElementById("objectResults").innerHTML = "Input data is malformed, ensure that"
           + " your name contains only alpha characters and your age is a numeric value.";
   }
}