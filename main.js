function preload()
{

}

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(300,300);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw()
{
    background('#0400ff');
}