(()=>{"use strict";const e=function(){let e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");let n=document.createElement("h1");n.textContent="Welcome to our website",t.appendChild(n);let o=document.createElement("img");o.src="https://picsum.photos/800/600",t.appendChild(o);let c=document.createElement("p");c.textContent="We serve the best food in town",t.appendChild(c),e.appendChild(t)};(function(){const t=document.querySelector("#content"),n=document.createElement("div");n.classList.add("tabs");const o=document.createElement("button");o.textContent="Home";const c=document.createElement("button");c.textContent="Menu";const d=document.createElement("button");function l(){t.innerHTML=""}d.textContent="Contact",n.appendChild(o),n.appendChild(c),n.appendChild(d),document.body.insertBefore(n,t),o.addEventListener("click",(()=>{l(),e()})),c.addEventListener("click",(()=>{l(),function(){let e=document.querySelector("#content");if(!e)return void console.error("Error: #content element not found");e.innerHTML="";let t=document.createElement("div");t.classList.add("page-content");let n=document.createElement("h1");n.textContent="Our Menu",t.appendChild(n);let o=document.createElement("ul");["Burger - $10","Pizza - $15","Pasta - $12","Salad - $8","Dessert - $7"].forEach((e=>{let t=document.createElement("li");t.textContent=e,o.appendChild(t)})),t.appendChild(o),e.appendChild(t)}()})),d.addEventListener("click",(()=>{l(),function(){let e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");let n=document.createElement("h1");n.textContent="Contact Us",t.appendChild(n);let o=document.createElement("p");o.textContent="Phone: (123) 456-7890",t.appendChild(o);let c=document.createElement("p");c.textContent="Email: contact@restaurant.com",t.appendChild(c);let d=document.createElement("p");d.textContent="123 Food Street, Flavor Town",t.appendChild(d),e.appendChild(t)}()}))})(),e()})();