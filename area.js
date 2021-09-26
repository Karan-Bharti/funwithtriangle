const sideInput=document.querySelectorAll(".side-input");
const outputB=document.querySelector("#output");
const chkBtn=document.querySelector("#chk-btn");
function areaTriangle(height,base){
    const areaTri =(height*base) / 2;
    return areaTri;
}

function calculateArea (){
const areaTri=areaTriangle(Number(sideInput[0].value),Number(sideInput[1].value));
outputB.innerText = "The area of triangle is "+ areaTri;

}


chkBtn.addEventListener('click',calculateArea)