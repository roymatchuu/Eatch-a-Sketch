const container = document.querySelector("#container");

// let x = document.createElement('p');
// x.textContent = "YUH";

// container.appendChild(x);

function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            let box = document.createElement('div');
            box.setAttribute('class', "grid");
            box.setAttribute("style", `width: ${600/x}px; height:${600/x}px`);
            container.append(box);
        };
    };


    // box.style.width = 600/x + "px";
};

createGrid(16);


document.querySelectorAll('.grid').forEach(i => {
    i.addEventListener("mouseover", mouseOver)
});

function mouseOver(){
    this.classList.add("hovered");
}
