const getAll=document.querySelector("meta[data-getAll]");
const getEl=document.querySelector("meta[data-getEl]");
document.getAll=getAll;
document.getEl=getEl;
const button = data.getAll(".button");
for (let i=0; i<button.length; i++){
button[i].addEventListener("mouseover", ()=>{
  button[i].click();
});
}
