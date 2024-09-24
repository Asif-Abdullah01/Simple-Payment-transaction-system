// function getInputValueById(){
//     console.log('utilitieees');

//     const addMoney = document.getElementById('input-addMoney').value;
//     return addMoney;
// }


function getInputValueById(id){
    // console.log('utilitieees');

    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){

    const textValue = document.getElementById(id).innerText;
    const textNum = parseFloat(textValue);
    return textNum;
}

function showSectionByID(id){
    document.getElementById('addMoney-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transaction-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden');
} 