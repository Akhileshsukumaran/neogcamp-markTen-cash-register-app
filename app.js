var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var lblCashGiven = document.querySelector(".cash-given");
var checkButton = document.querySelector("#btn-check");
var nextButton = document.querySelector("#btn-next");
var errorMsg = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var availableNotes = [2000, 500, 100, 20, 10, 5, 1];

hideMsg();

nextButton.addEventListener("click", function checkBillAmount(){

    if(billAmount.value > 0 && isNaN(billAmount.value) === false)
    {
        hideMsg();
        ShowCashGiven();
        CheckChange();
    }
    else if (isNaN(billAmount.value))
    {
        showError("Please enter a valid amount!");
    }
    else
    {
       showError("Please enter an amount greater than 0 !");
    }

})

function CheckChange()
{
    checkButton.addEventListener("click", function checkBillandCashAmount(){
     
         if(billAmount.value > 0)
         {
             ShowCashGiven();
     
             if(cashGiven.value >= billAmount.value)
             {
                 hideMsg();
                 ShowCashGiven()
                 const amountToBeReturned = cashGiven.value - billAmount.value;
                 CalculateChange(amountToBeReturned);
     
             }
             else
             {
                 showError("Do you want to wash plates?");
             }
         }
         else if ( typeof billAmount.value === 'String')
         {
             showError("Please enter a valid amount!");
         }
         else
         {
            showError("Please enter an amount greater than 0 !");
         }
     })

}


function ShowCashGiven()
{
    cashGiven.style.visibility = "visible";
    lblCashGiven.style.visibility = "visible";
}

function hideMsg()
{
    errorMsg.style.display = "none";
    cashGiven.style.visibility = "hidden";
    lblCashGiven.style.visibility = "hidden";
}

function CalculateChange(amountToBeReturned)
{
    for(let i = 0; i < availableNotes.length; i++)
    {
        var numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        console.log(numberOfNotes);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showError(error)
{
    errorMsg.style.display = "block";
    errorMsg.innerText = error;
}

