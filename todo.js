const capture = document.querySelector('#write');
const addNewtodo = document.querySelector('#newTodo')
const newList = document.querySelector('#addNew')
const deleteTodo = document.querySelector('#delete')
const filtertodo = document.querySelector('.state')

function reset(){
    capture.value = null
}

addNewtodo.addEventListener('click', () =>{
    let array = capture.value
    const arr = []
    if(array === ''){
        alert("Todo cannot be empty")
    }else{
        arr.push(array)
        reset()
        addNewElement(arr)
    }
})
     
function addNewElement(ar){
    const newTodo = document.createElement('div')
    newTodo.innerText = ar
    newTodo.classList.add('NewDiv')
    newList.appendChild(newTodo)
    const btnDiv = document.createElement('div')
    newTodo.appendChild(btnDiv)
    btnDiv.classList.add('btnDivs')

    const checkBtn = document.createElement('button')
        checkBtn.innerText = 'C'
        checkBtn.classList.add('checkBtn')
        btnDiv.appendChild(checkBtn)
        checkBtn.addEventListener('click', ()=>{
            newTodo.classList.toggle('scratch')
        })
    const delButton = document.createElement('button')
        delButton.innerText = 'D'
        delButton.classList.add('delBtn')
        btnDiv.appendChild(delButton)
        delButton.addEventListener('click', () =>{
            newTodo.remove()
        })
}

