import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";

Alpine.plugin(intersect);

Alpine.store("menu", {
    init() {
        Alpine.effect(() => {
            if (this.isOpen) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        });
    },
    isOpen: false,
    open: function () {
        this.isOpen = true;
    },
    close: function () {
        this.isOpen = false;
    },
    toggle: function () {
        this.isOpen = !this.isOpen;
    },
});

Alpine.store("visible", {
    isFooterVisible: false,
    text: function () {
        return this.isFooterVisible
            ? "Footer is visible"
            : "Footer is not visible";
    },
});

Alpine.store("getDemo", {
    getADemo: function () {
        // open url in new tab
        window.open(
            "https://us12.list-manage.com/contact-form?u=cd38d9f7d87cceca871f714ec&form_id=302e7aebb7557eed993a1a6d76857960",
            "_blank"
        );
    },
});

Alpine.start();
