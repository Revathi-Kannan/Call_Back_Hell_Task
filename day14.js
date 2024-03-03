document.addEventListener ('DOMContentLoaded', function(){

    var countdownelement = document.getElementById("Countdown")
    var startbutton = document.getElementById("Start")

    startbutton.addEventListener('click', function(){
    setTimeout(() =>{
        countdownelement.textContent ='10'
        setTimeout(() =>{
            countdownelement.textContent = '9'
            setTimeout(() =>{
                countdownelement.textContent = '8'
                setTimeout(() =>{
                    countdownelement.textContent = '7'
                    setTimeout(() =>{
                        countdownelement.textContent = '6'
                        setTimeout(() =>{
                            countdownelement.textContent = '5'
                            setTimeout(() =>{
                                countdownelement.textContent = '4'
                                setTimeout(() =>{
                                    countdownelement.textContent = '3'
                                    setTimeout(() =>{
                                        countdownelement.textContent = '2'
                                        setTimeout(() =>{
                                            countdownelement.textContent = '1'
                                            setTimeout(() =>{
                                                countdownelement.textContent = '0'

                                                var messageelement = document.createElement('div')
                                                messageelement.textContent = "Happy Independence day"
                                                messageelement.classList.add('message')
                                                countdownelement.parentNode.appendChild(messageelement)
                                                
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
    
    

    })




})