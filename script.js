document.addEventListener("DOMContentLoaded", function () {
    let backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {  
            backToTopButton.style.opacity = "1";  
            backToTopButton.style.pointerEvents = "auto"; 
        } else {
            backToTopButton.style.opacity = "0";  
            backToTopButton.style.pointerEvents = "none"; 
        }
    });

    // جلوگیری از تأثیر روی بقیه کلیک‌ها
    backToTopButton.addEventListener("click", function (event) {
        event.preventDefault(); // جلوگیری از رفتار پیش‌فرض
        event.stopPropagation(); // جلوگیری از اجرا روی دیگر عناصر
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
