window.alert('1')
alert('1')

console.dir(heading.id)
console.dir(heading.textContent)

// window.confirm('What is your name')
const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello')

const heading2 = document.querySelector('h2')// always 1 item (first changed)

// console.dir(heading2)

// const heading3 = heading2.nextElementSibling
const h2list = document.querySelectorAll('h2')
// console.log(h2list);
const heading3 = h2list[h2list.length - 1]
// console.log(heading3)

setTimeout(() => {
    addStyleTo(heading, 'JavaScript')
}, 1500);

const link = heading2.querySelector('a');

link.addEventListener('click', (event) =>{
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')
    window.location = url
})

setTimeout(() => {
    addStyleTo(link, 'Practice!', 'blue', '2rem')
}, 3000);

setTimeout(() => {
    addStyleTo(heading3, 'Everything will work out', 'yellow' );
}, 4500);

function addStyleTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    // falsy: '', underfiend, null, 0, false
    if(fontSize){
        node.style.fontSize = fontSize;
    }
}

heading.onclick = () => {
   if(heading.style.color === 'red'){
       heading.style.color = '#000'
       heading.style.backgroundColor = '#fff'
   }else{
    heading.style.color = 'red'
    heading.style.backgroundColor = '#000' 
   }
}

heading3.addEventListener('click', () =>{
    if(heading3.style.color === 'yellow'){
        heading3.style.color = '#000';
        heading3.style.backgroundColor = '#fff';
    }else{
     heading3.style.color = 'yellow';
     heading3.style.backgroundColor = '#000'; 
    }
})