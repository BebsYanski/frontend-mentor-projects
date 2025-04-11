let faq = document.querySelectorAll(".accordion-item");

faq.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
        if (faq.classList.contains("active")) {
            faq.querySelector("img").src = "./assets/images/icon-minus.svg";
        } else {
            faq.querySelector("img").src = "./assets/images/icon-plus.svg";
        }

    });
});