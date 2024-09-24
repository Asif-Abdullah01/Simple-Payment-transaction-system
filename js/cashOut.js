document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    
    const cashOut = getInputValueById('input-cash-out');
    // console.log(cashOut);
    
    const pinNumber = getInputValueById('input-cash-out-pin');
    // console.log(pinNumber);

    if(isNaN(cashOut)){
        alert('failed to cashout, write correct digit');
        return;
    }
    
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');

        if(cashOut>balance){
            alert('you do not have enough balance');
            return;
        }

        const newBalance = balance-cashOut;
        document.getElementById('account-balance').innerText = newBalance;


        const div = document.createElement('div');
        div.classList.add('bg-yellow-300')
        div.innerHTML = `
            <h4 class ="text-2xl font-bold">Cash out</h4>
            <p>${cashOut} withdraw & New balance: ${newBalance}</p>
        `

        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('No money for you.... DGM.')
    }
})