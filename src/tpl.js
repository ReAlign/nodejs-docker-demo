const quoteStyle = 'style="color: #bbb;"';
const preStyle = 'style="background: #eee; border-radius: 4px; padding: 20px;"';

module.exports = (data = {}) =>
  `
  <h2>${data.title}</h2>
  <b ${quoteStyle}>|</b>&nbsp;&nbsp;
  <i ${quoteStyle}>${data.statusText} - ${data.date}</i>
  <p>The data is:</p>
  ${
    data.result
      ? `<code>
          <pre ${preStyle}>${JSON.stringify(data.result, null, 4)}</pre>
        </code>`
      : 'None'
  }
`;