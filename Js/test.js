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

  catgoryTitle.innerHTML=catgoryname

  ul.id=catgoryname

  catgoryElem.className="mt-1 text-center bg-catgory-t1 rounded-3xl "
  
 
  catgoryElem.insertAdjacentElement("afterbegin",ul)
  catgoryElem.insertAdjacentText('afterbegin',`${catgoryname}`)
  catgoryElem.insertAdjacentHTML("afterbegin",`<button id="dropdownBtn" onclick="hideCatgoryItem(event)" class="float-right -translate-x-3">**</button>`)
  catgoriesDivElem.insertAdjacentElement("beforeend",catgoryElem)
}
//////////

function selectionsCatgory(e){

  if(e.target.tagName=="MENU"){
   // console.log(e.target.childNodes[0].id);
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
  ul.insertAdjacentElement("afterend",li)


}


let dropdownBtn=document.getElementById("dropdownBtn")
function hideCatgoryItem(e){

  let ulid=e.target.parentElement.childNodes

 for (const iterator of ulid) {

  if(iterator.tagName =="LI" && !iterator.classList.contains("hidden") ){
    iterator.classList.add("hidden")
  }else{
    if(iterator.tagName=="LI"){
      iterator.classList.remove("hidden")
    }
  }
   // console.log(iterator);
   
    
  }
 


}
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