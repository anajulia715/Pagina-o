const gifsPerPage = 6;
let currentPage = 1;

const gifs = [
"https://i.pinimg.com/originals/a0/bc/a9/a0bca9e4b3808346d31a37c831dc0459.gif",
"https://media3.giphy.com/media/dvdcBNbAiNVT9Z0iwP/200w.gif?cid=6c09b952f0lfrfhtxrt2uhadyt33g1iipfkukelshmyy5ji7&ep=v1_gifs_search&rid=200w.gif&ct=g",
"https://www.loomly.com/hs-fs/hubfs/Imported_Blog_Media/earth-Apr-03-2024-12-19-31-1897-AM.gif?width=540&height=540&name=earth-Apr-03-2024-12-19-31-1897-AM.gif",
"https://www.cbc.ca/kidsnews/images/GIPHY5.gif",
"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRsgJ7b-fvJgKPvt4hZ_iWa1qZMoqpU5unZScp2BDoFCWPPxfUbyq84IcCfw2Ph6hhuVumrArCP_CGiah-l1xE2nYLnPb5ZOT56aF60QRfAQMoi78qfVzW8izY6UzhNTC0PWJpskSbhp4/s1600/gifs-on-cli.gif",
"https://images.ctfassets.net/b4k16c7lw5ut/61X6cPeCANHior5BTSkvCQ/3499b68fa4eddd88b0b026682ed14960/Hello_GIF.gif",
"https://i.gifer.com/Nry4.gif",
"https://mir-s3-cdn-cf.behance.net/project_modules/hd/6e20ba80486129.5ce2e67ba3555.gif",
"https://lh5.googleusercontent.com/-4p6h5-4x5jk/UOoliUsdTRI/AAAAAAAAUK0/qGpbgQDy-k0/s270/bart.gif",
"https://i.pinimg.com/originals/32/2c/a1/322ca12a94caec419c52939f31089000.gif",
]

function showPage(page) {
    const start = (page - 1) * gifsPerPage;
    const end = start + gifsPerPage;
    const gifsToShow = gifs.slice(start, end);

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';
    gifsToShow.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif;
        gifContainer.appendChild(img);
    });

    document.getElementById('page-info').innerText = `Page ${page}`;
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = end >= gifs.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage * gifsPerPage < gifs.length) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);