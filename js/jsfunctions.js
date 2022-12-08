function CountMeDown() {
  var dteNow = new Date();
  var numberOfDaysToAdd = 6;
  dteNow.setDate(dteNow.getDate() + numberOfDaysToAdd);

  var intYear = dteNow.getFullYear();

  var toTime = new Date("December 24, " + intYear + " 23:00:01"); // CHANGE ME
  var now = new Date();
  var difference = toTime.getTime() - now.getTime();

  var seconds = Math.floor(difference / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  if (difference <= 0) {
    clearTimeout(timer);
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var days = 0;
  }

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  var timer = setTimeout("CountMeDown()", 1000);

  document.getElementById("daysboxDiv").innerHTML = "";
  document.getElementById("hoursboxDiv").innerHTML = "";
  document.getElementById("minsboxDiv").innerHTML = "";
  document.getElementById("secsboxDiv").innerHTML = "";

  for (var i = 1; i <= days; i++) {
    var newImageOne = '<div class="boxImgTree"></div>';
    document.getElementById("daysboxDiv").innerHTML += newImageOne;
  }

  for (var j = 1; j <= hours; j++) {
    var newImageTwo = '<div class="boxImgSnow"></div>';
    document.getElementById("hoursboxDiv").innerHTML += newImageTwo;
  }

  for (var k = 1; k <= minutes; k++) {
    var newImageThree = '<div class="boxImgPresent"></div>';
    document.getElementById("minsboxDiv").innerHTML += newImageThree;
  }

  for (var l = 1; l <= seconds; l++) {
    var newImageFour = '<div class="boxImgReindeer"></div>';
    document.getElementById("secsboxDiv").innerHTML += newImageFour;
  }
}
