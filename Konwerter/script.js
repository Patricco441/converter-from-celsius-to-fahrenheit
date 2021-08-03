const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')

const one = document.querySelector('.one')
const two = document.querySelector('.two')
//°C, °F
let fahr
let celc

const swap = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F'
        two.textContent = '°C'
        result.textContent=''
    } else {
        one.textContent = '°C'
        two.textContent = '°F'
        result.textContent=''
    }
}



const fahrtocelc = () => {
    fahr = converter.value * 1.8 + 32
    result.textContent = `${converter.value}°C to ${fahr.toFixed(1)}°F`
    converter.value = ''
}

const celctofahr = () => {
    celc = (converter.value - 32) / 1.8
    result.textContent = `${converter.value}°F to ${celc.toFixed(1)}°C`
}
const conversion = () => {
    if (converter.value !== '') {
        if (one.textContent === '°C') {
            fahrtocelc()
        } else {
            celctofahr()
        }
    } else {
        result.textContent = "Musisz podać jakąś wartość "
    }
}
const reset=()=>{
    converter.value=""
    result.textContent=""
}


changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click',reset)