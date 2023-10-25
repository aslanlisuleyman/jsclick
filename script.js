const selects = document.querySelectorAll(".select");
selects.forEach(select => {
    const title = select.querySelector(".title");
    const content = select.querySelector(".content");
    const titleText = title.querySelector("p");
    const titleIcon = title.querySelector("i");

    title.addEventListener("click", () => {
        if (select.classList.contains("active")) {
            select.classList.remove("active");
            content.style.display = "none";
            title.style.backgroundColor="white"
            titleText.style.color = "grey";
            titleIcon.style.color = "grey";

        } else {
            selects.forEach(otherSelect => {
                const otherContent = otherSelect.querySelector(".content");
                otherContent.style.display = "none";

                otherSelect.classList.remove("active");
                const otherTitle = otherSelect.querySelector(".title");
                const otherTitleText = otherTitle.querySelector("p");
                const otherTitleIcon = otherTitle.querySelector("i");
    
                otherTitle.style.backgroundColor = "white";
                otherTitleText.style.color = "grey";
                otherTitleIcon.style.color = "grey";
            });
            
            select.classList.add("active");
            content.style.display = "block";
            title.style.backgroundColor = "blue";
            titleText.style.color = "white";
            titleIcon.style.color = "white";
        }
    });  });







