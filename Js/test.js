
//window.addEventListener("load",()=>{
// // alert("for add a new note to every category plz select your category at the first step").toUpperCase()
// // alert("by single Double click on each item ,item will be deleted")
  alert(`Hi ,this is an under development Todolist project which add a few feather such as music palyer and calender part to be more user friendly and practical`)
  alert(`calendar and reminder part is incomplete yet, many feather such as tutorial ,reminder,daily motivaion,dragable remove will add as soon as posible`)
  alert(`And Welcome 🥳`)
//})
////////////////////  Add and make Catgory part (variable and function)
const body=document.querySelector("body")

let changethemeBtn=document.getElementById("themeBtn")
let hideItemBtn=document.getElementById("hideBtn")
let menuBtn=document.getElementById("hamburgerMenu")

const mainBody=document.querySelector("main")

let categoriesDivElem=document.querySelector("#catgories")

let addcategoryElem=document.getElementById("addcatgoryIcon")

let input=document.querySelector("input")

let form=document.querySelector("form")

let addNoteBtn=document.querySelector("#addlabel")

let removeLabel=document.querySelector("#removelabel")

let calendarContainer=document.getElementById("calander")

let musicContainer=document.getElementById("music-container")

let notelistContainer=document.getElementById("notelist-container")
/////////////////////chnage theme function and array

// array of some gif url
const animatedBackground=[
  "https://clipart-library.com/img/1922221.gif",
  "https://steamuserimages-a.akamaihd.net/ugc/930428699254557419/35CEA61D2D82605E50BBA4B88EDAFC3AF40AA808/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
  "",
  "https://steamuserimages-a.akamaihd.net/ugc/930428699254558429/F2D4AB337B68015813EF032DD188C985CAB50A72/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
  "https://wallpaperaccess.com/full/9142379.gif",
  "https://clipart-library.com/img/1922157.gif",
  "https://usagif.com/wp-content/uploads/rainy-21.gif",
  
]
///////create a function to change document background
let bgnumber=0

function changeTheme(){
  if (bgnumber<animatedBackground.length) {
    bgnumber++
  } else {
    bgnumber=0
  }
    body.style.cssText=` background-image:url(${animatedBackground[bgnumber]});`
    console.log(animatedBackground[bgnumber]);
  }
//// a add event listener on change theme btn to change doc background 
//   which use animated background array to set new url

changeTheme()

changethemeBtn.addEventListener("click",changeTheme)
/// a func to fade out and fade in all item in document wich use some key frame of css file
 hideItemBtn.addEventListener("click",hideAll)
function hideAll(){
 if (mainBody.style.opacity==="0") {
 
  calendarContainer.style.animation="backIn 2s"
  notelistContainer.style.animation="backIn 2s 200ms"
  musicContainer.style.animation="backIn 2s 400ms"

  mainBody.style.animation="show 2s linear"
  mainBody.style.opacity="100%"
} else {
  
  mainBody.style.animation="fade 2s linear"
  mainBody.style.opacity="0%"

  calendarContainer.style.animation="goIn 2s "
  notelistContainer.style.animation="goIn 2s 200ms"
  musicContainer.style.animation="goIn 2s 400ms"
}}
//// create a function fo first animation which show when user open the website
function openAppAnimation(){
  calendarContainer.style.animation="backIn 2s"
  notelistContainer.style.animation="backIn 2s 200ms"
  musicContainer.style.animation="backIn 2s 400ms"

  mainBody.style.animation="show 2s linear"
  mainBody.style.opacity="100%"
}
  openAppAnimation()
