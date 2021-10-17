// Start button page-up
let btn = document.getElementById('page-up')
window.onscroll = function (){
  if(window.scrollY >= 200){
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}
btn.onclick = function (){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
// End button page-up