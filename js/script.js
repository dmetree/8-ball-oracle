
var items = document.querySelectorAll('#card, #askMe');

for (var i = 0; i < items.length; i++) {
  items[i].onclick = function () {
    
    var tl = new TimelineMax();
    tl.to(".card", .5, { rotation: "+=360", scale: 0.2, opacity: 0.3 })
    .to("#content", .5, { opacity: .3 })
    .to(".card", .5, { rotation: "-=360", scale: 1, opacity: 1 }, .5)
    .to("#content", .5, { opacity: 1 }, .5)
    .to("#content", 1, {opacity: 0},2)

    var theAnswer = '';
    function answer() {
      theAnswer = askMe();
      document.getElementById("content").innerHTML = theAnswer;
    }
    setTimeout(answer, 500);
  };
}


function askMe() {

  let arr = ["Yes", "No", "Maybe", "Ask later", "I guess, you know", "Soon you'll see"];
  let randomN = (Math.floor(Math.random() * 6 + 1));

  if (randomN === 1) {
    return arr[0];
  } else if (randomN === 2) {
    return arr[1];
  } else if (randomN === 3) {
    return arr[2];
  } else if (randomN === 4) {
    return arr[3];
  } else if (randomN === 5) {
    return arr[4];
  } else if (randomN === 6) {
    return arr[5];
  } else if (randomN === 7) {
    return arr[6];
  }
}


