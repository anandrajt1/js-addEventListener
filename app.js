button=document.getElementById('btn')

// button.addEventListener('click',showAlert)

// function showAlert(){
//     alert('hello')
// }

// button.addEventListener('mouseover',showAlert)

// function showAlert(){
//     alert('hello')
// }

// OR DIRECTLLY WRITE LIKE THIS

// button.addEventListener("mouseover",function(){
//     alert('hello')
// })




const h1=document.getElementById('text')

h1.addEventListener("mouseover",function(){
    h1.classList.add('green')
    h1.classList.remove('red')
    h1.innerText="its green now"
})


h1.addEventListener('mouseout',function(){
    h1.classList.add('red')
    h1.classList.remove('green')
    h1.innerText="its red now"
})

// counter

const h2 =document.getElementById('no')
const add=document.getElementById('add')
const substract=document.getElementById('sub')

let number=0

add.addEventListener('click',function(){
    number++
    h2.innerText=number

})

substract.addEventListener("click",function(){
    number--
    h2.innerText=number
})

const btn=document.getElementById('btn')
const list=document.getElementById('list')

btn.addEventListener('click',function(){
    const li=document.createElement('li')
    li.innerHTML="item"
    list.appendChild(li)
})

const rmv=document.getElementById('remove')

rmv.addEventListener('click',function(){
    list.removeChild(list.lastElementChild)
})