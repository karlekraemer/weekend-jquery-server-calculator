console.log('yo waddup');

$(document).ready(onReady);

function onReady() {
    console.log('in onReady!');
    // $('#equalsBtn').on('click', seeSolution);
    $('#plusBtn').on('click', addition);
    $('#minusBtn').on('click', subtraction); //why is 'subtraction' weird?
    $('#multiplyBtn').on('click', multiplication);
    $('#divideBtn').on('click', division);
    $('#clearBtn').on('click', clearSolutions);
}

// let solution = [];

// //////////////////////////

function addition() {
    console.log('in addition function.');
    $('#equalsBtn').on('click', addNums);
}

function addNums() {
    console.log('in addNums function!');
    // add the two inputs together and: (1) send to solutions.js as an object: (2)  Does not need to display on the dom. 
    let answer = Number($('#firstNum').val()) + Number($('#secondNum').val());
    let newSolution = {
        firstNumber: Number($('#firstNum').val()),
        operation: "+",
        secondNumber: Number($('#secondNum').val()),
        equals: "=",
        result: answer,
    }
    console.log(newSolution);

    $('#currentSolution').empty();
    $('#currentSolution').append(answer);
    $.ajax({
        method: 'POST',
        url: '/solutions',
        data: newSolution,
    }).then(function(response){
        console.log('post request response', response);
        newSolution.empty;
        getCalculations();
    }).catch(function(error){
        alert(error.responseText);
    });
}

// //////////////////////////

function subtraction() {
    console.log('in subtraction function');
    $('#equalsBtn').on('click', minusNums);
}

function minusNums() {
    console.log('in minusNums function!');
    let answer = Number($('#firstNum').val()) - Number($('#secondNum').val());
    let newSolution = {
        firstNumber: Number($('#firstNum').val()),
        operation: "-",
        secondNumber: Number($('#secondNum').val()),
        equals: "=",
        result: answer,
    }
    console.log(newSolution);

    $('#currentSolution').empty();
    $('#currentSolution').append(answer);
    $.ajax({
        method: 'POST',
        url: '/solutions',
        data: newSolution,
    }).then(function(response){
        console.log('post request response', response);
        newSolution.empty;
        getCalculations();
    }).catch(function(error){
        alert(error.responseText);
    });
}

////////////////////////////

function multiplication() {
    console.log('in multiplication function');
    $('#equalsBtn').on('click', multiplyNums);
}

function multiplyNums() {
    console.log('in multiplyNums function!');
    let answer = Number($('#firstNum').val()) * Number($('#secondNum').val());
    let newSolution = {
        firstNumber: Number($('#firstNum').val()),
        operation: "*",
        secondNumber: Number($('#secondNum').val()),
        equals: "=",
        result: answer,
    }
    console.log(newSolution);

    $('#currentSolution').empty();
    $('#currentSolution').append(answer);
    $.ajax({
        method: 'POST',
        url: '/solutions',
        data: newSolution,
    }).then(function(response){
        console.log('post request response', response);
        newSolution.empty;
        getCalculations();
    }).catch(function(error){
        alert(error.responseText);
    });
}

////////////////////////////

function division() {
    console.log('in division function');
    $('#equalsBtn').on('click', divideNums);
}

function divideNums() {
    console.log('in divideNums function!');
    let answer = Number($('#firstNum').val()) / Number($('#secondNum').val());
    let newSolution = {
        firstNumber: Number($('#firstNum').val()),
        operation: "/",
        secondNumber: Number($('#secondNum').val()),
        equals: "=",
        result: answer,
    }
    console.log(newSolution);

    $('#currentSolution').empty();
    $('#currentSolution').append(answer);
    $.ajax({
        method: 'POST',
        url: '/solutions',
        data: newSolution,
    }).then(function(response){
        console.log('post request response', response);
        newSolution.empty;
        getCalculations();
    }).catch(function(error){
        alert(error.responseText);
    });
}

///////////////////////////



function clearSolutions() {
    console.log('in clearSolutions function!');
}

// Post solution function below. This goes to 
function getCalculations() {
    console.log('in getCalculations');
    $.ajax({
        method: 'GET',
        url: '/solutions',
    }).then(function(response) {
        console.log('our response from the server', response);
        appendToDom(response);
    })
}

function appendToDom(array) {
    console.log('in postSolution function!', array);
    // console.log('appendToDom function', array);
    $('#previousSolutions').empty();
    for (let item of array){
        $('#previousSolutions').append(`
        <li>${item.firstNumber} ${item.operation} ${item.secondNumber} ${item.equals} ${item.result}</li>
        `)
    }

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