'use strict';

module.exports = Franz => {
  const getMessages = function getMessages() {
    const count = document.querySelectorAll('.groups-and-users .list-item-unread-indicator').length;

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};