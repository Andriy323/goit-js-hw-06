const refs = {
    myStyle: document.querySelector('style'),
    myInput: document.querySelector('#validation-input'),
}
refs.myInput.addEventListener('blur', onInputBlur)
function onInputBlur (e){
    const inputEl = e.currentTarget
    const inputLength = Number(inputEl.dataset.length)
    if(inputEl.value.length === inputLength){
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
    }else{
        
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    }
}