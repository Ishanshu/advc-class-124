function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(0,100)

    canvas = createCanvas(550, 430);
    canvas.position(560,130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background("#5196e3");
}

function modelDone()
{
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error)
{
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}