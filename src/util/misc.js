export function fixBangladeshPhoneNumbers(inputNumber){

    if (inputNumber){
        let newInput = [];
        for (let x of String(inputNumber)){
            if (isNumber(x)){
                newInput.push(x);
            }
        }

        inputNumber = newInput.join('');

        if ( String(inputNumber).length === 10 && isNumber(inputNumber)){
            inputNumber = `+880${inputNumber}`;
        }
        else if ( String(inputNumber).length === 11 && isNumber(inputNumber)){
            inputNumber = `+88${inputNumber}`;
        }
        else if ((String(inputNumber)).slice(0,3) === '880'){
            inputNumber = '+' + String(inputNumber);
        }
        return inputNumber
    }
    else{
        return inputNumber
    }
}

export function isValidPhoneNumber(number){

    if (!number) return false

    if (number !== "" && number.length === 14 && number.startsWith("+880") && isNumber(number)) {
        return true;
    } 
    else if (number === "") {
        return false;
    }
    else{
        return false;
    }
};

export function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
