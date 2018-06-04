export default({
    set(context) {
        var color = context.$store.getters.getColor;
        document.getElementsByTagName("BODY")[0].style.backgroundColor = color;
    }
})