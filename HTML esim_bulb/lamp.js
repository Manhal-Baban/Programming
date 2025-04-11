function changeImage() {
  var image = document.getElementById("OnOffLampImage");
  console.log("test");

  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
  } else {
    image.src = "pic_bulbon.gif";
  }
}
