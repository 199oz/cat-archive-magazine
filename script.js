const container = document.getElementById("container");
container.addEventListener("scroll", scrollHandler, false);

function scrollHandler(e) {
  const anchor = window.innerHeight;
  if (e.type === "scroll") {
    console.log(container.scrollTop);
    if (container.scrollTop >= 0 && container.scrollTop < anchor) {
      container.style.backgroundColor = "white";
    } else if (
      container.scrollTop >= anchor &&
      container.scrollTop < anchor * 2
    ) {
      container.style.backgroundColor = "rgb(117, 181, 255)";
    } else if (
      container.scrollTop >= anchor * 2 &&
      container.scrollTop < anchor * 3
    ) {
      container.style.backgroundColor = "#b7b2da";
    } else if (
      container.scrollTop >= anchor * 3 &&
      container.scrollTop < anchor * 4
    ) {
      container.style.backgroundColor = "#eb1b2b";
    } else if (
      container.scrollTop >= anchor * 4 &&
      container.scrollTop < anchor * 5
    ) {
      container.style.backgroundColor = "#5097d0";
    } else if (
      container.scrollTop >= anchor * 5 &&
      container.scrollTop < anchor * 6
    ) {
      container.style.backgroundColor = "#eb1b2b";
    }
  }
}
