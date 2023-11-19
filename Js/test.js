window.addEventListener("load",()=>{
 // alert("for add a new note to every category plz select your category at the first step").toUpperCase()
 // alert("by single Double click on each item ,item will be deleted")
 // alert("when your job is done you could have a single click on your job ")
})
////////////////////  Add and make Catgory part (variable and function)
let catgoriesDivElem=document.querySelector("#catgories")

let addcatgoryElem=document.getElementById("addcatgoryIcon")

let input=document.querySelector("input")

let addLabel=document.querySelector("#addlabel")
let removeLabel=document.querySelector("#removelabel")
//// add and dragable remove function
function setLabelIcon(e){
  let targetLabel=e.target
if(targetLabel.id=="addlabel"){addLabel.innerHTML="";addLabel.classList.remove("btn-danger"); addLabel.insertAdjacentHTML("afterbegin",'<?xml version="1.0" ?><svg class="mx-auto w-6 hover:scale-125" id="plus-add-more-detail" style="enable-background:new 0 0 15 15;" version="1.1" viewBox="0 0 15 15" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7.5,0C3.364,0,0,3.364,0,7.5S3.364,15,7.5,15S15,11.636,15,7.5S11.636,0,7.5,0z M7.5,14C3.916,14,1,11.084,1,7.5  S3.916,1,7.5,1S14,3.916,14,7.5S11.084,14,7.5,14z"/><polygon points="8,3.5 7,3.5 7,7 3.5,7 3.5,8 7,8 7,11.5 8,11.5 8,8 11.5,8 11.5,7 8,7 "/></svg>')}
if(targetLabel.id=="removelabel"){removeLabel.innerHTML="";removeLabel.classList.remove("btn-danger"); removeLabel.insertAdjacentHTML("afterbegin",`<svg class="w-7 mx-auto hover:scale-125" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path d="M322.62 254.95h-20.71v195.41h20.71V254.95zM111.53 2.02l105.89 36.64 3.26-9.41c.11-.32.23-.64.38-.94 3.69-9.25 13.28-14.76 23.08-13.35 2.56.37 4.75 1.19 7.16 2.03l60.97 21.1c.82.28 1.62.53 2.4.91 5.11 2.08 9.07 5.94 11.32 10.59 2.21 4.56 2.8 9.93 1.36 15.13-.17.61-.35 1.25-.55 1.83l-3.07 8.89 106.95 37.01c1.43.49 2.47.88 3.84 1.61 6.86 3.69 10.35 11.45 8.43 19.03-.21.82-.44 1.59-.72 2.38l-12.01 34.71c-1.67 4.85-6.97 7.41-11.81 5.74l-19.61-6.79a81.15 81.15 0 0 1 6.56 28.24c1.22.78 2.35 1.68 3.36 2.68 3.52 3.47 5.81 8.14 5.93 13.34.02 1.1-.11 2.21-.21 3.3L388.9 490.72c-.33 3.6-.93 6.8-2.75 10.18-3.52 6.55-10.03 11.1-18.14 11.1H117.06c-5.32 0-9.19-.47-13.67-3.53-5.28-3.61-8.74-9.7-9.35-16.46L68.66 215.9c-.08-.87-.16-1.82-.13-2.68.18-5.15 2.44-9.76 5.94-13.19 2.78-2.73 6.45-4.74 10.43-5.61-.19-.97-.3-1.96-.3-2.99v-66.36c0-8.26 6.76-15.02 15.02-15.02h78.92c8.25 0 15.01 6.76 15.01 15.02v22.45c12.39-10.17 28.24-16.28 45.52-16.28a71.52 71.52 0 0 1 32.54 7.79c4.18-3.5 8.71-6.6 13.54-9.22L79.45 58.63c-4.85-1.68-7.42-6.97-5.75-11.82l.07-.2 11.29-32.63C89.79.32 98.32-2.56 111.53 2.02zm143.75 252.93h-20.72v195.41h20.72V254.95zm-67.34 0h-20.71v195.41h20.71V254.95zm205.55-42.48H89.89c-1.99 0-2.94.34-2.75 2.45l25.11 273.2c.16 1.69.13 5.33 2.53 5.29h253.25c2.08 0 2.32-2.93 2.46-4.44l25.57-274.23c.16-1.77-.89-2.27-2.57-2.27zm-224.75-23.88h9.8v-52.32c0-5.98-4.9-10.87-10.88-10.87h-57.17c-5.98 0-10.87 4.89-10.87 10.87v52.32h69.12zm100.12 2.44H379.1c-2.52-15.25-11.22-28.4-23.44-36.82l-.15-.11-.23-.15-.38-.26-.38-.25-.02-.01-.37-.25-.39-.24-.26-.17-.13-.08-.4-.24-.39-.24-.11-.06-.29-.17-.4-.23-.36-.21-.04-.02-.4-.23-.41-.22-.41-.22-.41-.21-.41-.22-.06-.03-.35-.17-.42-.21-.32-.16-.09-.04-.42-.2-.43-.2-.16-.07-.26-.12-.43-.19-.42-.18-.01-.01-.42-.17-.71-.29-.16-.06-.84-.33-.02-.01-.12-.05-.32-.12-.44-.16-.4-.14-.04-.01-.45-.16-.44-.15-.24-.07-.21-.07-.45-.15-.45-.13-.06-.02-.39-.12-.45-.13-.35-.1-.11-.03-.45-.12-.46-.12-.18-.05-.28-.07-.46-.11-.46-.11h-.01l-.46-.1-.76-.17-.17-.03-.46-.09-.48-.09-.12-.03-.34-.06-.48-.08-.42-.07-.05-.01-.48-.07-.47-.07-.24-.04-.24-.03-.48-.06-.48-.05-.06-.01-.42-.05-.48-.05-.37-.03-.11-.01-.49-.04-.48-.04-.19-.01-.3-.02c-1.18-.08-2.37-.12-3.57-.12-27.51 0-50.44 19.73-55.12 46.67z"/></svg>`)}
}
function setLabelText(e){
  let targetLabel=e.target
if(targetLabel.id=="addlabel"){addLabel.innerHTML="";addLabel.classList.add("btn-danger");addLabel.innerHTML="Add New Todo..." }
if(targetLabel.id=="removelabel"){removeLabel.innerHTML="";removeLabel.classList.add("btn-danger"); removeLabel.innerHTML="Drag Here"; }
}
addLabel.addEventListener("mouseenter",setLabelIcon)
removeLabel.addEventListener("mouseenter",setLabelIcon)
addLabel.addEventListener("mouseleave",setLabelText)
removeLabel.addEventListener("mouseleave",setLabelText)

