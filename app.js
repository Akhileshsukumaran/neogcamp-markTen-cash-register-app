var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#btn-check");
var errorMsg = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function checkBillandCashAmount(){

   hideMsg();

    if(billAmount.value > 0)
    {
        if(cashGiven.value >= billAmount.value)
        {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            CalculateChange(amountToBeReturned);

        }
        else
        {
            showError("Do you want to wash plates?");
        }
    }
    else
    {
       showError("Please enter an amount greater than 0 !");
    }
})

function hideMsg()
{
    errorMsg.style.display = "none";
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

