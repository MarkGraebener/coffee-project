"use strict"
//for each loop to find selected input
function renderCoffee(coffee) {
    let html = '<div class="col-5 my-3">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<div class="row ">'
    html += '<h3 class="col-md-7">' + coffee.name + '</h3>';
    html += '<p class="col-md-3  text-muted ">' + coffee.roast + '</p>';
    html += '</div>'
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
//displays selected roast from dropdown from first form
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    // console.log(selectedRoast)
    let filteredCoffees = [];
    // console.log(filteredCoffees)
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
            display.innerHTML = renderCoffees(filteredCoffees);
        }else if (selectedRoast === "All"){
            display.innerHTML = renderCoffees(coffees);

        }
    });

}
//displays searched coffees in first form
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
//adds coffee and roast to coffees obj. and displays new obj. coffees
function addCoffee(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let newCoffee = document.getElementById("addCoffee").value;
    let newRoast = document.getElementById("roastSelector2").value;
    // coffees.push(`name: ${newCoffee} roast: ${newRoast}`)
    let newCoffeeObj ={
        id: coffees.length + 1,
        name: newCoffee,
        roast: newRoast,
    }
    coffees.push(newCoffeeObj)
    // Object.assign(coffees, {key3: "value3",name: newCoffee, roast: newRoast,});
    console.log(coffees);
    // console.log(newCoffeeObj);
    console.log(newCoffee);
    display.innerHTML = renderCoffees(coffees);

}
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
//data base of coffees
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
// sets vars from selected id's
let display = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let submitButton2 = document.querySelector('#submit2');
let roastSelection = document.querySelector('#roast-selection');
let coffeeName = document.querySelector("#coffeeName");

display.innerHTML = renderCoffees(coffees);
// eventlisteners section
submitButton.addEventListener('click', updateCoffees);
document.getElementById("coffeeName").addEventListener('keyup', updateCoffeesNames);
submitButton2.addEventListener('click', addCoffee);

//buttonElement.addEventListener('click', {
//   handleEvent: function (event) {
//     handleEvtOutput.textContent = 'Element clicked through handleEvent property!';
//   }