const mood = document.getElementById("moon");

/* Toggle theme on click */
mood.addEventListener("click", (e) => {
  e.preventDefault();

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    mood.innerHTML = `<i class="fa-regular fa-sun"></i>`;
  } else {
    localStorage.setItem("theme", "light");
    mood.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});

/* Load saved theme on refresh */
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    mood.innerHTML = `<i class="fa-regular fa-sun"></i>`;
  } else {
    document.body.classList.remove("dark");
    mood.innerHTML = `<i class="fa-solid fa-moon"></i>`;
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
    const out =  document.querySelector(".dateYear")
    out.innerHTML=year
    out.style.color="red";
   
    // end


    



