(function () {
    function downloadPDF(url, filename) {
        fetch(url)
            .then(function (res) { return res.blob(); })
            .then(function (blob) {
                var blobUrl = URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = blobUrl;
                a.download = decodeURIComponent(filename);
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                setTimeout(function () { URL.revokeObjectURL(blobUrl); }, 1000);
            })
            .catch(function () { window.location.href = url; });
    }
    window.downloadPDF = downloadPDF;

    document.addEventListener('DOMContentLoaded', function () {
        var btn = document.querySelector('.site-nav-toggle');
        var panel = document.getElementById('site-nav-panel');
        var headerEl = document.querySelector('.site-header');
        if (!btn || !panel) return;
        function closeMenu() {
            panel.classList.remove('is-open');
            btn.setAttribute('aria-expanded', 'false');
        }
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var open = panel.classList.toggle('is-open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        panel.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                closeMenu();
            });
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && panel.classList.contains('is-open')) {
                closeMenu();
                btn.focus();
            }
        });
        document.addEventListener('click', function (e) {
            if (!panel.classList.contains('is-open')) return;
            if (headerEl && headerEl.contains(e.target)) return;
            closeMenu();
        });
    });
})();
