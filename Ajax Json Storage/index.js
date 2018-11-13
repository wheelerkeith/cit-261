// open the json file
function openJson(url, callback) {

   // create and use an xmlhttprequest with ajax
   var xmlhttp = new XMLHttpRequest();
   xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         callback(this);
      }
   }

   xmlhttp.open("POST", url, true);

   xmlhttp.send();
}

// select options
function loadOptions(xhttp) {
   // save the file to an object and generate the options
   var moviesObj = JSON.parse(xhttp.responseText);
   var selectList = document.getElementById("movieNumber");
   for (var number in moviesObj.numbers) {
      var option = document.createElement("option");
      option.setAttribute("value", moviesObj.numbers[number].number);
      option.innerHTML = moviesObj.numbers[number].number;
      selectList.appendChild(option);
   }
}

// display the movie
function movieSelect(xhttp) {
   // save file to an object and display it on the screen
   var movieObj = JSON.parse(xhttp.responseText);
   var selectMovie = document.getElementById("movieNumber").value;
   for (var number in movieObj.numbers) {
      if (movieObj.numbers[number].number == selectMovie) {
         var txt = displayMovie(movieObj.numbers[number]);
      }
   }

   document.getElementById("displayList").innerHTML = txt;
}

function displayMovie(obj) {
   var txt = "<h2>" + obj.number + "<h2>";
   // start of the table
   txt += "<table><tr><th>Name</th><th>Year</th><th>Make</th><th>HP</th></tr>"
   // loop through object
   for (var cars in obj.cars) {
      txt += "<tr><td>" + obj.cars[cars].name + "</td><td>" +
         obj.cars[cars].year + "</td><td>" +
         obj.cars[cars].make + "</td><td>" +
         obj.cars[cars].HP + "</td></tr>";
   }

   txt += "</table>";
   return txt;
}