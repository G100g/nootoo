export function showNotification(body) {
    Notification.requestPermission(function(result) {
        if (result === "granted") {
            navigator.serviceWorker.ready.then(function(registration) {
                registration.showNotification("Remember to...", {
                    body,
                    tag: new Date().getTime(),
                    requireInteraction: true,
                    actions: [{ action: "done", title: "Done" }],
                    icon: "/icon-152x152.png",
                    badge: "/badge.png"
                });
            });
        }
    });
}
