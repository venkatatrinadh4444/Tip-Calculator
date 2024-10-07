let billElement=document.getElementById('billAmount');
let percentageElement=document.getElementById('percentageTip');
let tipElement=document.getElementById('tipAmount');
let totalElement=document.getElementById('totalAmount');
let errorElement=document.getElementById('errorMessage');

function calculateBtn() {
    let billAmountValue=parseInt(billElement.value);
    let percentageTipValue=parseInt(percentageElement.value);
    if(billAmountValue > 0 && percentageTipValue > 0) {
        let calculatedTip=(percentageTipValue/100)*billAmountValue;
        let calculatedTotal=billAmountValue+calculatedTip;
        tipElement.value=calculatedTip;
        totalAmount.value=calculatedTotal;
        errorElement.innerHTML="";
    }
    else {
        errorElement.innerHTML="please enter a valid input."
    }
    
}