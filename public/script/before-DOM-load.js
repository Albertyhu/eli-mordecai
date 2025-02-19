document.addEventListener("astro:page-load", () => {
  const firstSection = document.querySelector("section");
  setTimeout(() => {
    if (firstSection)
      firstSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 1500);
  //firstSection.scrollIntoView({ behavior: "smooth", block: "start" });
});
