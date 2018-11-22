function adjustPercentage(percentage) {
   document.getElementById("picSlider").innerHTML = percentage + '%';
}

function changePictureSize() {
   var picWidth = document.getElementById("picWidth").value;
   document.getElementById("pic").style.width = picWidth + '%';
}