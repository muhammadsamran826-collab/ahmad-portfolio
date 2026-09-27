/* =====================================================
   MUHAMMAD AHMAD PORTFOLIO
   PREMIUM ANIMATED JAVASCRIPT
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

        }, 800);

    }, 900);

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


    requestAnimationFrame(
        animateCursor
    );

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

    element.addEventListener(
        "mouseenter",
        () => {

            if (!cursorRing)
                return;

            cursorRing.style.width =
                "58px";

            cursorRing.style.height =
                "58px";

            cursorRing.style.borderColor =
                "#a991ff";

            cursorRing.style.background =
                "rgba(121,92,255,.05)";

        }
    );


    element.addEventListener(
        "mouseleave",
        () => {

            if (!cursorRing)
                return;

            cursorRing.style.width =
                "34px";

            cursorRing.style.height =
                "34px";

            cursorRing.style.borderColor =
                "rgba(255,255,255,.6)";

            cursorRing.style.background =
                "transparent";

        }
    );

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


if (menuBtn && mobileMenu) {

    menuBtn.addEventListener(
        "click",
        () => {

            menuBtn.classList.toggle(
                "active"
            );

            mobileMenu.classList.toggle(
                "active"
            );

        }
    );


    document
        .querySelectorAll(".mobile-menu a")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    menuBtn.classList.remove(
                        "active"
                    );

                    mobileMenu.classList.remove(
                        "active"
                    );

                }
            );

        });

}


/* =====================================================
   SCROLL PROGRESS
===================================================== */

const progress =
    document.querySelector(
        ".scroll-progress"
    );


window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            pageHeight > 0
                ? (scrollTop / pageHeight) * 100
                : 0;

        if (progress) {

            progress.style.width =
                `${percentage}%`;

        }

    },
    { passive: true }
);


/* =====================================================
   NAVBAR ON SCROLL
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (!navbar)
            return;


        if (window.scrollY > 50) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    },
    { passive: true }
);


/* =====================================================
   PROFILE 3D MOUSE EFFECT
===================================================== */

const profileCard =
    document.getElementById(
        "profileCard"
    );


if (profileCard) {

    document.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth <= 800)
                return;


            const x =
                (
                    window.innerWidth / 2 -
                    event.clientX
                ) / 35;


            const y =
                (
                    window.innerHeight / 2 -
                    event.clientY
                ) / 35;


            profileCard.style.transform =
                `
                rotateY(${-x}deg)
                rotateX(${y}deg)
                `;

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
    document.querySelectorAll(
        ".magnetic"
    );


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
                `
                translate(
                    ${x * .15}px,
                    ${y * .15}px
                )
                `;

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
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "revealed"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(
    (element, index) => {

        element.style.transitionDelay =
            `${(index % 6) * 80}ms`;

        revealObserver.observe(
            element
        );

    }
);


/* =====================================================
   PROJECT CARD 3D TILT
===================================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth <= 800)
                return;


            const rect =
                card.getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                ) / rect.width -
                .5;


            const y =
                (
                    event.clientY -
                    rect.top
                ) / rect.height -
                .5;


            card.style.transform =
                `
                perspective(1000px)
                rotateY(${x * 7}deg)
                rotateX(${-y * 7}deg)
                translateY(-8px)
                `;

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
   SKILL CARD TILT
===================================================== */

const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );


skillCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth <= 800)
                return;


            const rect =
                card.getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                ) / rect.width -
                .5;


            const y =
                (
                    event.clientY -
                    rect.top
                ) / rect.height -
                .5;


            card.style.transform =
                `
                perspective(900px)
                rotateY(${x * 4}deg)
                rotateX(${-y * 4}deg)
                translateY(-10px)
                `;

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
   PROJECT LINK CLICK EFFECT
===================================================== */

document
    .querySelectorAll(".project-link")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                link.style.transform =
                    "rotate(45deg) scale(.9)";

                setTimeout(() => {

                    link.style.transform = "";

                }, 300);

            }
        );

    });


/* =====================================================
   ACTIVE NAV LINK
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach(
            (section) => {

                const sectionTop =
                    section.offsetTop - 150;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            (link) => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href") ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    },
    { passive: true }
);


/* =====================================================
   SMOOTH ANCHOR SCROLL
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    targetId === "#"
                )
                    return;


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target)
                    return;


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


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
