  const coords = { x: 0, y: 0 };
  const colors = [
    "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d", "#e36e5c",
    "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d", "#b22c5e", "#ac265e",
    "#9c155f", "#950f5f", "#830060", "#7c0060", "#680060", "#60005f", "#48005f", "#3d005e"
  ];
  const circlesContainer = document.getElementById("circlesContainer");

  for (let i = 0; i < 40; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.backgroundColor = colors[i % colors.length];
    circlesContainer.appendChild(circle);
  }

  const circles = document.querySelectorAll(".circle");
  circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.opacity = 0; // Initially set opacity to 0 (invisible)
  });

  let isCursorStill = true;
  let lastX = 0;
  let lastY = 0;
  const movementThreshold = 40;
  let timeoutId = null;

  window.addEventListener("mousemove", function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

    const distanceX = Math.abs(coords.x - lastX);
    const distanceY = Math.abs(coords.y - lastY);
    const totalDistance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (totalDistance > movementThreshold) {
      isCursorStill = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    } else {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          isCursorStill = true;
          timeoutId = null;
        }, 200);
      }
    }

    lastX = coords.x;
    lastY = coords.y;
  });

  function animateCircles() {
    if (!isCursorStill) {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 5 + "px";
        circle.style.top = y - 4 + "px";
        circle.style.scale = (circles.length - index) / circles.length;
        circle.x = x;
        circle.y = y;
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
        circle.style.opacity = 1;
      });
    } else {
      circles.forEach(function (circle) {
        circle.style.opacity = 0;
      });
    }
    requestAnimationFrame(animateCircles);
  }
  setTimeout(animateCircles, 1000);