img = "";
status4 = "";
objects = [];
objectDetector1 = "";

function preload(){
   img = loadImage("fruit.jpg");
}

function setup(){
    canvas = createCanvas(600, 600);
    canvas.position();
    objectDetector1 = ml5.objectDetector('cocossd', model_loaded);
document.getElementById("status4").innerHTML = "Status: Detecting";
}

function model_loaded(){
console.log("Model Loaded!");
status4 = true;
objectDetector1.detect(img, gotResults);
}


function draw(){
    image(img, 0, 0, 600, 600);
    if(status4 != ""){
        document.getElementById("objects4").innerHTML = objects.length;
        for(i=0; i<objects.length; i++){
document.getElementById("status4").innerHTML = "Status: Object Detected";
fill("#FF0000");
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%", objects[i].x + 10, objects[i].y + 10);
noFill();
stroke("#FF0000");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
}

function gotResults(error, results){
if(error){
    console.error(error);
} else{
console.log(results);
objects = results;
}
}