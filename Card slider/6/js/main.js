document.addEventListener("DOMContentLoaded", function () {
  // If using a mobile-sized width, remove hover-flip animation from cards and just show the back
  if (window.innerWidth > 800) {
    var flipContainers = document.querySelectorAll(".flip-container");
    for (i = 0; i < flipContainers.length; i++) {
      flipContainers[i].classList.remove("hover");
    }
  }

  // At window resize, again check if hover-flip animation needs to be added or removed from cards
  window.addEventListener("resize", function () {
    if (window.innerWidth > 800) {
      var flipContainers = document.querySelectorAll(".flip-container");
      for (i = 0; i < flipContainers.length; i++) {
        flipContainers[i].classList.remove("hover");
      }
    } else if (window.innerWidth <= 800) {
      var flipContainers = document.querySelectorAll(".flip-container");
      for (i = 0; i < flipContainers.length; i++) {
        flipContainers[i].classList.add("hover");
      }
    }
  });

  //After half a second, slide card sheet onto the screen
  setTimeout(function () {
    var sheet = document.querySelector(".card-sheet");
    sheet.classList.toggle("card-slide");
  }, 500);

  //Set up some custom features for the modals
  nanoModal.customShow = function (defaultShow, modalAPI) {
    defaultShow();
    modalAPI.overlay.el.style.opacity = 0.5;
    modalAPI.modal.el.style.opacity = 1;
  };
  nanoModal.customHide = function (defaultHide, modalAPI) {
    modalAPI.overlay.el.style = opacity = 0;
    modalAPI.modal.el.style.opacity = 0;
    if (document.body.style.transition !== undefined) {
      setTimeout(defaultHide, 500);
    } else {
      defaultHide;
    }
  };

  //Who card button and modal functionality
  var whoButton = document.getElementById("who-button");
  var whoModal = nanoModal(document.getElementById("who-modal"), {
    buttons: [],
    overlayClose: true,
  });
  whoButton.addEventListener("click", function () {
    whoModal.show();
  });

  //Skill card button and modal functionality
  var skillButton = document.getElementById("skill-button");
  var skillModal = nanoModal(document.getElementById("skill-modal"), {
    buttons: [],
    overlayClose: true,
  });
  skillButton.addEventListener("click", function () {
    skillModal.show();
  });

  //Work card button and modal functionality
  var workButton = document.getElementById("work-button");
  var workModal = nanoModal(document.getElementById("work-modal"), {
    buttons: [],
    overlayClose: true,
  });
  workButton.addEventListener("click", function () {
    workModal.show();
  });

  //Contact card button and modal functionality
  var contactButton = document.getElementById("contact-button");
  var contactModal = nanoModal(document.getElementById("contact-modal"), {
    buttons: [],
    overlayClose: true,
  });
  contactButton.addEventListener("click", function () {
    contactModal.show();
  });
});
