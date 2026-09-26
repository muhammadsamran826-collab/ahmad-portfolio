/* =====================================================
   MUHAMMAD AHMAD PORTFOLIO
   Main JavaScript
===================================================== */


/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        preloader.style.pointerEvents = "none";

        setTimeout(() => {
            preloader.remove();
        }, 500);

    }, 700);

});


/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorRing =
    document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;


window.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

});


function animateCursor() {

    if (cursorDot) {

        cursorDot.style.left =
            `${mouseX}px`;

        cursorDot.style.top =
            `${mouseY}px`;

    }


    ringX +=
        (mouseX - ringX) * .12;

    ringY +=
        (mouseY - ringY) * .12;


    if (cursorRing) {

        cursorRing.style.left =
            `${ringX}px`;

        cursorRing.style.top =
            `${ringY}px`;

    }


    requestAnimationFrame(animateCursor);

}


animateCursor();


/* =====================================================
   CURSOR HOVER
===================================================== */

const interactiveElements =
    document.querySelectorAll(
        "a, button, .skill-card, .project-card"
    );


interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        cursorRing.style.width = "55px";
        cursorRing.style.height = "55px";

        cursorRing.style.borderColor =
            "#a991ff";

    });


    element.addEventListener("mouseleave", () => {

        cursorRing.style.width = "34px";
        cursorRing.style.height = "34px";

        cursorRing.style.borderColor =
            "rgba(255,255,255,.6)";

    });

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });


/* =====================================================
   SCROLL PROGRESS
===================================================== */

const progress =
    document.querySelector(".scroll-progress");


window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            (scrollTop / pageHeight) * 100;

        progress.style.width =
            `${percentage}%`;

    },
    { passive: true }
);


/* =====================================================
   PROFILE 3D MOUSE EFFECT
===================================================== */

const profileCard =
    document.getElementById("profileCard");


if (profileCard) {

    document.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth <= 800)
                return;


            const x =
                (window.innerWidth / 2 -
                event.clientX) / 35;


            const y =
                (window.innerHeight / 2 -
                event.clientY) / 35;


            profileCard.style.transform =
                `rotateY(${-x}deg)
                 rotateX(${y}deg)`;

        }
    );


    document.addEventListener(
        "mouseleave",
        () => {

            profileCard.style.transform =
                "rotateY(0deg) rotateX(0deg)";

        }
    );

}


/* =====================================================
   MAGNETIC BUTTONS
===================================================== */

const magneticButtons =
    document.querySelectorAll(".magnetic");


magneticButtons.forEach((button) => {

    button.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth <= 800)
                return;


            const rect =
                button.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left -
                rect.width / 2;


            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            button.style.transform =
                `translate(${x * .15}px,
                           ${y * .15}px)`;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translate(0,0)";

        }
    );

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-text, .stat-card, .skill-card, .service-item, .project-card, .timeline-item, .education-card"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "revealed"
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "opacity .8s ease, transform .8s ease";

    revealObserver.observe(element);

});


/* =====================================================
   REVEAL CLASS
===================================================== */

const style =
    document.createElement("style");


style.innerHTML = `

.revealed {

    opacity: 1 !important;

    transform:
        translateY(0)
        !important;

}

`;


document.head.appendChild(style);


/* =====================================================
   STAGGER SKILL CARDS
===================================================== */

document
    .querySelectorAll(".skills-grid")
    .forEach((grid) => {

        const cards =
            grid.querySelectorAll(".skill-card");

        cards.forEach((card, index) => {

            card.style.transitionDelay =
                `${index * 80}ms`;

        });

    });


/* =====================================================
   PROJECT CARD TILT
===================================================== */

document
    .querySelectorAll(".project-card")
    .forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                if (window.innerWidth <= 800)
                    return;


                const rect =
                    card.getBoundingClientRect();


                const x =
                    (event.clientX -
                    rect.left) /
                    rect.width -
                    .5;


                const y =
                    (event.clientY -
                    rect.top) /
                    rect.height -
                    .5;


                card.style.transform =
                    `perspective(900px)
                     rotateY(${x * 6}deg)
                     rotateX(${-y * 6}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });


/* =====================================================
   SMOOTH NAVBAR COLOR
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(7,7,11,.88)";

        } else {

            navbar.style.background =
                "rgba(7,7,11,.55)";

        }

    },
    { passive: true }
);


/* =====================================================
   REDUCED MOTION
===================================================== */

const reduceMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (reduceMotion.matches) {

    document
        .querySelectorAll("*")
        .forEach((element) => {

            element.style.animationDuration =
                "0.01ms";

            element.style.transitionDuration =
                "0.01ms";

        });

}