//// functions for set replacement svg to addBtn and dragItmem Btn
function setLabelIcon(e){
  let targetLabel=e.target
if(targetLabel.id=="addlabel"){addNoteBtn.innerHTML="";addNoteBtn.classList.remove("btn-danger");addNoteBtn.insertAdjacentHTML("afterbegin",'<?xml version="1.0" ?><svg class="mx-auto w-6 hover:scale-125" id="plus-add-more-detail" style="enable-background:new 0 0 15 15;" version="1.1" viewBox="0 0 15 15" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7.5,0C3.364,0,0,3.364,0,7.5S3.364,15,7.5,15S15,11.636,15,7.5S11.636,0,7.5,0z M7.5,14C3.916,14,1,11.084,1,7.5  S3.916,1,7.5,1S14,3.916,14,7.5S11.084,14,7.5,14z"/><polygon points="8,3.5 7,3.5 7,7 3.5,7 3.5,8 7,8 7,11.5 8,11.5 8,8 11.5,8 11.5,7 8,7 "/></svg>')}
if(targetLabel.id=="removelabel"){removeLabel.innerHTML="";removeLabel.classList.remove("btn-danger"); removeLabel.insertAdjacentHTML("afterbegin",`<svg class="w-7 mx-auto hover:scale-125" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path d="M322.62 254.95h-20.71v195.41h20.71V254.95zM111.53 2.02l105.89 36.64 3.26-9.41c.11-.32.23-.64.38-.94 3.69-9.25 13.28-14.76 23.08-13.35 2.56.37 4.75 1.19 7.16 2.03l60.97 21.1c.82.28 1.62.53 2.4.91 5.11 2.08 9.07 5.94 11.32 10.59 2.21 4.56 2.8 9.93 1.36 15.13-.17.61-.35 1.25-.55 1.83l-3.07 8.89 106.95 37.01c1.43.49 2.47.88 3.84 1.61 6.86 3.69 10.35 11.45 8.43 19.03-.21.82-.44 1.59-.72 2.38l-12.01 34.71c-1.67 4.85-6.97 7.41-11.81 5.74l-19.61-6.79a81.15 81.15 0 0 1 6.56 28.24c1.22.78 2.35 1.68 3.36 2.68 3.52 3.47 5.81 8.14 5.93 13.34.02 1.1-.11 2.21-.21 3.3L388.9 490.72c-.33 3.6-.93 6.8-2.75 10.18-3.52 6.55-10.03 11.1-18.14 11.1H117.06c-5.32 0-9.19-.47-13.67-3.53-5.28-3.61-8.74-9.7-9.35-16.46L68.66 215.9c-.08-.87-.16-1.82-.13-2.68.18-5.15 2.44-9.76 5.94-13.19 2.78-2.73 6.45-4.74 10.43-5.61-.19-.97-.3-1.96-.3-2.99v-66.36c0-8.26 6.76-15.02 15.02-15.02h78.92c8.25 0 15.01 6.76 15.01 15.02v22.45c12.39-10.17 28.24-16.28 45.52-16.28a71.52 71.52 0 0 1 32.54 7.79c4.18-3.5 8.71-6.6 13.54-9.22L79.45 58.63c-4.85-1.68-7.42-6.97-5.75-11.82l.07-.2 11.29-32.63C89.79.32 98.32-2.56 111.53 2.02zm143.75 252.93h-20.72v195.41h20.72V254.95zm-67.34 0h-20.71v195.41h20.71V254.95zm205.55-42.48H89.89c-1.99 0-2.94.34-2.75 2.45l25.11 273.2c.16 1.69.13 5.33 2.53 5.29h253.25c2.08 0 2.32-2.93 2.46-4.44l25.57-274.23c.16-1.77-.89-2.27-2.57-2.27zm-224.75-23.88h9.8v-52.32c0-5.98-4.9-10.87-10.88-10.87h-57.17c-5.98 0-10.87 4.89-10.87 10.87v52.32h69.12zm100.12 2.44H379.1c-2.52-15.25-11.22-28.4-23.44-36.82l-.15-.11-.23-.15-.38-.26-.38-.25-.02-.01-.37-.25-.39-.24-.26-.17-.13-.08-.4-.24-.39-.24-.11-.06-.29-.17-.4-.23-.36-.21-.04-.02-.4-.23-.41-.22-.41-.22-.41-.21-.41-.22-.06-.03-.35-.17-.42-.21-.32-.16-.09-.04-.42-.2-.43-.2-.16-.07-.26-.12-.43-.19-.42-.18-.01-.01-.42-.17-.71-.29-.16-.06-.84-.33-.02-.01-.12-.05-.32-.12-.44-.16-.4-.14-.04-.01-.45-.16-.44-.15-.24-.07-.21-.07-.45-.15-.45-.13-.06-.02-.39-.12-.45-.13-.35-.1-.11-.03-.45-.12-.46-.12-.18-.05-.28-.07-.46-.11-.46-.11h-.01l-.46-.1-.76-.17-.17-.03-.46-.09-.48-.09-.12-.03-.34-.06-.48-.08-.42-.07-.05-.01-.48-.07-.47-.07-.24-.04-.24-.03-.48-.06-.48-.05-.06-.01-.42-.05-.48-.05-.37-.03-.11-.01-.49-.04-.48-.04-.19-.01-.3-.02c-1.18-.08-2.37-.12-3.57-.12-27.51 0-50.44 19.73-55.12 46.67z"/></svg>`)}
}
function setLabelText(e){
  let targetLabel=e.target
if(targetLabel.id=="addlabel"){addNoteBtn.innerHTML="";addNoteBtn.classList.add("btn-danger");addNoteBtn.innerHTML="Add New Todo..." }
if(targetLabel.id=="removelabel"){removeLabel.innerHTML="";removeLabel.classList.add("btn-danger"); removeLabel.innerHTML="Drag Here"; }
}

function checkScreenWidth(){
  if(window.screen.width>680){
    addNoteBtn.addEventListener("mouseenter",setLabelIcon)
    removeLabel.addEventListener("mouseenter",setLabelIcon)
    addNoteBtn.addEventListener("mouseleave",setLabelText)
    removeLabel.addEventListener("mouseleave",setLabelText)
  }else{
    console.log(window.screen.width);
    
  }}
  window.addEventListener("load",checkScreenWidth)

// create and add new category
let categoryModalInputElem=document.getElementById("category-modal-inputElem")
let categoryModalSaveBtn=document.getElementById("category-modal-save-btn")

