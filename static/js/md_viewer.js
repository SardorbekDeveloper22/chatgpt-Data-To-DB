
// Markdowndan HTML-ga o'tkazish funktsiyasi
function convertMarkdownToHTML(markdownText) {
    const converter = new showdown.Converter();
    return converter.makeHtml(markdownText);
}

// Matnni markdowndan HTML-ga o'girib, .markdownContent div-iga joylashtirish
const markdownText = document.querySelectorAll(".bott");
markdownText.forEach((item) => {
    let text_data = item.textContent
    const htmlContent = convertMarkdownToHTML(text_data);
    item.innerHTML = htmlContent;
});

document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
    });
});
