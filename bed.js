img = "";
status2 = "";
objects = [];
objectDetector1 = "";
function preload(){
   img = loadImage("bed.jpeg");
}

function setup(){
    canvas = createCanvas(600, 600);
    canvas.position();
    objectDetector1 = ml5.objectDetector('cocossd', model_loaded);
document.getElementById("status2").innerHTML = "Status: Detecting";
}

function model_loaded(){
console.log("Model Loaded!");
status2 = true;
objectDetector1.detect(img, gotResults);
}


function draw(){
    image(img, 0, 0, 600, 600);
    if(status2 != ""){
        document.getElementById("objects2").innerHTML = objects.length;
        for(i=0; i<objects.length; i++){
document.getElementById("status2").innerHTML = "Status: Object Detected";
fill("#FF0000");
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%", objects[i].x - 300, objects[i].y - 400);
noFill();
stroke("#FF0000");
rect(objects[i].x - 300, objects[i].y - 400, objects[i].width, objects[i].height)
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