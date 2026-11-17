function goToSite(site){
  window.location.replace(site);
}
window.goToSite=goToSite;
function refreshLoop(amount){
  for (let i = 0; i<amount; i++){
    window.location.reload();
  }
}
window.refreshLoop=refreshLoop;
