const mediaQuery=window.matchMedia("(max-width: 480px)");let baseDelay=10;function srcSeter(e){e.srcset=e.dataset.img}function fullQuality(e){const t=e.dataset.priority||0;setTimeout((function(){const t=e.querySelector(".webp-img"),n=e.querySelector(".webp-img-480"),s=e.querySelector(".nowebp-img"),c=e.querySelector(".nowebp-img-480");srcSeter(n),srcSeter(s),srcSeter(c),srcSeter(t)}),1+baseDelay*t)}function toggleMinImg(){const e=document.querySelectorAll(".toggle-img--js");for(let t=0;t<e.length;t++){fullQuality(e[t])}}function addFont(){setTimeout((()=>{const e=document.createElement("link"),t=document.createElement("link");t.rel="preconnect",t.href="https://fonts.gstatic.com",e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Spectral:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap",document.querySelector("head").append(t),document.querySelector("head").append(e)}),1)}function scriptAsync(e){const t=document.querySelector("#script-place");function n(e){const n=document.createElement("script");n.src=e,t.appendChild(n)}const s=document.createElement("script");s.src="https://code.jquery.com/jquery-3.5.1.min.js",setTimeout((()=>{t.appendChild(s)}),e),s.onload=function(){n("https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"),n(" https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js  "),"true"==t.dataset.carousel&&n(" js/owl.carousel.min.js "),n("  js/main.js ")}}mediaQuery.matches&&(baseDelay=500),window.addEventListener("load",(function(){toggleMinImg(),addFont(),scriptAsync(300)}));