// create and add new category
function newCatgory(){
  let catgoryname=prompt("please enter the name of the catgory:",)
  let catgoryElem=document.createElement("menu")
  let catgoryTitle=document.createElement("span")
  let ul= document.createElement('ul')
  let randomNumber=Math.floor(Math.random()*100)

  catgoryTitle.innerHTML=catgoryname
  ul.id=JSON.stringify(catgoryname+randomNumber)
  catgoryElem.className="mt-1 text-center bg-catgory-t1 rounded-3xl "

  catgoryElem.insertAdjacentElement("afterbegin",ul)
  catgoryElem.insertAdjacentText('afterbegin',`${catgoryname}`)
  catgoryElem.insertAdjacentHTML("afterbegin",`<div id="dropdownBtn" onclick="hideCatgoryItem(event)" class="mt-px float-right -translate-x-3"><svg id="svg${catgoryname}"  class="svg-icon transition-all" style="width: 1.35em; height: 1.35em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M0 511.976727C0 229.678545 229.725091 0 511.976727 0s511.976727 229.632 511.976727 511.976727c0 282.391273-229.725091 511.976727-511.976727 511.976727C229.725091 1024 0 794.368 0 511.976727M955.717818 511.976727c0-244.898909-199.121455-444.206545-443.741091-444.206545-244.666182 0-443.694545 199.307636-443.694545 444.206545 0 244.945455 199.121455 444.253091 443.694545 444.253091C756.642909 956.276364 955.717818 756.968727 955.717818 511.976727M230.027636 419.025455c0-6.562909 2.420364-13.102545 7.563636-18.059636 9.914182-9.960727 26.042182-9.960727 36.096 0l238.289455 236.916364L750.312727 401.105455c9.960727-9.914182 26.135273-9.914182 36.305455 0 9.914182 9.960727 9.914182 26.042182 0 35.956364L511.976727 709.678545 237.474909 436.922182C232.424727 432.104727 230.027636 425.588364 230.027636 419.025455"  /></svg></div>`)
  catgoriesDivElem.insertAdjacentElement("beforeend",catgoryElem)

}

////////// category selection to add note
function selectionsCatgory(e){

  if( e.target.tagName.toLowerCase() =="menu"){

         let categoryID=e.target.childNodes[2].id
         localStorage.setItem("key",`${categoryID}`)
         console.log(e.target.childNodes[2].id);
  }
}


/// take a line over of the note ,, job is done
  function jobIsDone(e){
    e.target.classList.add("line-through")
  }
/// add note to each category that selected by user
function addCatgoryWork(){

  let categoryID=localStorage.getItem("key")
  let li=document.createElement("li")
  li.className="mt-1 text-center bg-li-t1 rounded-b-xl hover:translate-x-4 hover:scale-110 hover:capitalize transition-all"
  li.innerHTML=input.value
  li.insertAdjacentHTML("beforeend",`<button id="ulReycleBin" class="my-2 m-2 hover:scale-125 float-right" onclick="deleteFromCatgory(event)">
  <?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" viewBox="0 0 109.484 122.88" enable-background="new 0 0 109.484 122.88" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"/></g></svg>
  </button>`)
  li.addEventListener("click",jobIsDone)

  console.log(categoryID);
  let ul=document.getElementById(categoryID)
  ul.insertAdjacentElement("afterbegin",li)
  input.value=""
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
  let svg=e.target
  let menu=e.target.parentElement.parentElement
  let ul=menu.childNodes[2]

  if(ul.classList.contains("hidden")){
    ul.classList.remove("hidden")
    svg.classList.remove("rotate-180")
  }else{
    ul.classList.add("hidden")
    svg.classList.add("rotate-180")}
}
/// set function to html element

addcatgoryElem.addEventListener("click",newCatgory)
addLabel.addEventListener("click",addCatgoryWork)
window.addEventListener("click",selectionsCatgory)


////////////////////play and load song (variable ,data and function)
// code will add in the futur


////////////////////calender and reminder part
//code will add in the future


////////////////////point hint and motivaion part
//code will add in the future
