let inp = document.querySelector('.inp')
let btn = document.querySelector('.btn')
let list = document.querySelector('.list')
let kir = document.querySelector('.kir')

let arr =[]
btn.addEventListener('click', ()=>{
    arr.push(inp.value)
    let win = window.localStorage.setItem('sintaktik', arr)
    let newLI = document.createElement('h1')
    newLI.textContent =  newLI.textContent + window.localStorage.getItem('sintaktik')
    newLI.classList.add('newli')
    list.appendChild(newLI) 
})

let a = document.createElement('h1')
a.textContent = a.textContent + window.localStorage.getItem('sintaktik')
a.classList.add('newli')
list.appendChild(a)

    



