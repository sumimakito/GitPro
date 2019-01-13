(function() {
  function restore() {
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
        chrome.browserAction.setIcon({
          path: items.enabled ? "icon48.png" : "icon_d48.png"
        });
        jQuery("#switchEnabled").prop("checked", items.enabled);
        jQuery("#switchShakeOnHoverEnabled").prop("checked", items.shakeOnHoverEnabled);
        jQuery("#switchAnimatedStarEnabled").prop("checked", items.animatedStarEnabled);
        jQuery("#switchRainbowBadgeEnabled").prop("checked", items.rainbowBadgeEnabled);
        jQuery("#colorBadgeColor").val(items.badgeColor ? items.badgeColor : "#6f42c1");
        jQuery("#textBadge").val(items.badgeText ? items.badgeText : "");
        if (items.enabled) {
          jQuery("#moreSettings").show(0);
        } else {
          jQuery("#moreSettings").hide(0);
        }
        if (!items.rainbowBadgeEnabled) {
          jQuery("#colorBadgeColorContainer").show(0);
        } else {
          jQuery("#colorBadgeColorContainer").hide(0);
        }
      }
    );
  }

  function save() {
    chrome.storage.sync.set(
      {
        enabled: jQuery("#switchEnabled").prop("checked"),
        shakeOnHoverEnabled: jQuery("#switchShakeOnHoverEnabled").prop("checked"),
        animatedStarEnabled: jQuery("#switchAnimatedStarEnabled").prop("checked"),
        rainbowBadgeEnabled: jQuery("#switchRainbowBadgeEnabled").prop("checked"),
        badgeColor: jQuery("#colorBadgeColor").val(),
        badgeText: jQuery("#textBadge").val() !== "" ? jQuery("#textBadge").val() : null
      },
      function() {
        restore();
      }
    );
  }

  jQuery("input").change(function() {
    save();
  });

  jQuery("#textBadge").focusout(function() {
    save();
  });

  restore();
})();
