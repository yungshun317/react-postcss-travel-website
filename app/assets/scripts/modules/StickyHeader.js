class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector(".site-header");
        this.events();
    }

    events() {
        window.addEventListener("scroll", () => this.runOnScroll());
    }

    runOnScroll() {
        if (window.scrollY > 60) {
            this.siteHeader.classList.add("site-header--dark")
        } else {
            this.siteHeader.classList.remove("site-header--dark")
        }
    }
}

export default StickyHeader;