//https://teachablemachine.withgoogle.com/models/y1c2slq4W/model.json

function setup(){
canvas=createCanvas(500,500)
canvas.center()
video=createCapture(VIDEO)
video.hide();
imageMode(CENTER)

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/y1c2slq4W/model.json',modelLoaded)
classifier.classify(video,gotResults)

}
function draw(){
    image(video,250,250,500,500)
}
function modelLoaded(){
console.log('Modelo pronto')
}
function gotResults(erro,results){
if(erro){
    console.error(error)
}else{
    console.log(results);
    document.getElementById('nome').innerHTML=results[0].label
    document.getElementById('precisao').innerHTML=results[0].confidence.toFixed(3);
}
}