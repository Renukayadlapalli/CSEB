function loadjson(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}
loadjson("data.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
    display(data.cards)
})
var deck=document.querySelector(".card-deck")
console.log(deck)

function display(mb){
    var deck=document.querySelector(".card-deck")
console.log(deck)

for (var i in mb){
var caddiv=document.createElement("div")
caddiv.classList.add("card")
var cadimg=document.createElement("img")
cadimg.appendChild(cadimg)
deck.appendChild(caddiv)

var cname=document.createElement("h2")
cname.textContent=mb[i].name;
caddiv.appendChild(cname)

var rate=document.createElement("h3")
rate.textContent=mb[i].rate;
caddiv.appendChild(rate)

var offer=document.createElement("h3")
offer.textContent="off/-"+mb[i].offer;
caddiv.appendChild(offer)



}
}
