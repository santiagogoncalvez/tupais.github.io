import"./index-DQllQ-ab.js";function f(){const[a]=document.getElementsByClassName("navbar__button--open"),[e]=document.getElementsByClassName("navbar"),[n]=document.getElementsByClassName("navbar__button--close"),[s]=document.getElementsByClassName("footer__icon-github"),[r]=document.getElementsByClassName("game-modes");s.addEventListener("mouseover",()=>{r.classList.contains("dark-mode__page")?s.style.backgroundImage="url('/images/icons/icons-github-dark-mode-hover.svg')":s.style.backgroundImage="url('/images/icons/icons-github.svg')",s.addEventListener("mouseout",()=>{r.classList.contains("dark-mode__page")?s.style.backgroundImage="url('/images/icons/icons-github-dark-mode.svg')":s.style.backgroundImage="url('/images/icons/icons-github-hover.svg')"})}),a.addEventListener("click",function(t){if(e.style.left==="-25rem"||e.style.left===""){new Promise(c=>{e.style.left="0rem",c()}).then(c=>{setTimeout(()=>{document.addEventListener("click",d)},0)});return}if(e.style.left==="0rem"){e.contains(t.target)||(e.style.left="-25rem",document.removeEventListener("click",d));return}});function d(t){e.contains(t.target)||(e.style.left="-25rem",document.removeEventListener("click",d))}n.addEventListener("click",function(){e.style.left="-25rem",document.removeEventListener("click",d)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&e.style.left==="0rem"&&(e.style.left="-25rem")})}document.addEventListener("DOMContentLoaded",async function(){h(),b(),f()});function b(){function a(r){const[d]=document.getElementsByClassName("game-modes"),[t]=document.getElementsByClassName("game-modes__main"),[c]=document.getElementsByClassName("header"),[o]=document.getElementsByClassName("footer"),[u]=document.getElementsByClassName("header__title"),[_]=document.getElementsByClassName("navbar__button--open"),[m]=document.getElementsByClassName("footer__paragraph"),[g]=document.getElementsByClassName("header__settings"),[v]=document.getElementsByClassName("game-modes__subtitle"),i=document.getElementsByClassName("game-modes__modes-link"),[k]=document.getElementsByClassName("footer__icon-github"),y=document.getElementsByClassName("navbar__icon");if(r==="activate"){c.classList.add("dark-mode__header"),o.classList.add("dark-mode__footer"),u.classList.add("dark-mode__header--title"),m.classList.add("dark-mode__game-text"),d.classList.add("dark-mode__page"),t.classList.add("dark-mode__page"),g.classList.add("dark-mode__button-settings"),_.classList.add("dark-mode__navbar-button-open"),k.classList.add("dark-mode__github-bt"),v.classList.add("dark-mode__game-text");for(let l of y)l.classList.add("dark-mode__navbar-icon");for(let l of i)l.classList.add("dark-mode__send")}if(r==="deactivate"){c.classList.remove("dark-mode__header"),o.classList.remove("dark-mode__footer"),u.classList.remove("dark-mode__header--title"),m.classList.remove("dark-mode__game-text"),d.classList.remove("dark-mode__page"),t.classList.remove("dark-mode__page"),g.classList.remove("dark-mode__button-settings"),_.classList.remove("dark-mode__navbar-button-open"),k.classList.remove("dark-mode__github-bt"),v.classList.remove("dark-mode__game-text");for(let l of y)l.classList.remove("dark-mode__navbar-icon");for(let l of i)l.classList.remove("dark-mode__send")}}const[e]=document.getElementsByClassName("dark-mode-bt"),[n]=document.getElementsByClassName("dark-mode-bt__circle");let s;if(localStorage.getItem("darkMode")===""){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?(localStorage.setItem("darkMode","1"),s=Number(localStorage.getItem("darkMode"))):(localStorage.setItem("darkMode","0"),s=Number(localStorage.getItem("darkMode"))),s){a("activate");return}return}else s=Number(localStorage.getItem("darkMode"));a(s?"activate":"deactivate"),e&&(s?(n.style.left="32px",e.style.backgroundColor="#0D336B"):(n.style.left="3px",e.style.backgroundColor="#BFE1FF")),e&&e.addEventListener("click",function(){n.style.left==="3px"?(n.style.left="32px",e.style.backgroundColor="#0D336B",localStorage.setItem("darkMode","1"),a("activate")):(n.style.left="3px",e.style.backgroundColor="#BFE1FF",localStorage.setItem("darkMode","0"),a("deactivate"))})}function h(){function a(t){t.style.height="14rem",t.style.width="26rem",t.style.opacity="0",setTimeout(()=>{t.style.opacity="1"},15),setTimeout(()=>{t.style.height="15rem",t.style.width="28rem"},15)}async function e(t){return new Promise(c=>{t.style.height="14rem",t.style.width="26rem",setTimeout(()=>{t.style.opacity="0"},15),setTimeout(()=>{c()},100)})}const n=`       
            <section class="presentation__section">
            <button class="presentation__header-link" title="Cerrar" type="button"
                    >
                </button>
            
               <div class="presentation__div">
               <h2 class="presentation__subtitle">Configuración</h2>

               <div class="presentation__subtitle">Modo oscuro</div>
               <button class="dark-mode-bt" type="button" title="Modo oscuro">
                  <img width="20" height="20" src="/images/icons/icons-sun.svg" alt="sun-symbol" class="dark-mode-bt__sun"/>
    
                  <div class="dark-mode-bt__circle"></div>
           
                  <img width="20" height="20" src="/images/icons/icons-moon.png" alt="moon-symbol" class="dark-mode-bt__moon"/>
               </button>
        </section>
        <div class="blurry-background"></div>
`,[s]=document.getElementsByClassName("header__settings");let[r]=document.getElementsByClassName("game-modes");s.addEventListener("click",async()=>{d()});async function d(t){return new Promise(c=>{s.blur(),r.insertAdjacentHTML("beforeend",n);let[o]=document.getElementsByClassName("presentation__section"),[u]=document.getElementsByClassName("blurry-background");const[_]=document.getElementsByClassName("presentation__header-link");o.classList.add("settings"),a(o);function m(i){!o.contains(i.target)&&i.target!==s&&o.classList.contains("settings")&&e(o).then(()=>{u.remove(),o.remove(),document.removeEventListener("click",m)})}b(),_.addEventListener("click",function(){e(o).then(()=>{u.remove(),o.remove(),document.removeEventListener("click",m)})}),document.addEventListener("keydown",g),document.addEventListener("click",m);function g(i){v(i)}function v(i,k){i.key==="Escape"&&o&&e(o).then(()=>{u.remove(),o.remove(),document.removeEventListener("click",m),document.removeEventListener("keydown",g)})}})}}