/// define a vaiable to save the categry modal value
let catgoryname
categoryModalInputElem.addEventListener("keyup",()=>{
   catgoryname=categoryModalInputElem.value
  
})
/////////a functio to create and add a note category as new item to the todolist
 function newCatgory(){
    console.log(catgoryname);
    if(catgoryname){
    
      let categoryElem=document.createElement("menu")
      let categoryTitle=document.createElement("span")
      let ul= document.createElement('ul')
      let randomNumber=Math.floor(Math.random()*100)
      let dropDownSvg=`<svg onclick="hideCatgoryItemTrigerdIcon(event)" id="svg${catgoryname}"  class="svg-icon float-right  transition-all" style="width: 1.35em; height: 1.35em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M0 511.976727C0 229.678545 229.725091 0 511.976727 0s511.976727 229.632 511.976727 511.976727c0 282.391273-229.725091 511.976727-511.976727 511.976727C229.725091 1024 0 794.368 0 511.976727M955.717818 511.976727c0-244.898909-199.121455-444.206545-443.741091-444.206545-244.666182 0-443.694545 199.307636-443.694545 444.206545 0 244.945455 199.121455 444.253091 443.694545 444.253091C756.642909 956.276364 955.717818 756.968727 955.717818 511.976727M230.027636 419.025455c0-6.562909 2.420364-13.102545 7.563636-18.059636 9.914182-9.960727 26.042182-9.960727 36.096 0l238.289455 236.916364L750.312727 401.105455c9.960727-9.914182 26.135273-9.914182 36.305455 0 9.914182 9.960727 9.914182 26.042182 0 35.956364L511.976727 709.678545 237.474909 436.922182C232.424727 432.104727 230.027636 425.588364 230.027636 419.025455"  /></svg>`
    
      categoryTitle.innerHTML=catgoryname
      ul.id=JSON.stringify(catgoryname+randomNumber)
      categoryElem.className="mt-1 text-center bg-catgory-t1 rounded-3xl "
    
    
      categoryElem.insertAdjacentElement("afterbegin",ul)
     // categoryElem.insertAdjacentText('afterbegin',`${catgoryname}`)
      categoryElem.insertAdjacentHTML("afterbegin",`<div id="dropdownBtn" onclick="hideCatgoryItem(event)" class="text-center bg-state-800 w-full mt-px mx-auto -translate-x-3">${catgoryname} ${dropDownSvg}</div>`)
      categoriesDivElem.insertAdjacentElement("beforeend",categoryElem)
      localStorage.setItem("key",`${ul.id}`)
      categoryModalInputElem.value=""
    }else{
      alert("pealse enter category name")
    }
}
///////modal category code
let modalContianer=document.getElementById("categorymodalbackground")
modalContianer.style.cssText=`
background-image: url('https://img.freepik.com/free-vector/hand-painted-watercolor-tropical-leaves-background_52683-61842.jpg?w=740&t=st=1703829926~exp=1703830526~hmac=2d4c904168c12148fb243aab5616b596f2deb22361359aed5c88c1bcd140f02d');
background-size: 650px;
filter: blur(0.2px);
background-position: center;
background-repeat:no-repeat;
`
////////// category selection to add note
function selectionsCatgory(e){

  if( e.target.parentElement.tagName.toLowerCase() =="menu"){
   let selectedCategory=e.target.parentElement
         let categoryID=selectedCategory.childNodes[1].id
         localStorage.setItem("key",`${categoryID}`)
  }
}


/// take a line over of the note ,, job is done
  function jobIsDone(e){
   let target=e.target
   let noteList=e.target.parentElement
  if (target.classList.contains("line-through")) {
    e.target.classList.remove("line-through")
//// use for each callback to find the node which is selected 
//// remove the selected Node and add it again to the top of the note list
     noteList.childNodes.forEach((li)=>{
      if (li==target) {
        li.remove()
      noteList.insertAdjacentElement("afterbegin",li)
      }else{
        console.log("err");
      }
    })
  }else{
    e.target.classList.add("line-through")
//// use for each callback to find the node which is selected 
//// remove the selected Node and add it again to the end of the note list
    noteList.childNodes.forEach((li)=>{
      if (li==target) {
        li.remove()
      noteList.insertAdjacentElement("beforeend",li)
      }else{
        console.log("err");
      }
    })
  }
    
  }
// add note to each category which selected by user

function addCatgoryWork(){
  let notevalue=input.value
    if(notevalue){
      let categoryID=localStorage.getItem("key")
      let li=document.createElement("li")
      const deleteNoteSvg=`<?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" viewBox="0 0 109.484 122.88" enable-background="new 0 0 109.484 122.88" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"/></g></svg>`
      li.className="mt-1 text-center decoration-double decoration-stone-200 decoration-2 font-serif bg-li-t1 rounded-b-xl hover:opacity-80 hover:-translate-x-5 hover:scale-110 hover:capitalize transition-all"
      li.innerHTML=notevalue
//// insert a html Elem to create a recyclebin button
      li.insertAdjacentHTML("beforeend",`<button id="thickIcon" class="my-2 m-2 hover:scale-125 float-right" onclick="deleteFromCatgory(event)">
      ${deleteNoteSvg}</button>`)

      li.addEventListener("click",jobIsDone)
      
      console.log(categoryID);
      let ul=document.getElementById(categoryID)
     if(ul){
      ul.insertAdjacentElement("afterbegin",li)
      input.value=""
     }else{
      alert(`plz create your catgory first 
      by clik on Add New Category part`)
     }
      
    }else{
      alert(`Eror 
      plz enter your note or select your category `)}
}
/// delete the note from category
function deleteFromCatgory(e){
  let liElem=e.target.parentElement.parentElement.parentElement.parentElement

  if(liElem.tagName.toLowerCase()=="li"){
   
    liElem.remove()
  }if(liElem.tagName.toLowerCase()=="menu"){
    liElem=e.target.parentElement.parentElement

    liElem.remove()
    
  }

  
}
  

// hide category item by click on the Icon
function hideCatgoryItem(e){
  let id=localStorage.getItem("key")
  let svg
 // console.log(e.target.tagName);
  let menu
  let ul
  if (e.target.tagName==="DIV") {
    menu=e.target.parentElement
    svg=e.target.childNodes[1]
    ul=menu.childNodes[1]
  if(ul.classList.contains("hidden")){
    ul.classList.remove("hidden")
    svg.classList.remove("rotate-180")
  }else{
    ul.classList.add("hidden")
    svg.classList.add("rotate-180")}
  }
  console.log(e.target.tagName.toLowerCase());
}
function hideCatgoryItemTrigerdIcon(e){
  if (e.target.tagName.toLowerCase()==="svg") {
    menu=e.target.parentElement.parentElement
    svg=e.target
    ul=menu.childNodes[1]
    if(ul.classList.contains("hidden")){
      ul.classList.remove("hidden")
      svg.classList.remove("rotate-180")
    }else{
      ul.classList.add("hidden")
      svg.classList.add("rotate-180")}
  }
  

}

