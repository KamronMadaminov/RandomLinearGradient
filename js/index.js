const btn = document.getElementById("btn");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    const color2 = '#' + Math.floor(Math.random()*16777215).toString(16);
    function gradient() {
        const linear_gradient = `linear-gradient(to right ,${color} 30%, ${color2} 100%)`;
        return linear_gradient;
    }

    body.style.background = gradient();
})

