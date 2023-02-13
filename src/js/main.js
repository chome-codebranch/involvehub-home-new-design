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

Alpine.start();
