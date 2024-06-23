document.addEventListener("astro:page-load", () => {
  let domReady = (cb) => {
    document.readyState === "interactive" || document.readyState === "complete"
      ? cb()
      : document.addEventListener("DOMContentLoaded", cb);
  };

  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = "visible";
    document.body.style.opacity = "1.0";
  });
});
