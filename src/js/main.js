import Alpine from "alpinejs";

Alpine.store("menu", {
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
