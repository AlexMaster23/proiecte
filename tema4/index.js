function ShowVideo1() {
  var x = document.getElementById("Video1");
  var xx = document.getElementById('Video2');
  var xxx = document.getElementById('Video3');
  if (x.style.display === "none") {
    x.style.display = "block";
    xx.style.display = "none";
    xxx.style.display = "none";
  } else {
    x.style.display = "none";
    xx.style.display = "none";
    xxx.style.display = "none";
  }
}

function ShowVideo2() {
  var x = document.getElementById("Video1");
  var xx = document.getElementById('Video2');
  var xxx = document.getElementById('Video3');
  if (xx.style.display === "none") {
    x.style.display = "none";
    xx.style.display = "block";
    xxx.style.display = "none";
  } else {
    x.style.display = "none";
    xx.style.display = "none";
    xxx.style.display = "none";
  }
}

function ShowVideo3() {
	document.getElementById('Video1').style.display="none";
	document.getElementById('Video2').style.display="none";
	document.getElementById('Video3').style.display="block";
}

function ShowAudio1() {
  var x = document.getElementById("Audio1");
  var xx = document.getElementById('Audio2');
  var xxx = document.getElementById('Audio3');
  if (x.style.display === "none") {
    x.style.display = "block";
    xx.style.display = "none";
    xxx.style.display = "none";
  } else {
    x.style.display = "none";
    xx.style.display = "none";
    xxx.style.display = "none";
  }
}

function ShowAudio2() {
  var x = document.getElementById("Audio1");
  var xx = document.getElementById('Audio2');
  var xxx = document.getElementById('Audio3');
  if (xx.style.display === "none") {
    x.style.display = "none";
    xx.style.display = "block";
    xxx.style.display = "none";
  } else {
    x.style.display = "none";
    xx.style.display = "none";
    xxx.style.display = "none";
  }
}

function ShowAudio3() {
	document.getElementById('Audio1').style.display="none";
	document.getElementById('Audio2').style.display="none";
	document.getElementById('Audio3').style.display="block";
}