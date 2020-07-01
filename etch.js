/* Clear Button */
const upperbody = document.querySelector("#canvas");

const center = document.createElement("center");

// clear button initialization
const resetbtn = document.createElement('button');

resetbtn.textContent = "Clear Grid";
resetbtn.id = "clrbtn";
resetbtn.type = "button";

const newgridbtn = document.createElement('button');

newgridbtn.textContent = "New Grid";
newgridbtn.id = "newbtn";
newgridbtn.type = "button";

const header = document.createElement('h1');
header.textContent = "Etch-a-Sketch";
document.querySelector('body').append(header);


upperbody.append(center);
center.appendChild(header);
center.appendChild(resetbtn);
center.appendChild(newgridbtn);


/* Grid Part */
const container = document.querySelector("#container");

function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            let box = document.createElement('div');
            box.id = "table";
            box.setAttribute('class', "grid");
            box.setAttribute("style", `width: ${600/x}px; height:${600/x}px`);
            container.append(box);
        };
    };
};

let initialGridVal = 16;
createGrid(initialGridVal);

// event listener for hovering
document.querySelectorAll('.grid').forEach(i => {
    i.addEventListener("mouseover", mouseOver)
});

function mouseOver(){
    this.classList.add("hovered");
}

// event listener for clear button
document.getElementById("clrbtn").addEventListener("click", function(){
    document.querySelectorAll('.grid').forEach(i => {
        i.classList.remove("hovered");
    });
});

document.getElementById("newbtn").addEventListener("click", function(){
    while(true){
        let newGridValstr = prompt("What's your new grid size from 1 to 100?:");
        newGridVal = Number(newGridValstr);
        if((newGridVal >= 1 && newGridVal <= 100) || newGridValstr === null){
            break;
        }
    }

    remove_board();
    createGrid(newGridVal);

    // event listener for hovering
    document.querySelectorAll('.grid').forEach(i => {
        i.addEventListener("mouseover", mouseOver)
    });

    function mouseOver(){
        this.classList.add("hovered");
    }

    // event listener for clear button
    document.getElementById("clrbtn").addEventListener("click", function(){
        document.querySelectorAll('.grid').forEach(i => {
            i.classList.remove("hovered");
        });
    });
});

function remove_board(){
    let arr = document.getElementsByClassName('grid');

    while(arr[0]){
        arr[0].parentNode.removeChild(arr[0]);
    }
}
