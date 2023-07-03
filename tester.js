const slide = document.getElementByClassName ('slide');
var i = 0;
var images = [];
var time = 3000;

images[0] = 'video-resources1.jpg';
images[1] = 'whiteboard-resources.jpg';
images[2] = 'Tteokbokki.jpg';

function changeImg(){
    document.slide.src = images[i];

    if (i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImg()', time);
}