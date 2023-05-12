const button = document.getElementById('btn') ;
const pw = document.getElementById('pw') ;
const repeatePw = document.getElementById('RepeatePW') ;
const error_holder = document.getElementById('error') ;

button.addEventListener ( 'click' , () => {
    verifyRepeatedPW() ;
}) 

const verifyRepeatedPW = () =>  {
    if ( pw.value != repeatePw.value ) {
        error_holder.innerText = 'Confirmation incorrect ' ;
        repeatePw.value = '' ;
    }
    else {
        error_holder.innerText = '' ;
    }
}