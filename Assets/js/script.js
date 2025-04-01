
// Animation Write
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".animated-text");
    const text = "Fresh Flowers...";
    let i = 0;

    function animateText() {
        textElement.textContent = "";
        i = 0;

        const spanElements = text.split("").map(char => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.opacity = "0";
            span.style.transform = "scale(0.8)";
            textElement.appendChild(span);
            return span;
        });

        gsap.to(spanElements, {
            opacity: 1,
            scale: 1,
            stagger: 0.1, // تأخير بين كل حرف
            ease: "power2.out",
            duration: 0.6,
            onComplete: () => {
                setTimeout(() => {
                    gsap.to(spanElements, {
                        opacity: 0,
                        scale: 0.8,
                        stagger: 0.05,
                        ease: "power2.in",
                        duration: 0.5,
                        onComplete: animateText // إعادة التأثير تلقائيًا
                    });
                }, 2000); // انتظار بعد الكتابة
            }
        });
    }

    animateText();
});
// Scrrol Up

// ـــــــــــــــــــــــــــــــــــــــــــــ
document.addEventListener("DOMContentLoaded", () => {
    let btn = document.createElement("button");
    btn.innerHTML = '<i class="fa-solid fa-spa fa-bounce fa-xl" style="color: #6c2871;"></i>';
    
    Object.assign(btn.style, {
        position: "fixed", bottom: "20px", right: "20px", padding: "12px",
        borderRadius: "50%", border: "none", cursor: "pointer",
        display: "none", transition: "0.3s",
        width: "50px", height: "50px", textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)", outline: "none"
    });

    document.body.appendChild(btn);

    window.addEventListener("scroll", () => {
        btn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