/// set function to html element

//addcategoryElem.addEventListener("click",newCatgory)
categoryModalSaveBtn.addEventListener("click",newCatgory)
addNoteBtn.addEventListener("click",addCatgoryWork)
//addLabel
form.addEventListener("submit",function(event){
  event.preventDefault()  
  console.log("click");
   if (event.which == '13') {
    addCatgoryWork}
addCatgoryWork()
  })
window.addEventListener("click",selectionsCatgory)

////RGB Item Part
const RGBElem1=document.getElementById("RGBdiv1")
const RGBElem2=document.getElementById("RGBdiv2")
const RGBElem3=document.getElementById("RGBdiv3")

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

////set RGB color control
let index=0
setTimeout(() => {
    setInterval(()=>{
        changeColor(RGBElem1)
    },700)

}, 100);
setTimeout(() => {
    setInterval(()=>{
        changeColor(RGBElem2)
    },700)

}, 300);
setTimeout(() => {
    setInterval(()=>{
        changeColor(RGBElem3)
    },700)

}, 500);


function changeColor(item){
    item.style.backgroundColor=RGBColor[index]
index++
if(index>RGBColor.length){
    index=0
}}

//////////////// play and load song (variable ,data and function)
////////////// music playlist

let musiclist=document.getElementById("musiclist")
///// music fetch data Api
const apiUrl=`https://api.genius.com/web_pages/lookup?canonical_url=http://example.com`
const data= fetch(apiUrl).then(res=>{
  console.log(res.json());
  return res.json()
}).catch(()=>{
  console.log("eror");
})

const Pop=[
  {
    path:
      "music/rain.mp3",
    displayName: "Html Padcast",
    artist: "Ozbi",
    id:1,
    time:"06:32"
  },
  {
    path: "music/Reza Pishro - Bache Bahala (320).mp3",
    displayName: "Bache Bahala",
    artist: "Reza Pishro",
    id:2,
    time:"03:27"
  },
  {
    path:
      "https://v.delgarm.com/mp3/828/2021/01/12/82089ea02b9842c4178b03c829247070.mp3",
    displayName: "rain",
    artist: "rain and tunder",
    id:3,
    time:"06:32"
  },
  {
  path:
  "https://dl2.hitseda.com/Music/bm/021/khareji/rock/1/01.%20-%20Another%20World_766.mp3",
displayName: "Another World",
artist: "IDK?",
id:4,
time:"04:24"
},{
path:
"https://dl2.hitseda.com/Music/ak/nab-selections/Aaron%20-%20U-Turn%20%28Lili%29.mp3",
displayName: "U-Turn( liliy)",
artist: "Aoran",
id:5,
time:"03:24"
},
{ path:
"https://dl2.hitseda.com/Music/ak/nab-selections/CHRIS%20DE%20BURGH%20-The%20Last%20Time%20I%20Cried.mp3",
displayName: "The Last Time I Cried",
artist: "CHRIS DE BURGH",
id:6,
time:"05:34"
},
{ path:
  "https://dl2.hitseda.com/Music/ak/nab-selections/Flori%20Mumajesi%20-%20Ku%20isha%20une.mp3",
  displayName: "Ku isha une",
  artist: "Flori Mumajesi & Argjentina",
  id:7,
  time:"03:17"
}, 
 {path:
"https://v.delgarm.com/mp3/828/2021/01/12/82089ea02b9842c4178b03c829247070.mp3",
displayName: "rain",
artist: "rain and tunder",
id:8,
time:"06:32"
},
{
path:
"https://dl2.hitseda.com/Music/bm/021/khareji/rock/1/01.%20-%20Another%20World_766.mp3",
displayName: "Another World",
artist: "IDK?",
id:9,
time:"04:24"
},{
path:
"https://dl2.hitseda.com/Music/ak/nab-selections/Aaron%20-%20U-Turn%20%28Lili%29.mp3",
displayName: "U-Turn( liliy)",
artist: "Aoran",
id:10,
time:"03:50"
},
{ path:
"https://dl2.hitseda.com/Music/ak/nab-selections/CHRIS%20DE%20BURGH%20-The%20Last%20Time%20I%20Cried.mp3",
displayName: "The Last Time I Cried",
artist: "CHRIS DE BURGH",
id:11,
time:"05:34"
},

{ path:
"https://dl2.hitseda.com/Music/ak/nab-selections/Flori%20Mumajesi%20-%20Ku%20isha%20une.mp3",
displayName: "Ku isha une",
artist: "Flori Mumajesi & Argjentina",
id:12,
time:"03:17"
},


///////

{ path:"https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3",
displayName: "mandoline",
artist: "otnicka",
time:"03:20",
id:13
},
{ path:"https://dl2.hitseda.com/Music/ak/nab-selections/Ghostly%20Kisses%20-%20Roses.mp3",
displayName: "Roses",
artist: " Ghostly Kisses",
time:"03:28",
id:14
},
{ path:"https://dl2.hitseda.com/Music/ak/insta-music/Jah%20Khalib%20-%20Leyla.mp3",
displayName: "Leylal",
artist: "Jah Khalìb",
time:"04:06",
id:15
},
{ path:"https://dl2.hitseda.com/Music/ak/insta-music/JONY-Love-your-voice.mp3",
displayName: "Love your voice",
artist: "JOHNY",
time:"02:30",
id:16
},

{ path:"https://ts1.tarafdari.com/contents/user308486/content-sound/pink_floyd_-_wish_you_were_here.mp3",
displayName: "Wish uou were here",
artist: "Pink floyd",
time:"05:40",
id:17
},
{ path:"https://ts15.tarafdari.com/contents/user763128/content-sound/10_-_riders_on_the_storm.mp3",
displayName: "Rider on the storm",
artist: "The Doors",
time:"07:15",
id:18
},

];

