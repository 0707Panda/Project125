function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 450);
    canvas.position(570, 100)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Model is Loaded:)");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference = floor(leftWristx-rightWristx);
    }
}

function draw(){
    background("lightgreen");
    textSize(difference);
    fill('#FFE787');
    text('Bhavya', 50, 400);
}