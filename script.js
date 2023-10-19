let slide = document.querySelectorAll(".reviewCard")
let login = document.querySelector("#login")
let loginbtn = document.querySelector("#loginbtn")
let card = document.querySelectorAll(".card")
let count = 0


slide.forEach(function(slide, index){
slide.style.left=`${index * 100}%`

})


function myfun(){
slide.forEach(function(curVal){
   curVal.style.transform=`translatex(-${count * 100}%)` 
})

}

setInterval(function(){
count++;
if(count == slide.length){
    count=0;
}
myfun();
},2000)



login.addEventListener("click", function(){
document.querySelector(".loginpage").classList.toggle('active')

})


loginbtn.addEventListener("click", function(){
let email = document.getElementById('email')
let pass = document.getElementById('pass')

if (email.value == ""  &&  pass.value == "") {
    alert("Please inter Detials")
} else {
    alert("Thanks for Login")
}


})


card.forEach(function(card){
card.addEventListener('click', function(){

    window.open("https://www.airbnb.co.in/a/discover/?account_id=31003615&campaign_id=303117718&ad_id=80951624440020&ad_group_id=1295224714906336&keyword_id=kwd-80951555865320:loc-90&device=c&c=.pi2.pk303117718_1295224714906336&ghost=true&msclkid=5ecea46967d11065d13ec1586836981c&utm_source=bing&utm_medium=cpc&utm_campaign=IND%3ADTM%3ASRC%3ABRD%2BAirbnb%5BEXACT%5D&utm_term=airbnb&utm_content=Airbnb%3A%2BExact", "_blank")
})



})





