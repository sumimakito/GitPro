(function() {
  chrome.storage.sync.get(
    {
      enabled: true,
      shakeOnHoverEnabled: true,
      animatedStarEnabled: true,
      rainbowBadgeEnabled: true,
      badgeColor: null,
      badgeText: null
    },
    function(items) {
      if (!items.enabled) return;
      const proContainer = jQuery("#js-pjax-container > div > div.h-card.col-3.float-left.pr-3 > div.border-top.border-gray-light.py-3");
      const proIcon = jQuery(proContainer).find("svg");
      const proBadge = jQuery(proContainer).find("span");

      if (items.shakeOnHoverEnabled) {
        proContainer.addClass("shake-hard");
      }
      if (items.animatedStarEnabled) {
        proIcon.addClass("git-pro-rotating");
      }
      if (items.rainbowBadgeEnabled) {
        proBadge.addClass("git-pro-badge-text-optim");
        proBadge.addClass("git-pro");
      } else if (items.badgeColor) {
        proBadge.addClass("git-pro-badge-text-optim");
        proBadge.removeClass("bg-purple");
        proBadge.css({ backgroundColor: items.badgeColor });
      }
      if (items.badgeText) {
        proBadge.text(items.badgeText);
      }
    }
  );
})();
