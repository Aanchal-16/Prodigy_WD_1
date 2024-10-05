// Change nav background when scrolling
window.onscroll = () => {
  document.querySelector("nav").style.backgroundColor =
    window.scrollY > 50 ? "lightcoral" : "burlywood";
};

// Change menu item styles on hover
document.querySelectorAll("nav a").forEach((item) => {
  item.onmouseenter = () => (item.style.color = "white");
  item.onmouseleave = () => (item.style.color = "black");
});
