const runIt=document.querySelector("meta[data-run-it]");
const Go=document.querySelector("meta[data-go]");
const button = Go(".button");
for (let i=0; i<button.length; i++){
button[i].addEventListener("mouseover", ()=>{
  button[i].click();
});
}
