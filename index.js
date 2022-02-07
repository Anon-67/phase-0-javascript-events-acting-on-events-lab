// Your code here
const dodger = document.getElementById("dodger");



document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers);
      
      if (left >0){
        dodger.style.left = `${left - 10}px`;
      }
    } else if (event.key === "ArrowRight") {
        const rightNumbers = dodger.style.left.replace("px", "");
        const right = parseInt(rightNumbers);
    
        if (right < 360) {
            dodger.style.left = `${right + 10}px`;
        }
      }
});

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers);
    
    if (left >0){
      dodger.style.left = `${left - 10}px`;
    }
}

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers);

    if (right < 360) {
        dodger.style.left = `${right + 10}px`;
    }
}