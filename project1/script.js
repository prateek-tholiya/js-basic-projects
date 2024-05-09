var istatus = document.querySelector("h5")

var addfriend = document.querySelector("#add")

// var remove = document.querySelector("#remove")

var check = 0

addfriend.addEventListener("click",function(){
    if(check == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    addfriend.style.backgroundColor = "grey"
    addfriend.innerHTML = "Remove Friend"
    
    check = 1
    }
    else{
    
    istatus.innerHTML = "Stranger"
    istatus.style.color = "brown"
    addfriend.style.backgroundColor =  "rgb(248, 143, 204)"
    addfriend.innerHTML = "Add Friend"
    
    check = 0
    }


})

// remove.addEventListener("click",function(){     // this code is for two different button for remove and add friend but we want to make only one button for both
//     istatus.innerHTML = "stranger"
//     istatus.style.color = "brown"
// })