    var header = document.querySelector('#servicesheader');
    var section = document.querySelector('#serviceslist');
    var requestURL = 'services.json';
    var mgServices = null;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        if (navigator.userAgent.match(/msie|trident/i) ) {
            mgServices = JSON.parse(request.responseText);
        }
        else {
            mgServices = request.response;
        }
        populateHeader(mgServices);
        showServices(mgServices);
    }    
    
    // Build the Services header
    function populateHeader(jsonObj) {
      var myTitle = document.createElement('blockquote');
      myTitle.textContent = jsonObj['sectionTitle'];
      header.appendChild(myTitle);
    }

    // Build the Services section
    function showServices(jsonObj) {
      var services = jsonObj['services'];
      var svcRows = services.length;

      // Determine the number of rows to display
      var svcRows = Math.ceil(svcRows / 3);
        
      var keepGoing = true;
      var currColCount = 0;
         
      while (keepGoing) {
            var myRow = document.createElement('div');
            myRow.className = 'row';
            for(var i = currColCount; i < currColCount + 3; i++) {
                if (i < services.length) {
                    var myDiv = document.createElement('div');
                    var mySection = document.createElement('section');

                    var myH5 = document.createElement('h5');
                    var myImage = document.createElement('img');
                    var myH6 = document.createElement('h6');
                    var myPara2 = document.createElement('p');
                    
                    var myTransformImage = document.createElement('div');
                    var myTransformSubtitle = document.createElement('div');

                    // Set the div to 30% of the screen width
                    myDiv.className = 'col-30';
                    
                    mySection.className = 'services-container';
                    myH5.textContent = services[i].name;
                    
                    // Build the image to transform and display a service image caption on hover
                    myTransformImage.className = 'services-image';
                    myTransformSubtitle.className = 'services-image-caption';
                    
                    myImage.src = services[i].svcImage;
                    myImage.textContent = services[i].svcImage;
                                        
                    myH6.textContent = services[i].subTitle;
                    myTransformSubtitle.appendChild(myH6);
                    
                    myTransformImage.appendChild(myImage);
                    myTransformImage.appendChild(myTransformSubtitle);                    

                    // Display the Service description
                    myPara2.textContent = services[i].description;
                    
                    // Append all the information for the Service to the correct elements
                    mySection.appendChild(myH5);
                    mySection.appendChild(myTransformImage);
                    mySection.appendChild(myPara2);
                    myDiv.appendChild(mySection);
                    myRow.appendChild(myDiv);
                    section.appendChild(myRow);
                }
                else {
                    keepGoing = false;
                }
            }
          currColCount = i;
          svcRows -= 1;
          if (svcRows == 0 || currColCount == services.length) {
              keepGoing = false;
          }
      }
    }