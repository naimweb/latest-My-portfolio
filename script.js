const mood = document.getElementById("moon");
mood.addEventListener("click",() => {
  document.body.classList.toggle("dark")
  if(document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark")
    mood.innerHTML=`<i class="fa-regular fa-sun"></i>`
  }
  else {
    mood.innerHTML=`<i class="fa-solid fa-moon"></i>`
    localStorage.setItem("theme","light")
  }
})

window.addEventListener("DOMContentLoaded",() => {
  const seved = localStorage.getItem("theme")
  if(seved === "dark") {
    document.body.classList.add("dark")
     mood.innerHTML=`<i class="fa-regular fa-sun"></i>`
  }
  else {
    mood.innerHTML=`<i class="fa-solid fa-moon"></i>`
  }
});

