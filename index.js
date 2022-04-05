// Variables
let tasksValues ={
    "Wash Car": 15,
    "Mow Law": 20,
    "Pull Weeds": 30
}

const tasksDiv = document.getElementById("tasks-div")
const bodyEl = document.getElementById("body-el")
const totalAmountEl = document.getElementById("totalAmount-el")
const sendInvoiceBtn = document.getElementById("sendinvoice-btn")


// Object that have all the tasks

function renderTableBody(object){
    let bodyString = ""
    for(let i in object){
        bodyString +=
        `<tr>
            <td column-1>${i}</td>
            <td class="column-2">$${object[i]}</td>
        </tr>
        `
    }
    bodyEl.innerHTML = bodyString
}

renderTableBody(tasksValues)
// Tasks variables
const task1 = document.getElementById('task-1')
const task2 = document.getElementById('task-2')
const task3 = document.getElementById('task-3')

task1.addEventListener('click', function(){
    tasksValues["Wash Car"] += tasksValues["Wash Car"]
    renderTableBody(tasksValues)
    totalAmount(tasksValues)
})
task2.addEventListener('click', function(){
    tasksValues["Mow Law"] += tasksValues["Mow Law"]
    renderTableBody(tasksValues)
    totalAmount(tasksValues)
})
task3.addEventListener('click', function(){
    tasksValues["Pull Weeds"] += tasksValues["Pull Weeds"]
    renderTableBody(tasksValues)
    totalAmount(tasksValues)

})
// task2.addEventListener('click', tasksValues["Mow Law"]++)
// task3.addEventListener('click', tasksValues["Pull Weeds"]++)


sendInvoiceBtn.addEventListener("click", function(){
    sendInvoiceBtn.textContent = "INVOICE SENDED!"
    sendInvoiceBtn.style.left = "34%"
    
})

// Returns the total amount
function totalAmount(obj){
    let newArray = []
    for(let i in obj){
        newArray.push(obj[i])
    }
    let total = newArray.reduce((total, amount) => total + amount)
    totalAmountEl.textContent = `$${total}`
}
totalAmount(tasksValues)
// totalAmountEl.textContent = `$${totalAmount(tasksValues)}`

