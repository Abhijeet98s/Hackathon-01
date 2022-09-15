const inputMinutes = document.getElementById("inputMinutes")
const inputSeconds = document.getElementById("inputSeconds")

const setPomodoro =  document.getElementById("setPomodoro")

setPomodoro.addEventListener("click", ()=>{
    const Minutes = inputMinutes.value
    const Seconds = inputSeconds.value
    // const inputSeconds = inputTime.slice(3, 6)
    console.log(`minutes => ${Minutes}`)
    console.log(`seconds => ${Seconds}`)
})