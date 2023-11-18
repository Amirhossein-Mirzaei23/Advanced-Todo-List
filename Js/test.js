////////////////////  Add and make Catgory part (variable and function)
let catgoriesDivElem=document.querySelector("#catgories")

let addcatgoryElem=document.getElementById("addcatgoryIcon")

let input=document.querySelector("input")

let addLabel=document.querySelector("label")

// create a new category
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

  catgoriesDivElem.insertAdjacentElement("beforeend",catgoryElem)

}

////////// category selection to add note
function selectionsCatgory(e){

  if( e.target.tagName.toLowerCase() =="menu"){

         let ulid=e.target.childNodes[2].id
         localStorage.setItem("key",`${ulid}`)
         console.log(e.target.childNodes[2].id);
  }
}

/// delete the note from category
function deleteFromCatgory(e){
  e.target.remove()
  }
/// take a line over of the note ,, job is done
  function jobIsDone(e){
    e.target.classList.add("line-through")
  }
/// add note to each category that selected by user
function addCatgoryWork(){
  let note="for add a new note to every category plz select your category at the first step"
 // alert(note.toUpperCase() )
  let categoryID=localStorage.getItem("key")
  let li=document.createElement("li")
  li.className="mt-1 text-center bg-li-t1 rounded-b-xl hover:translate-x-4 hover:scale-110 hover:capitalize transition-all"
  li.innerHTML=input.value
  li.addEventListener("click",jobIsDone)
  li.addEventListener("dblclick",deleteFromCatgory)
  console.log(categoryID);
  let ul=document.getElementById(categoryID)
  ul.insertAdjacentElement("afterbegin",li)
  //
 // alert("by single Double click on each item ,item will be deleted")
 // alert("when your job is done you could have a single click on your job ")
}
//let dropdownBtn=document.getElementById("dropdownBtn")
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
