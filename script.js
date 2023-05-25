function nextTime() {

  var text = "Join Us Here ";

  return text;

}

meeting = nextTime();
meeting = String(meeting);

var speed = 75;
var i = 0;

function typeWriter() {
  if (i < meeting.length) {
    document.getElementById("zoom").innerHTML += meeting.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