const Rock=[

  {path:
  "music/rain.mp3",
displayName: "Html Padcast",
artist: "Ozbi",
id:1,
time:"06:32"
},

]

const House=[
  { path:"https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3",
  displayName: "mandoline",
  artist: "otnicka",
  time:"03:20",
  id:1
  },

]

/////// define a variable to create song playlist by type

let plaListName=Pop

/////define a variable to set evety a song playlist wich match with selec music tbutton
let songs = plaListName
const plaList=[Pop,Rock,House]


//// a function to create music playlist in music contianer part 
function createSongPlayList(){

  musiclist.innerHTML=""

  songs.forEach(object=>{

    musiclist.insertAdjacentHTML("beforeend",` <li id=${object.id} class="mt-1 w-full h-10 bg-orange-400  grid grid-cols-2 px-2 rounded-xl hover:scale-105 hover:-py-1">
              
    <div class="flex items-center">${object.time}</div>
    <div class="px-1">
       <h1 class=" font-serif text-sm overflow-hidden whitespace-nowrap">${object.displayName}</h1>
       <h4 class="float-right font-serif text-xs overflow-hidden whitespace-nowrap">${object.artist}</h4>
    </div>
    </li>`)
  })

}
createSongPlayList()
 //////////////variables  of music progress bar and audio

const currentTimeEl = document.getElementById("current-time");

const durationEl = document.getElementById("duration");

const progressContainer = document.getElementById("progress-container");

const progress = document.getElementById("progress");

const prevBtn = document.getElementById("prev");

const playBtn = document.getElementById("play");

const nextBtn = document.getElementById("next");
    
let audioBtn=document.getElementById("play")
let playingSvg=document.getElementById("playSvg")
let pauseSvg=document.getElementById("pauseSvg")
let audio=document.querySelector("audio")
let volumeBtn=document.getElementById("musicVolumeBtn")
let isPlaying=false

let songIndex=0;
let musiclistElem=document.getElementById("music-listElem")
//////////////// create a function for music Volume
const toast=document.getElementById("liveToast")
const toastHeader=document.getElementById("toast-header")
toastHeader.style.cssText=`
background-image: url('https://img.freepik.com/free-vector/hand-painted-watercolor-tropical-leaves-background_52683-61842.jpg?w=740&t=st=1703829926~exp=1703830526~hmac=2d4c904168c12148fb243aab5616b596f2deb22361359aed5c88c1bcd140f02d');
background-size: 350px;
filter: blur(0.2px);
background-position: center;
background-repeat:no-repeat;`
/// create a function to control volume taost by clicking on the volume btn
volumeBtn.addEventListener("click",function(){
  ///
toast.classList.contains("show")? toast.className="toast hide" : toast.className="toast show";
toast.style.opacity = 1
///// create a setInterval to fade out toast
const toastTimeOut= setTimeout(() => {
    const myInterval= setInterval(function() {
      if (toast.style.opacity > 0) {
        toast.style.opacity -= 0.01
      } else {
        //set hide class to the toast again
        toast.className="toast hide";
        /////clear setInterval
        clearInterval(myInterval)
        clearTimeout(toastTimeOut)
      }}, 19);
}, 7000);


})
/////create a function to control song volume with mouse wheel
volumeBtn.addEventListener("wheel",(event)=>{
////create a two condition to control the range of audio volume
audio.volume>0.01 && audio.volume <=0.99 ? audio.volume+=Math.round(event.deltaY*-0.01)*0.01 :console.log("volume");;
if(audio.volume<=0.01) audio.volume=0.02
if(audio.volume>=0.99) audio.volume=0.98
volumeBtn.childNodes[0].innerHTML=Math.floor((audio.volume)*100)

//////set a fade animation which show and hide volume number
volumeBtn.addEventListener("mouseenter",function(){

  volumeBtn.childNodes[0].classList.remove("animation-fade-out","hidden")
})
volumeBtn.addEventListener("mouseleave",function(){
  volumeBtn.childNodes[0].classList.add("animation-fade-out")
  setTimeout(() => {
    volumeBtn.childNodes[0].classList.add("hidden")
  }, 1100);
})

})
////music part repansive constrol
menuBtn.addEventListener("click",function(){
  if (musicContainer.classList.contains("max-sm:hidden")) {
    musicContainer.classList.remove("max-sm:hidden")
    notelistContainer.classList.add("hidden")

  } else {
    musicContainer.classList.add("max-sm:hidden")
    notelistContainer.classList.remove("hidden")

    function fadeIn(){
      musicContainer.style.opacity+=-0.1
    }
  }
})

