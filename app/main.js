if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('/app/sw.js').then(function (reg) {
        reg.pushManager.subscribe({
            userVisibleOnly: true
        }).then(function (sub) {
        });
    }).catch(function (error) {
    });
}