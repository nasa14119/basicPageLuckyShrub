const DATA = [
  {
    show: "@lucky_shrub", 
    platform: "Intagram"
  },
  {
    show: "@lucky_shrubOnFacebook", 
    platform: "FaceBook"
  },
  {
    show: "contact@luchyshrub.com", 
    platform: "Mail"
  },
  {
    show: "Go to top", 
    platform: "OtherLink"
  }
]
const $links = document.querySelectorAll("#links_social"); 
const $span = document.querySelector("#more_info");
$links.forEach((value, index)=> {
  value.addEventListener("mouseover", () => {
    $span.innerHTML = DATA[index].show
  })
})
function initFooter(){
}
export default initFooter