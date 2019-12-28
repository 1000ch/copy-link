document.addEventListener('DOMContentLoaded', () => {
  const plainText = document.querySelector('#plain-text');
  const plain = document.querySelector('#plain');
  const htmlText = document.querySelector('#html-text');
  const html = document.querySelector('#html');
  const markdownText = document.querySelector('#markdown-text');
  const markdown = document.querySelector('#markdown');

  chrome.tabs.query({
    currentWindow: true,
    active: true
  }, tabs => {
    const { title, url } = tabs[0];

    plainText.value = `${title} ${url}`;
    htmlText.value = `<a href="${url}">${title}</a>`;
    markdownText.value = `[${title}](${url})`;

    plain.addEventListener('click', () => {
      plainText.select();
      document.execCommand('copy');
    });

    html.addEventListener('click', () => {
      htmlText.select();
      document.execCommand('copy');
    });

    markdown.addEventListener('click', () => {
      markdownText.select();
      document.execCommand('copy');
    });
  });
});
