function showToast(message) {
    const toast = document.getElementById('toastCopy');
    toast.textContent = message || "✓ Nomor +62 821-9456-5774 tersalin!";
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

const copyBtn = document.getElementById('copyWaBtn');
const waNumber = "+6282194565774";

if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(waNumber).then(() => {
                showToast("✓ Nomor WA Shopee SPinjam tersalin: +62 821-9456-5774");
            }).catch(() => fallbackCopy(waNumber));
        } else {
            fallbackCopy(waNumber);
        }
    });
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showToast("✓ Nomor WA tersalin: +62 821-9456-5774");
    } catch (err) {
        showToast("✗ Gagal menyalin, silakan salin manual");
    }
    document.body.removeChild(textarea);
}

const helpItems = document.querySelectorAll('.help-item');
helpItems.forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        if (url) window.open(url, '_blank');
    });
});

console.log("✅ CS Core Shopee SPinjam | WA: +62 821-9456-5774 | Siap terindeks Google");
