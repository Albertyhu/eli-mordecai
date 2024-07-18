//This is an attempt to fix the FOUC issue
document.addEventListener("astro:page-load", () => {
  let domReady = (cb) => {
    document.readyState === "interactive" || document.readyState === "complete"
      ? cb()
      : document.addEventListener("DOMContentLoaded", cb);
  };

  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = "visible";
    document.body.style.setProperty("visibility", "visible", "important");
    document.body.style.setProperty("opacity", "1.0", "important");
    //document.body.style.opacity = "1.0";
  });
});
