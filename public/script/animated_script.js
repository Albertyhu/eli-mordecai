document.addEventListener("astro:page-load", () => {
  /* for the animations throughout the webpage*/
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("fadeInFromTop")) {
          entry.target.classList.remove("fadeOutFromTopAnim");
        }
        if (entry.target.classList.contains("RotateInTag")) {
          entry.target.children[0].classList.remove("RotateOutAnim");
        }
        if (entry.target.classList.contains("fallingTag")) {
          entry.target.classList.remove("startingFallingAnim");
        }
        if (entry.target.classList.contains("fadeInTag")) {
          entry.target.classList.remove("fadeOut");
        }
        if (entry.target.classList.contains("fadeInFromBottomTag")) {
          entry.target.classList.remove("fadeOutIntoBottom");
        }
        if (entry.target.classList.contains("childrenFadeInFromBottomTag")) {
          for (let i = 0; i < entry.target.children.length; i++) {
            entry.target.children[i].classList.remove("fadeOutIntoBottom");
          }
        }
        if (entry.target.classList.contains("rotateUpTag")) {
          entry.target.classList.remove("rotateDown");
        }
      } else {
        if (entry.target.classList.contains("fadeInFromTop")) {
          entry.target.classList.add("fadeOutFromTopAnim");
        }
        if (entry.target.classList.contains("RotateInTag")) {
          entry.target.children[0].classList.add("RotateOutAnim");
        }
        if (entry.target.classList.contains("fallingTag")) {
          entry.target.classList.add("startingFallingAnim");
        }
        if (entry.target.classList.contains("fadeInTag")) {
          entry.target.classList.add("fadeOut");
        }
        if (entry.target.classList.contains("fadeInFromBottomTag")) {
          entry.target.classList.add("fadeOutIntoBottom");
        }
        if (entry.target.classList.contains("childrenFadeInFromBottomTag")) {
          for (let i = 0; i < entry.target.children.length; i++) {
            entry.target.children[i].classList.add("fadeOutIntoBottom");
          }
        }
        if (entry.target.classList.contains("rotateUpTag")) {
          entry.target.classList.add("rotateDown");
        }
      }
    });
  };
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(callback, options);
  const fadeInFromTop = document.getElementsByClassName("fadeInFromTop");
  for (var i = 0; i < fadeInFromTop.length; i++) {
    observer.observe(fadeInFromTop[i]);
  }
  const RotateIn = document.getElementsByClassName("RotateInTag");
  for (var i = 0; i < RotateIn.length; i++) {
    observer.observe(RotateIn[i]);
  }

  const FallFromTop = document.getElementsByClassName("fallingTag ");
  for (var i = 0; i < FallFromTop.length; i++) {
    observer.observe(FallFromTop[i]);
  }

  const FadeIn = document.getElementsByClassName("fadeInTag");
  for (var i = 0; i < FadeIn.length; i++) {
    observer.observe(FadeIn[i]);
  }

  const FadeInFromBottom = document.getElementsByClassName(
    "fadeInFromBottomTag"
  );
  for (var i = 0; i < FadeInFromBottom.length; i++) {
    observer.observe(FadeInFromBottom[i]);
  }

  const ChildrenFadeInFromBottom = document.getElementsByClassName(
    "childrenFadeInFromBottomTag"
  );
  for (var i = 0; i < ChildrenFadeInFromBottom.length; i++) {
    observer.observe(ChildrenFadeInFromBottom[i]);
  }

  const RotateUpTag = document.getElementsByClassName("rotateUpTag");
  for (var i = 0; i < RotateUpTag.length; i++) {
    observer.observe(RotateUpTag[i]);
  }
});
