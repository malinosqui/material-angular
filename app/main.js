if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/app/sw.js').then(function (reg) {
        reg.pushManager.subscribe({
            userVisibleOnly: true
        }).then(function (sub) {
        });
    }).catch(function (error) {
    });
}