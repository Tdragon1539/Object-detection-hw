img = "";
status1 = "";
objects = [];
objectDetector1 = "";
function preload(){
   img = loadImage("desk.jpeg");
}

function setup(){
    canvas = createCanvas(600, 600);
    canvas.position();
    objectDetector1 = ml5.objectDetector('cocossd', model_loaded);
document.getElementById("status1").innerHTML = "Status: Detecting";
}

function model_loaded(){
console.log("Model Loaded!");
status1 = true;
objectDetector1.detect(img, gotResults);
}


function draw(){
    image(img, 0, 0, 600, 600);
    if(status1 != ""){
        document.getElementById("objects").innerHTML = objects.length;
        for(i=0; i<objects.length; i++){
document.getElementById("status1").innerHTML = "Status: Object Detected";
fill("#FF0000");
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%", objects[i].x - 50, objects[i].y - 150 );
noFill();
stroke("#FF0000");
rect(objects[i].x - 50, objects[i].y - 150, objects[i].width, objects[i].height)
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