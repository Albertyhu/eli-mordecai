document.addEventListener("astro:page-load", () => {
  const StaticNav = document.getElementById("static_nav");
  const MinimizedHeader = document.getElementById("mininized-header");
  const MobileMenu = document.getElementById("MobileMenu");

  //StaticMobileIcon is the Mobile Icon that exist on the static nav bar
  const StaticMobileIcon = document.getElementById("staticMobileIcon");

  //MinimizedMobileIcon is the Mobile Icon that exist on the minmized nav bar that stays fixed on the screen
  const MinimizedMobileIcon = document.getElementById("minimizedMobileIcon");

  const CloseMobileMenuLink = document.getElementById("CloseMobileMenuLink");

  window.addEventListener("scroll", () => {
    let position = StaticNav?.getBoundingClientRect().bottom;
    if (position < 0) {
      MinimizedHeader.classList.remove("hidden_minimized_nav");
    } else {
      if (!MinimizedHeader.classList.contains("hidden_minimized_nav"))
        MinimizedHeader.classList.add("hidden_minimized_nav");
    }
  });

  const ToggleMobileMenu = () => {
    if (!MobileMenu.classList.contains("closedMobileMenu")) {
      MobileMenu.classList.add("closedMobileMenu");
    } else {
      MobileMenu.classList.remove("closedMobileMenu");
    }
  };

  StaticMobileIcon.addEventListener("mousedown", ToggleMobileMenu);
  MinimizedMobileIcon.addEventListener("mousedown", ToggleMobileMenu);

  CloseMobileMenuLink.addEventListener("mousedown", () => {
    if (!MobileMenu.classList.contains("closedMobileMenu")) {
      MobileMenu.classList.add("closedMobileMenu");
    }
  });

  const CloseMobileMenuIfClickedOutside = (evt) => {
    if (
      !MobileMenu.classList.contains("closedMobileMenu") &&
      !MobileMenu?.contains(evt.target) &&
      !StaticMobileIcon?.contains(evt.target) &&
      !MinimizedMobileIcon?.contains(evt.target)
    ) {
      MobileMenu.classList.add("closedMobileMenu");
    }
  };

  window.addEventListener("mousedown", CloseMobileMenuIfClickedOutside);
});
