////Add and make Catgory part (variable and function)
let catgoriesDivElem=document.querySelector("#catgories")

let addcatgoryElem=document.getElementById("addcatgoryIcon")

let input=document.querySelector("input")

let addLabel=document.querySelector("label")

function newCatgory(){
  let catgoryname=prompt("please enter the name of the catgory:",)
  let catgoryElem=document.createElement("menu")
  let catgoryTitle=document.createElement("span")
  let ul= document.createElement('ul')
  let dorpdownIcon=document.createElement("div")
  catgoryTitle.innerHTML=catgoryname

  ul.id=catgoryname

  catgoryElem.className="mt-1 text-center bg-catgory-t1 rounded-3xl "

  
  catgoryElem.insertAdjacentElement("afterbegin",ul)
  catgoryElem.insertAdjacentText('afterbegin',`${catgoryname}`)
  catgoryElem.insertAdjacentHTML("afterbegin",`<div id="dropdownBtn" onclick="hideCatgoryItem(event)" class="mt-px float-right -translate-x-3"><svg id="svg${catgoryname}"  class="svg-icon transition-all" style="width: 1.35em; height: 1.35em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M0 511.976727C0 229.678545 229.725091 0 511.976727 0s511.976727 229.632 511.976727 511.976727c0 282.391273-229.725091 511.976727-511.976727 511.976727C229.725091 1024 0 794.368 0 511.976727M955.717818 511.976727c0-244.898909-199.121455-444.206545-443.741091-444.206545-244.666182 0-443.694545 199.307636-443.694545 444.206545 0 244.945455 199.121455 444.253091 443.694545 444.253091C756.642909 956.276364 955.717818 756.968727 955.717818 511.976727M230.027636 419.025455c0-6.562909 2.420364-13.102545 7.563636-18.059636 9.914182-9.960727 26.042182-9.960727 36.096 0l238.289455 236.916364L750.312727 401.105455c9.960727-9.914182 26.135273-9.914182 36.305455 0 9.914182 9.960727 9.914182 26.042182 0 35.956364L511.976727 709.678545 237.474909 436.922182C232.424727 432.104727 230.027636 425.588364 230.027636 419.025455"  /></svg></div>`)
 // catgoryElem.addEventListener("click",hideCatgoryItem)
  catgoriesDivElem.insertAdjacentElement("beforeend",catgoryElem)
}
//////////

function selectionsCatgory(e){

  if( e.target.tagName.toLowerCase() =="menu"){

let ulid=e.target.childNodes[2].id
localStorage.setItem("key",`${ulid}`)
console.log(e.target.childNodes[2].id);

  }
  
}

function deleteFromCatgory(e){

  e.target.remove()

  }
  function jobIsDone(e){
    e.target.classList.add("line-through")
  }
function addCatgoryWork(){
  let ulid=localStorage.getItem("key")

  let li=document.createElement("li")
  li.className="mt-1 text-center bg-li-t1 rounded-b-xl hover:translate-x-4 hover:scale-110 hover:capitalize transition-all"
  li.innerHTML=input.value
  li.addEventListener("click",jobIsDone)
  li.addEventListener("dblclick",deleteFromCatgory)
  console.log(ulid);
  let ul=document.getElementById(ulid)
  ul.insertAdjacentElement("afterbegin",li)


}


let dropdownBtn=document.getElementById("dropdownBtn")

function hideCatgoryItem(e){
  let id=localStorage.getItem("key")
  let svg=e.target
  let menu=e.target.parentElement.parentElement
//console.log(e.target,svg);
  

  let ul=menu.childNodes[2]

  
  if(ul.classList.contains("hidden")){
    ul.classList.remove("hidden")
    svg.classList.remove("rotate-180")
  }else{
    ul.classList.add("hidden")
    svg.classList.add("rotate-180")}
}
  
  
  //   else{svg.classList.remove("rotate-180")}

 //for (const iterator of ulid) {
 // if(iterator.tagName =="LI" && svg.classList.contains("rotate-180") ){
 //   iterator.classList.remove("hidden")
 //   console.log("am");
 // }else{
 //   if(iterator.tagName =="LI"){
 //     iterator.classList.remove("hidden")
 //     iterator.classList.add("hidden")
 //     svg.classList.remove("rotate-180")
 //   }
 //  
 // }}


// if(!svg.classList.contains("rotate-180")){}
///
addcatgoryElem.addEventListener("click",newCatgory)
addLabel.addEventListener("click",addCatgoryWork)
window.addEventListener("click",selectionsCatgory)





















///play and load song (variable ,data and function)
////calender and reminder
///point hint and motivaion part









/// variable
///music player
///catgory
const songs = [
    {
      path:
        "music/rain.mp3",
      displayName: "Html Padcast",
      artist: "Ozbi",
      cover:
        "https://images.genius.com/ee202c6f724ffd4cf61bd01a205eeb47.1000x1000x1.jpg",
    },
    {
      path: "music/Reza Pishro - Bache Bahala (320).mp3",
      displayName: "Bache Bahala",
      artist: "Reza Pishro",
      cover: "images/peakpx.jpg",
    },
    {
      path:
        "https://v.delgarm.com/mp3/828/2021/01/12/82089ea02b9842c4178b03c829247070.mp3",
      displayName: "rain",
      artist: "rain and tunder",
   
    },
    {
    path:
    "https://dl2.hitseda.com/Music/bm/021/khareji/rock/1/01.%20-%20Another%20World_766.mp3",
  displayName: "Another World",
  artist: "IDK?",
    
},{
path:
"https://dl2.hitseda.com/Music/ak/nab-selections/Aaron%20-%20U-Turn%20%28Lili%29.mp3",
displayName: "U-Turn( liliy)",
artist: "Aoran",

},
{ path:
  "https://dl2.hitseda.com/Music/ak/nab-selections/CHRIS%20DE%20BURGH%20-The%20Last%20Time%20I%20Cried.mp3",
  displayName: "The Last Time I Cried",
  artist: "CHRIS DE BURGH",},
  { path:
    "https://dl2.hitseda.com/Music/ak/nab-selections/Flori%20Mumajesi%20-%20Ku%20isha%20une.mp3",
    displayName: "Ku isha une",
    artist: "Flori Mumajesi & Argjentina",},
  ];
let RGBColor=[
    "#f5636399",
    "#f5946399",
    "#f5bd6399",
    "eef56399",
    "#9df563bb",
    "#63f585bb",
    "#63f5c0bb",
    "#63e6f5bb",
    "#63acf5bb",
    "#6379f5bb",
    "#8863f5bb",
    "#c763f5bb",
    "#f563e9bb",
    "#f5636abb"
]
function addToCatogory(){

}