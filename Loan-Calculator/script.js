document.getElementById('calculatebtn').addEventListener('click',calculateLoan);

function calculateLoan()
{

 const loanAmount=parseFloat(document.getElementById('loanAmountInput').value);
 const intereastRate=parseFloat(document.getElementById('intereastRateInput').value);
 const loanTerm=parseFloat(document.getElementById('loanTermInput').value);


 if(isNaN(loanTerm) || isNaN(intereastRate)|| isNaN(loanAmount))
 {
    alert("Please enter the valid number.")
 }

 const monthlyInterest=intereastRate/100/12;
 const totalPayment=loanTerm;
 const monthlyPayment=(loanAmount*monthlyInterest)/(1-Math.pow(1+monthlyInterest,-totalPayment));
 const totalInterest=(monthlyPayment*totalPayment)-loanAmount;

 displayResult(monthlyPayment,totalInterest);
}

function displayResult(monthlyPayment,totalInterest)
{

    const resultDiv=document.getElementById('result');

    resultDiv.innerHTML=`
    
    <p><strong>Monthly Payment: ${monthlyPayment.toFixed(2)}</p></strong>
    
    <p><strong>Total Interest: ${totalInterest.toFixed(2)}</p></strong>
    `;
}