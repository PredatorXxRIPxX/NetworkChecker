let options=["fa-solid fa-wifi","fa-solid fa-wifi-slach"]

let networking=new XMLHttpRequest()

networking.open("GET","https://www.google.dz/",true)

networking.send()

let tx=document.getElementById("st")
let wifi=document.getElementById("icon")
networking.onreadystatechange=function(){
    console.log(networking)
    if(this.status==200&&this.readyState==4){
        tx.innerHTML='you are connected'
        wifi.setAttribute("class",`${options[0]}`)
    }else{
        tx.innerHTML='you are not connected'
        wifi.setAttribute("class",`${options[1]}`)
    }
}