status="";

function setup()
{
    canvas=createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: detecting object";
}

function modelLoaded()
{
    console.log("Model is loaded")
    status=true;
}

function draw()
{
    image(video, 0, 0, 400, 400);
}