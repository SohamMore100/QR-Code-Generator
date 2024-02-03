const qrinput = document.querySelector('qr-input')
const qrimg = document.querySelector('qr-img')
const qrbutton = document.querySelector('qr-button')

// remove this for Github
// console.log(qrbutton,qrimg,qrinput)

qrbutton.addEventListener('click',()=>{
    const inputValue = qrinput.value
    console.log(inputValue)

    if (!inputValue) {
        alert('Please enter a valid URL');
        return;
    } else {
        qrimg.src = '';
        qrimg.alt = '';
    }
})