const container = document.getElementById("container");
const themeBtn = document.querySelector('.btn');
const circlesArr = [];
const rows = 15;
const cols = 15;

// create circles
for (let i = 0; i < rows; i += 1) {
  circlesArr[i] = [];

  for (j = 0; j < cols; j += 1) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    container.appendChild(circle);
    circlesArr[i].push(circle);
  }
}

circlesArr.forEach((cols, i) => {
  cols.forEach((circle, j) => {
    circle.addEventListener("click", () => {
      growCircle(i, j);
    });
  });
});

function growCircle(i, j) {
  if (circlesArr[i] && circlesArr[i][j]) {
    if (!circlesArr[i][j].classList.contains("grow")) {
        circlesArr[i][j].classList.add("grow");
        
      setTimeout(() => {
        growCircle(i - 1, j);
        growCircle(i + 1, j);
        growCircle(i, j + 1);
        growCircle(i, j - 1);
      }, 100);
        
        setTimeout(() => {
            circlesArr[i][j].classList.remove("grow");
        }, 300)
    }
  }
};

function pageTransitions() {
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')
})
}

    pageTransitions();