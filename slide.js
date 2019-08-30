var slideImages = new Array("img/pig1.jpg", "img/pig2.jpg", "img/pig3.jpg");
var num = -1;


slideshow();

function slideshow() {
    if (num == 2) {
        num = 0;
    } else {
        num ++;
    }

    document.getElementById("imgs").src=slideImages[num];
    setTimeout("slideshow()",1000);
}

// <------------->

var fadeImages = ['#img1', '#img2', '#img3', 'img4']
var num2 = -1

var interval = function fadeImg() {
    if(num2 < 0) {
        index ++;
        return;
    } else {
        $(fadeImages[num2]).fadeOut(500);
        num2 ++;
        num2 %= fadeImages.length;
        $(fadeImages[num2]).fadeIn(500);
    }
};
setInterval("interval", 1000);

var services = ['#service01', '#service02', '#service03','#service04'];
var index = -1;
var doService = function(){
  if(index < 0) { index++; return; }
  $(services[index]).fadeOut(500);
  index++;
  index %= services.length;
  $(services[index]).fadeIn();
};
setInterval(doService, 3000);