//Anshul Kumar - Module 7 assignment - Comp 690 Spring 2024, SDCCE

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById("addForm")
let empTable = document.getElementById("employees")

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
// let empCounter = document.getElementById("employees").rows.length-1;
let empCounter = 0
document.getElementById('empCount').innerText = `(${empCounter})`


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let empID = document.getElementById('id').value
    let empName = document.getElementById('name').value
    let empExt = document.getElementById('extension').value
    let empEmail = document.getElementById('email').value
    let empDept = document.getElementById('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTable.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell()
    let cellName = row.insertCell()
    let cellExt = row.insertCell()
    let cellEmail = row.insertCell()
    let cellDept = row.insertCell()
    let cellDelete = row.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textID = document.createTextNode(empID)
    let textName = document.createTextNode(empName)
    let textExt = document.createTextNode(empExt)
    let textEmail = document.createTextNode(empEmail)
    let textDept = document.createTextNode(empDept)

    cellID.appendChild(textID)
    cellName.appendChild(textName)
    cellExt.appendChild(textExt)
    cellEmail.appendChild(textEmail)
    cellDept.appendChild(textDept)

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    let textDelete = document.createTextNode('Remove')
    deleteBtn.appendChild(textDelete)
    cellDelete.appendChild(deleteBtn)


    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    let btnID = document.getElementById('id')
    btnID.focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCounter++
    document.getElementById('empCount').innerText = `(${empCounter})`
})

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CHECK IF THE REMOVE BUTTON WAS CLICKED
    if (e.target.innerHTML==="Remove") {
        // DISPLAY CONFIRMATION OF THE DELETE TO THE USER
        if (confirm('Are you sure you want to remove this employee?')) {
            // REMOVE THE SELECTED EMPLOYEE
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex)
            // DECREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
            empCounter--
            document.getElementById('empCount').innerText = `(${empCounter})`
        }
    }
})
