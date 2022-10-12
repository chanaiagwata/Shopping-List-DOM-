ul = document.querySelector("ul");

function add(){
    let val = document.querySelector('input').value;
    console.log(val)
    const list = document.createElement('li');
    list.textContent = val;
    ul.appendChild(list);

};
