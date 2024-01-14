// Imports 
import Footer from "./footer.js"
// Parralax 
const heroImage = document.querySelector("#hero-img")
new simpleParallax(heroImage, {transition:"ease", customWrapper: "#container-hero-img"});  
// Trastion Api
async function handleNavigation(path){
  const res = await fetch(path)
  const text = await res.text()
  const [,body] = text.match(/<body>([\s\S]*)<\/body>/i)
  document.startViewTransition(() => {
    document.body.innerHTML = body; 
    document.documentElement.scrollTop = 0
  });
}
const transitionPages = ["/pages/products/product1.html", "/pages/products/product2.html", "/pages/products/product3.html"]
if(document.startViewTransition){
  window.navigation.addEventListener("navigate", (event)=>{
    const toUrl = new URL(event.destination.url)
    console.log(toUrl.pathname)
    if(location.origin !== toUrl.origin || !transitionPages.includes(toUrl.pathname)) return
    event.intercept({
      async handler() {
        await handleNavigation(toUrl.pathname);
      },
    });
  })
}
// Footer
Footer()