const button = document.querySelectorAll(".button");
for (let i=0; i<button.length; button++){
i.addEventListener("mouseover", ()=>{
  i.click();
});
}
