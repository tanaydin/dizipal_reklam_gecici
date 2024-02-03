// ==UserScript==
// @name         Dizipal video oncesi reklam gecici
// @namespace    http://dizipal732.com/
// @version      2024-02-03
// @description  Dizipal video oncesi reklamlari gecmek icin bir user script
// @author       You
// @match        https://dizipal*
// @icon         https://dizipal732.com/favicon-32x32.png
// @grant        none
// ==/UserScript==


(function() {
  'use strict';

  function dizipalClean() {
      let skipButton = document.getElementById("skipButton");

      if (skipButton) {
          if (skipButton.style.display == "none") {
              window.setTimeout(dizipalClean, 2000);
          } else {
              skipButton.removeAttribute("disabled");
              skipButton.click();
              window.setTimeout(dizipalClean, 250);
          }
      }
  }
  if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", dizipalClean);
  } else {
      dizipalClean();
  }
})();