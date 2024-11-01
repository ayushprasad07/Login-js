let i = document.querySelector(".password i");

let pass = document.querySelector("#pass");

i.addEventListener('click',()=>{
    if(pass.getAttribute("type")=="password"){
        pass.type="text";
        i.classList.remove("fa-eye");
        i.classList.add("fa-eye-slash");
    }else{
        pass.type="password";
        i.classList.remove("fa-eye-slash");
        i.classList.add("fa-eye");
    }
})