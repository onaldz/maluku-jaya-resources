document.addEventListener("DOMContentLoaded", () => {

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");

    const backToTop =
        document.getElementById("backToTop");

    const year =
        document.getElementById("year");


    /* =========================
       CURRENT YEAR
    ========================== */

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =========================
       MOBILE MENU
    ========================== */

    if (menuToggle && mainNav) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    mainNav.classList.toggle("open");


                menuToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );


                menuToggle.innerHTML =
                    isOpen

                    ? '<i class="fa-solid fa-xmark"></i>'

                    : '<i class="fa-solid fa-bars"></i>';

            }
        );


        /* Close menu after clicking link */

        mainNav
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        mainNav.classList.remove(
                            "open"
                        );


                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );


                        menuToggle.innerHTML =
                            '<i class="fa-solid fa-bars"></i>';

                    }
                );

            });

    }


    /* =========================
       SCROLL REVEAL
    ========================== */

    const revealItems =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "active"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealItems.forEach(
            (item) => {

                revealObserver.observe(
                    item
                );

            }
        );

    } else {

        revealItems.forEach(
            (item) => {

                item.classList.add(
                    "active"
                );

            }
        );

    }


    /* =========================
       BACK TO TOP
    ========================== */

    const handleScroll = () => {

        if (!backToTop) {
            return;
        }


        if (window.scrollY > 500) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    };


    window.addEventListener(
        "scroll",
        handleScroll,
        {
            passive: true
        }
    );


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }

});
