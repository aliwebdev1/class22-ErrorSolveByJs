document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;

    const newDepositAmmount = parseFloat(newDepositText);

    // validate input
    // console.log(typeof (newDepositAmmount) == 'sring');

    // input field error solve
    if (typeof (newDepositAmmount) == 'false' | newDepositText == '') {
        document.getElementById('deposit-field-error').style.display = 'block'
        return
    }
    document.getElementById('deposit-field-error').style.display = 'none'


    // min value error solve
    if (newDepositAmmount < 1) {
        document.getElementById('min-deposit-error').style.display = 'block'
        return
    }
    document.getElementById('min-deposit-error').style.display = 'none'

    // deposit-total 
    const depositTotal = document.getElementById('deposit-total');
    const priviousDepositText = depositTotal.innerText;
    const priviousDepositTotal = parseFloat(priviousDepositText)

    const newDepositeTotal = priviousDepositTotal + newDepositAmmount;
    depositTotal.innerText = newDepositeTotal;

    // balance update
    const balanceTotal = document.getElementById('balace-total');
    const priviousBalanceTotalText = balanceTotal.innerText;
    const priviousBanaceTotalAmmount = parseFloat(priviousBalanceTotalText);

    const newBalaceTotal = priviousBanaceTotalAmmount + newDepositAmmount;
    balanceTotal.innerText = newBalaceTotal

    //clear value
    depositInput.value = ''
})

// withdraw by clicking button
document.getElementById('withdra-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmmount = parseFloat(withdrawInputText);

    // withdraw input field error solve
    if (typeof (withdrawInputAmmount) == 'false' | withdrawInputText == '') {
        document.getElementById('withdraw-input-error').innerText = 'Withdraw input field is required'
        return
    }
    document.getElementById('withdraw-input-error').innerText = '';
    // min value error solve
    if (withdrawInputAmmount <= 9) {
        document.getElementById('withdraw-input-error').innerText = 'Withdraw should be min 10'
        return
    }
    document.getElementById('withdraw-input-error').innerText = ''


    const withdrawTotal = document.getElementById('withdraw-total');
    const newWithdrayTotalText = withdrawTotal.innerText;
    const newWithdrayTotalAmmount = parseFloat(newWithdrayTotalText);

    const newWithdrawTotal = newWithdrayTotalAmmount + withdrawInputAmmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // balance update for withdray
    const balanceTotal = document.getElementById('balace-total');
    const priviousBalanceTotalText = balanceTotal.innerText;
    const priviousBanaceTotalAmmount = parseFloat(priviousBalanceTotalText);
    // withdraw should be less then total balance
    if (priviousBanaceTotalAmmount < withdrawInputAmmount) {
        document.getElementById('withdraw-input-error').innerText = 'Valo hoye jaw masud valo hoye jaw';
        return;
    }
    document.getElementById('withdraw-input-error').innerText = ''


    const newBalaceTotal = priviousBanaceTotalAmmount - withdrawInputAmmount;
    balanceTotal.innerText = newBalaceTotal;

    withdrawInput.value = ''

})