const selectPlayListBox=document.getElementById("selectplaylistbox")
////////// create some variable for soundbox Icon
const rockIcon=`<img class="hidden w-12 mx-auto -translate-y-3 rotate-12 hover:scale-110" src="https://freesvg.org/img/rock-n-roll-hand.png" alt="Rock Icon"/>`
const popIcon=`<img class="hidden w-8 mx-auto mt-1 hover:scale-110" src="https://www.shareicon.net/data/128x128/2016/07/04/790994_multimedia_512x512.png" alt="Pop Icon"/>`
const rapIcon=`<img class="hidden w-12 mx-auto -translate-y-3 rotate-12 hover:scale-110" src="https://freesvg.org/img/microphone_in_fist.png" alt="Rap Icon"/>`
const houseIcon=`<img class="hidden w-12 mx-auto -translate-y-2 rotate-6 hover:scale-110" src="https://visualpharm.com/assets/224/International%20Music-595b40b65ba036ed117d4756.svg" alt="house music Icon"/>`
const classicIcon=`<img class="hidden w-8 mx-auto  rotate-6 hover:scale-125" src="https://visualpharm.com/assets/564/Classic%20Music-595b40b65ba036ed117d0f97.svg" alt="rockIcon"/>`
const chillIcon=`<img class="hidden w-12 mx-auto -translate-y-4 rotate-6 hover:scale-110" src="https://visualpharm.com/assets/101/Drum%20Set-595b40b85ba036ed117dd04e.svg" alt="chill Hop Icon"/>`

///// add html element of music part to dom
selectPlayListBox.insertAdjacentHTML("afterbegin",`
<div id="rockPlaylistIcon" class="m-auto w-10/12 h-3/6 bg-gradient-to-tr from-slate-50 to-indigo-900 bg-opacity-80 text-center rounded-xl"><div    id="Rock" class="w-full h-full m-auto rounded-xl hover:-rotate-6 hover:scale-95 shadow-transparent shadow-sm bg-cyan-600 hover:bg-opacity-30 bg-opacity-60 transition-all">Rock${rockIcon}</div></div>
<div id="PopPlaylistIcon" class="m-auto w-10/12 h-3/6 bg-gradient-to-tr from-slate-50 to-indigo-900 bg-opacity-80 text-center rounded-xl"><div     id="Pop" class="w-full h-full m-auto rounded-xl hover:-rotate-6 hover:scale-95 shadow-transparent shadow-sm bg-cyan-600 hover:bg-opacity-30 bg-opacity-60 transition-all">Pop${popIcon}</div></div>
<div id="rapPlaylistIcon" class="m-auto w-10/12 h-3/6 bg-gradient-to-tr from-slate-50 to-indigo-900 bg-opacity-80 text-center rounded-xl"><div     id="Rap" class="w-full h-full m-auto rounded-xl hover:-rotate-6 hover:scale-95 shadow-transparent shadow-sm bg-cyan-600 hover:bg-opacity-30 bg-opacity-60 transition-all">Rap${rapIcon}</div></div>
<div id="housePlaylistIcon" class="m-auto w-10/12 h-3/6 bg-gradient-to-tr from-slate-50 to-indigo-900 bg-opacity-80 text-center rounded-xl"><div   id="House" class="w-full h-full m-auto rounded-xl hover:-rotate-6 hover:scale-95 shadow-transparent shadow-sm bg-cyan-600 hover:bg-opacity-30 bg-opacity-60 transition-all">House${houseIcon}</div></div>
<div id="classicPlaylistIcon" class="m-auto w-10/12 h-3/6 bg-gradient-to-tr from-slate-50 to-indigo-900 bg-opacity-80 text-center rounded-xl"><div id="Classic" class="w-full h-full m-auto rounded-xl hover:-rotate-6 hover:scale-95 shadow-transparent shadow-sm bg-cyan-600 hover:bg-opacity-30 bg-opacity-60 transition-all">Classic${classicIcon}</div></div>
<div id="chillPlaylistIcon" class="m-auto w-10/12 h-3/6 bg-gradient-to-tr from-slate-50 to-indigo-900 bg-opacity-80 text-center rounded-xl"><div   id="Chill" class="w-full h-full m-auto rounded-xl hover:-rotate-6 hover:scale-95 shadow-transparent shadow-sm bg-cyan-600 hover:bg-opacity-30 bg-opacity-60 transition-all">Chill${chillIcon}</div></div>
`)
///// function
const rockPlaylistIcon=document.getElementById("rockPlaylistIcon")
const popPlaylistIcon=document.getElementById("PopPlaylistIcon")
const rapPlaylistIcon=document.getElementById("rapPlaylistIcon")
const housePlaylistIcon=document.getElementById("housePlaylistIcon")
const classicPlaylistIcon=document.getElementById("classicPlaylistIcon")
const chillPlaylistIcon=document.getElementById("chillPlaylistIcon")
/////hide and show the music list and playlist box

function hidemusiclist(event){
 
///create a two condition to redefine the playlist variable if its clicked on playlist buttons
  if(event.target.tagName.toLowerCase() === "div"){ 
    plaListName=event.target.id
    console.log(plaListName);
  }
  if(event.target.tagName.toLowerCase() === "img"){ 
    plaListName=event.target.parentElement.id
    console.log(plaListName);
  }  

 // plaList.forEach((muscitype)=>{
 //   console.log(muscitype);
 //   if(muscitype==plaListName){
 //     console.log("mathed");
 //     songs = plaListName
 //   }
 // })
//for (const musictype in plaList) {
//  if(musictype==plaListName){
//
//        console.log("mathed");
//        console.log(musictype);
//       songs = musictype
//      }
//  
//}
// //    for (let index = 0; index < plaList.length; index++) {
//       const element = plaList[index];
//       console.log(element);
// //   if(element==plaListName){
//       console.log("mathed");
//       songs = element
// //     }
//      
// //    }
  createSongPlayList()
  

//// create if and else to hide and show selectbox and music playlist when its clicked on select play list box
   if (selectPlayListBox.classList.contains("hidden")) {
 
     selectPlayListBox.classList.remove("hidden")
     musiclistElem.classList.add("hidden")
     backToMusicBoxBtn.classList.add("hidden")
 
   } else {
  
     selectPlayListBox.classList.add("hidden")
     musiclistElem.classList.remove("hidden")  
     backToMusicBoxBtn.classList.remove("hidden")
 
   }

  
}

