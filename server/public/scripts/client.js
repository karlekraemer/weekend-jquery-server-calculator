console.log('yo waddup');

$(document).ready(onReady);

function onReady() {
    console.log('in onReady!');
    $('#equalsBtn').on('click', postSolution);
    $('#plusBtn').on('click', addNums);
    $('#minusBtn').on('click', minusNums);
    $('#multiplyBtn').on('click', multiplyNums);
    $('#divideBtn').on('click', divideNums);
    $('#clearBtn').on('click', clearSolutions);
}

function addNums() {
    console.log('in addNums function!');
    // add the two inputs together and send to solutions.js as an object. Does not need to display on the dom. 
    let answer = Number($('#firstNum').val()); + Number($('#secondNum').val());
    console.log(answer);
    let solution = {
        firstNumber: Number($('#firstNum').val()),
        operation: "+",
        secondNumber: Number($('#secondNum').val()),
        equals: "=",
        result: answer,
    }
    console.log(solution);
}

function minusNums() {
    console.log('in minusNums function!');
}

function multiplyNums() {
    console.log('in multiplyNums function!');
}

function divideNums() {
    console.log('in divideNums function!');
}

function clearSolutions() {
    console.log('in clearSolutions function!');
}

// Post solution function below. This goes to 

function postSolution() {
    console.log('in postSolution function!');
//     $.ajax({
//         method: 'POST',
//         data: math,
//         url: '/solution',
//     }).then(function(response){
//         console.log('post request response', response);
//         // get the updated array
//         addNums();
//     }).catch(function(error){
//         alert(error.responseText);
//     });
}

// function getQuotes() {
//     $.ajax({
//         method: 'GET',
//         url: '/quotes',
//     }).then(function(response){
//         console.log('this is the response from the function', response);
//         appendToDom(response);
//     });
// }

// function appendToDom(array) {
//     console.log('appendToDom function', array);
//     $('#Output').empty();
//     for (let item of array){
//         $('#Output').append(`
//             <li>"${item.text}" said by ${item.author}</li>
//         `)
//     }

// }