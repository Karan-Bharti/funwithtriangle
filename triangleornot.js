const inputB =document.querySelectorAll(".angle-input")
const checkBtn= document.querySelector("#chk-btn")
const outputB= document.querySelector("#output-b")

function calculateSumOfAngles(angle1,angle2,angle3){
const sumOfAngles=angle1+angle2+angle3;
return sumOfAngles;

}


function isTriangle(){
 var triangleSum= calculateSumOfAngles(Number(inputB[0].value),Number(inputB[1].value),Number(inputB[2].value));
if (triangleSum===180){

    outputB.innerText="Yay a triangle is formed"
}else{
    outputB.innerText="Ohh angles do not form atriangle"
}}



checkBtn.addEventListener("click",isTriangle)