function logIn(){




    //*******************************************************************

        console.log("calling login")
        let email=document.getElementById("email")
        let password=document.getElementById("password")
        console.log(email.value)
        console.log(password.value)
        
     let register  = localStorage.getItem("noncsr")
     console.log(register)
     console.log(register.email)
     // JSON.parse  is useed to converte string to object
    let registerObject =JSON.parse(register)
    console.log(registerObject)
    console.log(registerObject.email)
    console.log(registerObject.password)

    if(email.value==registerObject.email && password.value==registerObject.password)
    {

      
                let message =document.getElementById("LoginMassage")
                message.innerHTML ="LogIn is Success"
                message.style.color ='green'
                //window.location.href="https://facebook.com"

    } 
    else
    {

        let message =document.getElementById("LoginMassage")
                message.innerHTML =" Incorrect Email Or Password  "
                message.style.color ='Red'
                // window.location.href="C:/Users/asush/Desktop/mini project/JobFrom.html"
                



    }   
    

    }

    function dispalyDateonclick(){
        let date =new Date()
        console.log(date)
        console.log(date.getTime())
        document.getElementById("displayDate").innerHTML=date
    }

    //chart.js