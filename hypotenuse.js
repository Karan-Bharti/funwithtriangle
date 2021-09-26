const sideInput=document.querySelectorAll('.side-input');
const outputB=document.querySelector("#output");
const chkBtn=document.querySelector("#chk-btn");

function calculateSumOfSquares(a,b){
    const sumOfSquares=a*a+b*b;
    return sumOfSquares;
}

function calculateHypo (){
    // console.log(Number(sideInput[0].value));
const sumOfSquares = calculateSumOfSquares(Number(sideInput[0].value),Number(sideInput[1].value));
const lengthOfHypo = Math.sqrt(sumOfSquares);
outputB.innerText = "The Length of hypotenuse is"+lengthOfHypo;

}


chkBtn.addEventListener("click",calculateHypo)