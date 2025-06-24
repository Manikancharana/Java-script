// let input=document.getElementById('inputbox');      //geltElementByid is used to take a value for the html document 
// let button=document.querySelectorAll('button');  

// let string="";
// let arr = Array.from(button); //all buttons are array elements
// arr.forEach(button => {
//     button.addEventListener('click',(e) =>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);  // eval() is not safe for random input
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string="";
//         input.value = string;
// }
//         else if(e.target.innerHTML == 'DEL'){
//             string= string.substring(0,string.length-1);
//             input.value = string;
//         }
        
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }

//     })
// })



//using switch statement

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputbox');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';

    const updateDisplay = () => {
        input.value = currentInput || '0';
    };

    const handleButtonClick = (buttonValue) => {
        switch (buttonValue) {
            case '=':
                try {
                    currentInput = eval(currentInput).toString();
                } catch {
                    currentInput = 'Error';
                }
                break;
            case 'AC':
                currentInput = '';
                break;
            case 'DEL':
                currentInput = currentInput.slice(0, -1);
                break;
            default:
                currentInput += buttonValue;
        }
        updateDisplay();
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            handleButtonClick(button.innerHTML);
        });
    });
});