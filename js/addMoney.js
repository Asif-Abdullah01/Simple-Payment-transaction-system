document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    // const addMoney = document.getElementById('input-addMoney').value;
    // const addMOneyNumber = parseFloat(addMoney);

    // getInputValueById();
    // const addMoney = getInputValueById();
    // console.log(addMoney);

    const addMoney = getInputValueById('input-addMoney');

    const pinNumber = getInputValueById('input-pinNum');
    // console.log(addMoney+pinNumber);

    if(isNaN(addMoney)){
        alert('failed to add money');
        return;
    }

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance+ addMoney;
        console.log(newBalance);

        document.getElementById('account-balance').innerText =  newBalance;

        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. & New Balance: ${newBalance}`;
        // console.log(p);

        document.getElementById('transaction-container').appendChild(p)
    }
    else{
        alert('Failed to add the money.')
    }
})