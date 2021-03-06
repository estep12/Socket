var socket = io();

            socket.on('show_notification', function (data) {
                showDesktopNotification(data.title, data.message, data.icon);
            });

            function setNotification() {
                showDesktopNotification('Ben', 'Desktop Notification..!', '/Ben.jpg');
                sendNodeNotification('Ben', 'Browser Notification..!', '/Ben.jpg');
            }

            var Notification = window.Notification || window.mozNotification || window.webkitNotification;
            Notification.requestPermission(function (permission) {
            });

            function requestNotificationPermissions() {
                if (Notification.permission !== 'denied') {
                    Notification.requestPermission(function (permission) {
                    });
                }
            }

            function showDesktopNotification(message, body, icon, sound, timeout) {
                if (!timeout) {
                    timeout = 4000;
                }
                requestNotificationPermissions();
                var instance = new Notification(
                        message, {
                            body: body,
                            icon: icon,
                            sound: sound
                        }
                );
                instance.onclick = function () {
                    // Something to do
                };
                instance.onerror = function () {
                    // Something to do
                };
                instance.onshow = function () {
                    // Something to do
                };
                instance.onclose = function () {
                    // Something to do
                };
                if (sound)
                {
                    instance.sound;
                }
                setTimeout(instance.close.bind(instance), timeout);
                return false;
            }


            function sendNodeNotification(title, message, icon) {
                socket.emit('new_notification', {
                    message: message,
                    title: title,
                    icon: icon,
                });
            }