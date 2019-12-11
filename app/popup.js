document.addEventListener('DOMContentLoaded', () => {
  const text = document.querySelector('input');
  const plain = document.querySelector('#plain');
  const html = document.querySelector('#html');
  const markdown = document.querySelector('#markdown');

  chrome.tabs.query({
    currentWindow: true,
    active: true
  }, tabs => {
    const { title, url } = tabs[0];

    plain.addEventListener('click', () => {
      text.value = `${title} ${url}`;
      text.select();
      document.execCommand('copy');
    });

    html.addEventListener('click', () => {
      text.value = `<a href="${url}">${title}</a>`;
      text.select();
      document.execCommand('copy');
    });

    markdown.addEventListener('click', () => {
      text.value = `[${title}](${url})`;
      text.select();
      document.execCommand('copy');
    });
  });
});
