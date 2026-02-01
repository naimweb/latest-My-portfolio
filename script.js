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

// skill section interval 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".skillbar").forEach(function (skillbar) {
        const bar = skillbar.querySelector(".skillbar-bar");
        const percent = skillbar.getAttribute("data-percent");

        bar.style.transition = "width 3s ease";
        bar.style.width = percent;
    });
});



// foote year text 
    const date = new Date();
    const year = date.getFullYear();
    document.getElementById("year").innerHTML=year
    // end



