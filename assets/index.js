// listen for clicks on the navbar
document.querySelector(".navbar").addEventListener("click", (e) => {
  // ignore it if the click isn't on an anchor element
  if (e.target.tagName.toLowerCase() === "a") {
    // remove the 'active' class from all of the nav anchors
    document
      .querySelectorAll(".navbar a")
      .forEach((e) => e.classList.remove("active"));

    // add the 'active' class to the clicked element
    e.target.classList.add("active");
  }
});

$(function () {
  var scrollButton = document.getElementById("scroll-button");

  scrollButton.addEventListener("mouseenter", function (event) {
    event.preventDefault();
    var elmntToView = document.getElementById("whatWeDo");
    elmntToView.scrollIntoView({ behavior: "smooth" });
  });
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  // const uluru = { lat: -25.344, lng: 131.036 };
  const newYork = { lat: 40.70650809943554, lng: -74.00219868887126 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: newYork,
  });
  // The marker, positioned at New-york
  const marker = new google.maps.Marker({
    position: newYork,
    map: map,
  });
}
// Set  input color on value
var gfg = document.getElementById("email");
gfg.onchange = function (e) {

  console.log("test")
  if (gfg.value != "") {
    e.target.style.borderBottom = "1px black solid";
    e.target.style.color = "black";
  }
};