///// set hide and show Element function to the musiclist and tthe olay list box
let backToMusicBoxBtn=document.getElementById("backToSelcetBoxBtn")

backToMusicBoxBtn.addEventListener("click",hidemusiclist)
selectPlayListBox.addEventListener("click",hidemusiclist)
///////////////create show icon function
function setIcon(event){
  let childElem=event.target.childNodes[0]
  childElem.childNodes[0].data=""

 childElem.childNodes[1].classList.remove("hidden")
}
///// create a function to show text in music play list box when mouse leave
function setText(event){
  let childElem=event.target.childNodes[0]
  childElem.childNodes[0].data=`${childElem.id}`

 childElem.childNodes[1].classList.add("hidden")
}
////////////////////set two setText() and SetIcon funcion to all  music playlist btn 
function setAddEventListener(){
selectPlayListBox.childNodes.forEach((child)=>{
  if (child.tagName=="DIV") {
    child.addEventListener("mouseenter",setIcon)
    child.addEventListener("mouseleave",setText)
  }
})
}
setAddEventListener()
////// music controller func
let audioOnPalyAnimation=``
function loadSong(song) {
    audio.src = song.path;
    musiclist.childNodes.forEach(child=>{
     if (child.tagName=="LI") {

      if (child.classList.contains("bg-opacity-40")) {  
            child.classList.remove("bg-opacity-40")
            }
     }
     let songOnPlay=document.getElementById(song.id)
     songOnPlay.classList.add("bg-opacity-40")
   
    })
  }
  
// Previous Song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    play();
  }
  
  // Next Song
  function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
    loadSong(songs[songIndex]);

    play();
  }
  /// a function to play audio and chnge play/pause icon
function play(){
    isPlaying=true
    audio.play()
    playingSvg.classList.add("hidden")
    pauseSvg.classList.remove("hidden")
    playBtn.setAttribute("title", "Pause");
}
////a function to pause audio and chnge play/pause icon
function pause(){
    isPlaying=false
    playingSvg.classList.remove("hidden")
    pauseSvg.classList.add("hidden")
    playBtn.setAttribute("title", "Play");

    audio.pause()
}
////////////////////////////////////function select song form play slit
function selectsongfromplaylist(e){
  let selectedElemId=e.target.parentElement.id

  songs.forEach(song=>{
    if (song.id==selectedElemId) {
      songIndex=song.id-1
      loadSong(song)
      play()
    }
  })

}
//// set selectSongfromPlaylist function to musiclist
musiclistElem.addEventListener("click",selectsongfromplaylist)
// On Load - Select First Song
loadSong(songs[songIndex]);
    // Set ProgressBar
    function setProgressBar(e) {
      const width = this.clientWidth;
      const clickX = e.offsetX;
      const duration = audio.duration;
      ///set audio time when user is clicking on audio durtion
      audio.currentTime = (clickX / width) * duration;
    }

    prevBtn.addEventListener("click", prevSong);
    nextBtn.addEventListener("click", nextSong);
    audio.addEventListener("timeupdate", updateProgressBar);
    progressContainer.addEventListener("click", setProgressBar);

    progress.style.backgroundColor="cadetblue"

//// set pause and play function to the playing btn
    audioBtn.addEventListener("click",function(){
      if(isPlaying){
          pause()
      }else{
          play()
      }
      })

    // ProgressBar
    function updateProgressBar(e) {
      if (isPlaying) {
        const duration = e.srcElement.duration;
        const currentTime = e.srcElement.currentTime;
        // 
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = progressPercent + "%";
        ///se fuction for playing next song when prev song is going to end
        if (progressPercent==100) {
         nextSong()
        }
        // 
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) {
          durationSeconds = "0" + durationSeconds;
        }
        //
        if (durationSeconds) {
          durationEl.textContent = durationMinutes + ":" + durationSeconds;
        }
        // 
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) {
          currentSeconds = "0" + currentSeconds;
        }
        currentTimeEl.textContent = currentMinutes + ":" + currentSeconds;
      }
    }


//////// song progress RGB background function and data
//// create a array to set the each peace of arry as part of gradiant background of music progress bar
let bg=[
   ["bg-gradient-to-l","from-sky-900","via-blue-500","to-purple-600"]
  ,["bg-gradient-to-r","from-green-300","via-purple-300","to-indigo-400"]
  ,["bg-gradient-to-l","from-sky-900","via-blue-500","to-purple-600"] 
  ,["bg-gradient-to-r","from-green-300","via-purple-300","to-indigo-400"]
  ,["bg-gradient-to-r","from-pink-300","via-red-500","to-yellow-500"]
  ,["bg-gradient-to-r","from-pink-500","via-yellow-300","to-yellow-500"]
  ,["bg-gradient-to-r","from-yellow-100","via-red-200","to-yellow-100"]
  ,["bg-gradient-to-r","from-indigo-200","via-green-200","to-green-500"]
  ,["bg-gradient-to-r","from-yellow-200","via-red-300","to-yellow-200"]
  ,["bg-gradient-to-r","from-indigo-200","via-gray-400","to-gray-600"]
  ,["bg-gradient-to-r","from-red-200","via-green-300","to-blue-500"]
  ,["bg-gradient-to-r","from-gray-200","via-green-400","to-purple-700" ]
  ,["bg-gradient-to-r","from-green-200","via-green-300","to-blue-400" ]
  ,["bg-gradient-to-r","from-green-200","via-gray-600",,"to-purple-400" ]
  ,["bg-gradient-to-r","from-green-200","via-green-500","to-blue-800"]
  ,["bg-gradient-to-r","from-indigo-300","via-blue-300","to-blue-500" ]
  ,["bg-gradient-to-r","from-gray-400","via-green-300","to-blue-500"]
  ,["bg-gradient-to-r","from-blue-100","via-purple-300","to-blue-500"]
  ,["bg-gradient-to-r","from-red-400","via-purple-300","to-blue-500"]
]
// create a variable  to control the color of progressbar  gradiant background
 let bgIndex=1
