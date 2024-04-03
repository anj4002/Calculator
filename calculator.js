// //To do:M+/M- and MC functional
// let string= "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML == '='){
//             string  = eval(string);
//             document.querySelector('input').value=string;
//         }
//         else if(e.target.innerHTML == 'C'){
//             string  = "";
//             document.querySelector('input').value=string;
//         }
//         else{
//         console.log(e.target);
//         string=string+e.target.innerHTML;
//         document.querySelector('input').value=string;  
// }
// })
// })
//done M+/M-.
let string = "";
let memory = 0;

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'M+') {
            memory += parseFloat(string) || 0;
            string = "";
            document.querySelector('input').value = memory;
        } else if (e.target.innerHTML == 'M-') {
            memory -= parseFloat(string) || 0;
            string = "";
            document.querySelector('input').value = memory;
        } else if (e.target.innerHTML == 'MC') {
            memory = 0;
            document.querySelector('input').value = memory;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
