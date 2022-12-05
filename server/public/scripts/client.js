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


function postSolution() {
    console.log('in postSolution function!');
}

function addNums() {
    console.log('in addNums function!');
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

// let newQuote = {
//     text: 'big gulps, eh? welp, seeya later',
//     author: 'lloyd christmas',
// }

// function postQuotes() {
//     // create a POST request and log out the response
//     // keep an eye out for situations where a refresh posts but a click won't!
//     $.ajax({
//         method: 'POST',
//         url: '/quotes',
//         data: newQuote
//     }).then(function(response){
//         console.log('post request response', response);
//         // get the updated array
//         getQuotes();
//     }).catch(function(error){
//         alert(error.responseText);
//     });
// }

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