img = "";
status = "";
objects = [];

function preload()
{
    img = loadImage('tabel.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function draw()
{
    image(img, 0, 0, 640, 420);
    if(status != " ")
    {
        r = random(255);
        g = random(255);
        b = random(255);

        objectDetector.detect(img, gotResult);
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("no_of_obj").innerHTML = "Number of objects detected are : " + objects.length;

            fill(r,b,g);
            percent = floor(objects[i].confidence*100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objecst[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelLoaded()
{
    console.log("model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error){
        console.log(error);
    }

    console.log(results);
}

function back()
{
    window.location = "index.html";
}