/// set a interval to chnage progressbar gradiant background 
setInterval(function(){
  bgIndex++
  /// create a condition to ignore false index
  if (bgIndex>=bg.length) {
    bgIndex=1
  }
      let Index=bgIndex

      progress.classList.remove("bg-sky-400")
      progress.classList.remove(bg[Index-1][0])
       Index=bgIndex
      progress.classList.remove(bg[Index-1][1])
      Index=bgIndex
      progress.classList.remove(bg[Index-1][2])
      Index=bgIndex
      progress.classList.remove(bg[Index-1][3])
      Index=bgIndex
      progress.classList.add(bg[Index][0])
      progress.classList.add(bg[Index][1])
      progress.classList.add(bg[Index][2])
      progress.classList.add(bg[Index][3]) 
      
},1600)
    
///////////////////////////calender and reminder part
/////////////////////////////////////reminder code will add in the future
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
 
const day = document.getElementById("calendar-dates");
const currdate = document.getElementById("calendar-current-date");
const prenexIcons = document.getElementById("calendar-navigation");
 
///create an array todefine month of calender
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
calendarContainer.insertAdjacentHTML("beforeend",`
<!-- Modal -->
<div class="modal max-sm:modal-sm fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="note-text" class="col-form-label">Note:</label>
            <textarea class="form-control shadow-2xl shadow-cyan-500 border-teal-700" id="note-text" placeholder="plz Write Here"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button id="modal-close-btn" type="button" class="btn bg-opacity-80 bg-red-800" data-bs-dismiss="modal">Close</button>
        <button id="modal-save-btn" type="button" class="btn bg-cyan-600" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>

`)


let modalTitle=document.getElementById("exampleModalLabel")
let modalNoteInput=document.getElementById("note-text")
let modalCloseBtn=document.getElementById("modal-close-btn")
let modalSaveBtn=document.getElementById("modal-save-btn")

let item=null

function modal(event){
 item= event.target.id
 modalTitle.innerHTML=item.slice(11)

modalNoteInput.addEventListener("keyup",function(){
  note=modalNoteInput.value
  modalSaveBtn.addEventListener("click",function(){
     localStorage.setItem(item,note)
  })
  
})

}
function showModal(event){
 let note= localStorage.getItem(`${event.target.id}`)
 modalNoteInput.value=note

}


const calendarmanipulate=()=>{
let firstDay=new Date(year,month).getDay()
let lastDate=new Date(year,month+1,0).getDate()
let dayend = new Date(year, month, lastDate).getDay();
let monthlastdate = new Date(year, month, 0).getDate();
let liElem=""
    // this is loop to add last date of pervios month but as empty li Elem
    for (let i = firstDay; i > 0; i--) {
      liElem +=
          `<li class="opacity-30">${monthlastdate - i + 1}</li>`;
  }
  let calenderdayli=null
  // Loop to add the dates of the current month
  for (let i = 1; i <= lastDate; i++) {

      // Check if the current date is today
      let isToday = i === date.getDate()
          && month === new Date().getMonth()
          && year === new Date().getFullYear()
          ? "px-1 rounded-sm bg-gray-400 bg-opacity-60 text-red-950 cursor-pointer"
          : "w-8 py-1 text-center rounded-xl hover:bg-slate-200 cursor-pointer";

       liElem += `<li data-bs-toggle="modal" data-bs-target="#exampleModal" id="calendarDay${months[month]} ${i}" onclick="modal(event)" onmouseenter="showModal(event)"  class="${isToday}">${i}</li>`;

  }



  // Loop to add the first dates of the next month but as empty li Elem
  for (let i = dayend; i < 6; i++) {
    liElem += `<li class="inactive"></li>`
  }

  currdate.innerText = `${months[month]} ${year}`;

  day.innerHTML = liElem;
}

calendarmanipulate();


let nextMonthBtn=document.getElementById("calendar-next")
let prevMonthBtn=document.getElementById("calendar-prev")
// set add event listener to next month Icon
nextMonthBtn.addEventListener("click",()=>{
  month =  month + 1;

  // Check if the month is out of range
  if (month < 0 || month > 11) {

      // Set the date to the first day of the 
      // month with the new year
      date = new Date(year, month, new Date().getDate());

      // Set the year to the new year
      year = date.getFullYear();
      // Set the month to the new month
      month = date.getMonth();
  }
  else {
      // Set the date to the current date
      date = new Date();
  }
  calendarmanipulate();
})

// set add event listener to previos month Icon

prevMonthBtn.addEventListener("click",()=>{
  month =  month - 1;

  // Check if the month is out of range
  if (month < 0 || month > 11) {

      // Set the date to the first day of the 
      // month with the new year
      date = new Date(year, month, new Date().getDate());

      // Set the year to the new year
      year = date.getFullYear();
      // Set the month to the new month
      month = date.getMonth();
  }
  else {
      // Set the date to the current date
      date = new Date();
  }
  calendarmanipulate();
})
