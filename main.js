"use strict"
//for each loop to find selected input
function renderCoffee(coffee) {
    let html = '<div class="col-6 my-3">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<div class="row border">'
    html += '<h3 class="col-8">' + coffee.name + '</h3>';
    html += '<p class="col-4 border text-muted ">' + coffee.roast + '</p>';
    html += '</div>'
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    // console.log(selectedRoast)
    let filteredCoffees = [];
    // console.log(filteredCoffees)
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    display.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeesNames(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedCoffee = coffeeName.value;
    console.log(selectedCoffee)
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {

        if (coffee.name.includes(selectedCoffee)) {
            console.log(coffee)
            filteredCoffees.push(coffee);
        }
    });
    display.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let newCoffee = document.getElementById("addCoffee");
    let newRoast = document.getElementById("roastSelector2");
    // coffees.push(`name: ${newCoffee} roast: ${newRoast}`)
    Object.assign(coffees, {key3: "value3",name: newCoffee, roast: newRoast});
    console.log(coffees);
    display.innerHTML = renderCoffees();

}
//grab user input as they type
//compair user input to coffe name
// filter through coffee names for matching chars in input

//buttonElement.addEventListener('click', {
//   handleEvent: function (event) {
//     handleEvtOutput.textContent = 'Element clicked through handleEvent property!';
//   }


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let display = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let submitButton2 = document.querySelector('#submit2');
let roastSelection = document.querySelector('#roast-selection');
let coffeeName = document.querySelector("#coffeeName");

display.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
document.getElementById("coffeeName").addEventListener('keyup', updateCoffeesNames);
submitButton2.addEventListener('click', addCoffee);