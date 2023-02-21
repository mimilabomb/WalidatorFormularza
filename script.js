const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');
const popup = document.querySelector('.popup');


const showError = (input, msg) =>{

}

//argument INPUT z funkcji "checkForm" przechowuje tablice z naszymi inputami
//argument EL odnosi się do każdej zmiennej, którą umieściliśmy w tablicy
const checkForm=input=>{
    input.forEach(el =>{
        if(el.value===""){
            showError()
        }else{
            console.log('ok');
        }
    })
    
}
sendBtn.addEventListener('click', e=>{
    e.preventDefault();
    checkForm([username,password,password2,email])
})

clearBtn.addEventListener('click', e=>{
    e.preventDefault();

    [username,password,password2,email].forEach(el=>{
        el.value='';
    })

})