////hello///

var myimages=new Array()
function preloadimages(){
for (i=0;i<preloadimages.arguments.length;i++){
myimages[i]=new Image()
myimages[i].src=preloadimages.arguments[i]
}
}

preloadimages("images/image1.JPG","images/image2.JPG","images/image3.JPG","images/image4.JPG","images/image5.JPG","images/image6.JPG","images/image7.JPG","images/image8.JPG")

console.log('loaded main.js');
function test(a){ console.log('....'+a)}
var tron=document.getElementById("photo")
var p1 = document.getElementById('pic1');
var p2 = document.getElementById('pic2');
var p3 = document.getElementById('pic3');
var p4 = document.getElementById('pic4');
var p5 = document.getElementById('pic5');
var p6 = document.getElementById('pic6');
var p7 = document.getElementById('pic7');
var p8 = document.getElementById('pic8');


p1.addEventListener("mouseenter", function(){
    tron.style.backgroundImage="url('images/image1.JPG')";
    test('tron')
})
p2.addEventListener("mouseenter", function(){
    tron.style.backgroundImage="url('images/image2.JPG')";
    test('tron')
})
p3.addEventListener("mouseenter", function(){
    tron.style.backgroundImage="url('images/image3.JPG')";
    test('tron')
})
p4.addEventListener("mouseenter", function(){
    tron.style.backgroundImage="url('images/image4.JPG')";
    test('tron')
})
p5.addEventListener("mouseenter", function(){
    tron.style.backgroundImage="url('images/image5.JPG')";
    test('tron')
})
p6.addEventListener("mouseenter", function(){
    tron.style.backgroundImage="url('images/image6.JPG')";
    test('tron')
})
p7.addEventListener("mouseenter", function(){
    tron.style.backgroundImage="url('images/image7.JPG')";
    test('tron')
})
p8.addEventListener("mouseenter", function(){
    tron.style.backgroundImage="url('images/image8.JPG')";
    test('tron')
})