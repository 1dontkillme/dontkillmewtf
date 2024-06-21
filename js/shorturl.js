document.getElementById('url-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const urlInput = document.getElementById('url-input');
    const originalUrl = urlInput.value;
    const shortenedUrl = generateShortUrl();

    saveUrl(originalUrl, shortenedUrl);
    displayUrls();
    urlInput.value = '';
});

function generateShortUrl() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function saveUrl(original, short) {
    let urls = JSON.parse(localStorage.getItem('urls')) || [];
    urls.push({ original: original, short: short });
    localStorage.setItem('urls', JSON.stringify(urls));
}

function displayUrls() {
    const urlsContainer = document.getElementById('shortened-urls');
    urlsContainer.innerHTML = '';
    let urls = JSON.parse(localStorage.getItem('urls')) || [];
    urls.forEach(url => {
        const urlElement = document.createElement('div');
        urlElement.classList.add('short-url');
        urlElement.innerHTML = `<a href="${url.original}" target="_blank">${url.short}</a>`;
        urlsContainer.appendChild(urlElement);
    });
}

document.addEventListener('DOMContentLoaded', displayUrls);