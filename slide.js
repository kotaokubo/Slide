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

// <------以下jQuery使用------->

$('#img2, #img3').hide();

var fadeImages = ['#img1', '#img2', '#img3'];
var num2 = 0;
var interval = function() {
    if(num2 == 0) {
        $(fadeImages[num2]).fadeOut(1000);
        num2 ++;
        $(fadeImages[num2]).fadeIn(3000);    
        return;
    } 
    if (num2 == 1) {
        $(fadeImages[num2]).fadeOut(1000);
        num2 ++;
        $(fadeImages[num2]).fadeIn(3000);    
        return;
    };
    if (num2 == 2) {
        $(fadeImages[num2]).fadeOut(1000);
        num2 %= num2;
        $(fadeImages[num2]).fadeIn(3000);  
        return;
    };
};

setInterval(interval, 5000);