img = "";
status5 = "";
objects = [];
objectDetector1 = "";

function preload(){
   img = loadImage("TV.png");
}

function setup(){
    canvas = createCanvas(800, 600);
    canvas.position();
    objectDetector = ml5.objectDetector('cocossd', model_loaded);
document.getElementById("status5").innerHTML = "Status: Detecting";
}

function model_loaded(){
console.log("Model Loaded!");
status1 = true;
objectDetector.detect(img, gotResults);
}


function draw(){
    image(img, 0, 0, 800, 600);
    if(status5 != ""){
        document.getElementById("objects5").innerHTML = objects.length;
        for(i=0; i<objects.length; i++){
document.getElementById("status5").innerHTML = "Status: Object Detected";
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