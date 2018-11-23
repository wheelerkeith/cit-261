function adjustPercentage(percentage) {
   document.getElementById("picSlider").innerHTML = percentage + '%';
}

function changePictureSize() {
   var picWidth = document.getElementById("picWidth").value;
   document.getElementById("pic").style.width = picWidth + '%';
}

function move() {
   var move = document.getElementById("theAnimation");
   var pos = 0;
   var id = setInterval(frame, 2);
   function frame() {
      if (pos == 350) {
         clearInterval(id);
      } else {
         pos++;
         move.style.top = pos + 'px';
         move.style.left = pos + 'px';
      }
   }
}