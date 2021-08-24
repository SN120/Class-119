function setup(){
    canvas = createCanvas(300, 225);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bk6W6U8Hc/model.json", modelLoaded);
}
function draw(){
    image(video, 0, 0, 300, 225);
    classifier.classify(video, gotResult);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotResult(error, result){
    if(error){
        console.log(error);
    } else{
        console.log(result);
        document.getElementById("result_object").innerHTML = result[0].label;
        document.getElementById("result_accuracy").innerHTML = 100*result[0].confidence.toFixed(2)+"%";
    }
}