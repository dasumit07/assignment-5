function getelementByid(id) {
    return document.getElementById(id);
}
function getelementByClass(classname) {
    return document.getElementsByClassName(classname);
}


// heart icon click event handler here

const heartIcons = getelementByClass("heart-icon");

for(let heartIcon of heartIcons){
    heartIcon.addEventListener("click", function(){
        const heartIconCount =getelementByid("heart-icon-count").innerText;
        let currentCount = Number(heartIconCount) + 1;
        getelementByid("heart-icon-count").innerText = currentCount;
    })
}

// call button click event handler here
  
const callButtons = getelementByClass("call-btn");
for(let callButton of callButtons){
    callButton.addEventListener("click", function(){

        const cardTitle = callButton.parentNode.parentNode.children[0].innerText;
        const cardPhone = callButton.parentNode.parentNode.children[2].children[0].innerText;
const availableCoin = Number(getelementByid("total-coin").innerText);
const date = new Date().toLocaleTimeString(undefined, {hour12: true});



if(availableCoin >= 20){

alert(`📞 Calling ${cardTitle} ${cardPhone}...`);

 let currentCoin = availableCoin - 20;
getelementByid("total-coin").innerText = currentCoin;


const cardContainer = getelementByid("card-container");

const newCard = document.createElement("div");

newCard.innerHTML = `
<div class="md:w-[220px] md:h-[90px] bg-gray-100 rounded-lg ml-2 flex justify-between items-center">
                  <div >
                    <h1 class="font-semibold text-sm ml-3">${cardTitle}</h1>
                    <p class="text-gray-500 ml-3">${cardPhone}</p>
                  </div>
                  <p class="text-sm mr-3">${date}</p>
                </div>`
cardContainer.appendChild(newCard);

}else{
    alert("😔 sorry! you have no enough coin to make a call. please buy more coin.");
}
  })
}

// clear button click event handler here

getelementByid("clear-btn").addEventListener("click", function(){
    getelementByid("card-container").innerHTML = " ";
})