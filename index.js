
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".oreuibutton").forEach(button => {
        button.addEventListener("mousedown", function() {
            this.style.transform = 'translateY(4px)';
            this.style.boxShadow = '0 1px 0 rgba(0,0,0,0.3)';
        });
        button.addEventListener("mouseup", function() {
            this.style.transform = '';
            this.style.boxShadow = '0 1px 0 rgba(0,0,0,0.3)';
        });
    })
})