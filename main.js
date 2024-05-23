let id = document.querySelector('.inp_id')
let name = document.querySelector('.inp_name')
let btn = document.querySelector('.btn_add')
let wrapper = document.querySelector('.wrapper')

let arr = JSON.parse(localStorage.getItem('users')) || [];

let ReadFunction = () => {
    wrapper.innerHTML = '';
    arr.map((v) => {
        let div = document.createElement('div');
        div.innerHTML = `<p>${v.id}</p> <p>${v.userName}</p>`
        wrapper.appendChild(div);
    });
};

ReadFunction();
wdawd
let AddFunction = () => {
    let obj = {
        id: id.value,
        userName: name.value
    };

    arr.push(obj);
    localStorage.setItem('users', JSON.stringify(arr));
    ReadFunction();
    };

    btn.addEventListener('click', () =>{
        AddFunction();
    });