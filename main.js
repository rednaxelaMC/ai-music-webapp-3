var song1="";
var song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function setup()
{
    canvas = createCanvas(550, 550);
    canvas.position(490, 200);
    video = createCapture(VIDEO);
    video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
        }     
        function modelLoaded()
        { 
            console.log("poseNet is initialized");
         }

function preload()
{
song1 = loadSound("music.mp3");
song2 = loadSound("music1.mp3")
}

function draw()
{
    image(video, 0, 0, 550, 500);
}
function play()
{
}
function gotPoses(results)
{
    if(results.length > 0)
   {
       console.log(results)
   } 

leftWristX=results[0].pose.leftWrist.x
leftWristY=results[0].pose.leftWrist.y
console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY)

rightWristX=results[0].pose.rightWrist.x
rightWristY=results[0].pose.rightWrist.y
console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY)
}