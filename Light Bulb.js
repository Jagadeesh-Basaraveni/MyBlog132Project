Status="";
Light_Bulb_image="";

function preload() {
    Light_Bulb_image = loadImage("Light Bulb.JPG");
}

function setup() {
    canvas = createCanvas(640, 350);
    canvas.position(315, 200);
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
    object_detector.detect(Light_Bulb_image, gotResults);
}

function gotResults(results, error) {
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(Light_Bulb_image, 0, 0, 640, 350);
}