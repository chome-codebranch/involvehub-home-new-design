import Alpine from "alpinejs";

// window.Alpine = Alpine;


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
