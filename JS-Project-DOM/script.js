const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
    'Elon Musk',
    'Larry Page',
    'Sergy Brin',
    'Jeff Bezos',
    'Mark Zuckerberg',
    'Larry Ellison',
    'Bernaldo Arnault & family',
    'Jensen Huang',
    'Warren Buffett',
    'Rob Walton & family'
];

const listItems = [];
let dragStartIndex;

createList();

function createList()
{
    [...richestPeople].forEach((person, index)=>{
        const listItem = document.createElement("li");
        listItem.setAttribute('data-index', index);
        listItem.innerHTML= `
        <span class="numnber">${index + 1}</span>
        <div class="dragebble" draggable="true">
        <p class="person-name">${person}</p> <i class="fa-solid fa-grip-lines"></i>
        </div>
        `;
    })
}