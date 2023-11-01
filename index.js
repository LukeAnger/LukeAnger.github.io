
let cube = document.querySelector('.cube');
// test
let cubeRotation = 0;
let hover = false;
let speed = 0.005;

setInterval(() => {
  speed = speed > 0 ? -(Math.random() * 0.005) : Math.random() * 0.005;
}, 10000);


function render() {
  if (hover) {
    cubeRotation = 0;
    return;
  }
  cubeRotation = cubeRotation + speed;



  cube.style.transform = 'rotateY(' + cubeRotation + 'rad) rotateX(' + cubeRotation*0.67 + 'rad) rotateZ(' + cubeRotation*0.33 + 'rad)';
  requestAnimationFrame(render);
}

hover ? null : requestAnimationFrame(render);

// I want to pause the animation when the mouse hovers over the cube
cube.addEventListener('mouseover', () => {
  cube.style.transform = '';
  hover = true;
});

// I want to resume the animation when the mouse leaves the cube
cube.addEventListener('mouseout', () => {
  hover = false;
  requestAnimationFrame(render);
});
