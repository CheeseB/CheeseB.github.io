const useHtmlCodeParser = (html: string) => {
  const htmlParser = new DOMParser();
  const htmlDocument = htmlParser.parseFromString(html, 'text/html');
  const container = htmlDocument.querySelectorAll('.gatsby-highlight');

  const codeHeader = `
	<div class="code-header">
		<span class="red btn"></span>
		<span class="yellow btn"></span>
		<span class="green btn"></span>
	</div>`;

  container.forEach(item => {
    const codeBlock = item.querySelector('code');
    const codes = codeBlock?.innerHTML.split('\n');
    const processedCodes = codes?.reduce(
      (prevCodes, curCode) => prevCodes + `<div class='line'>${curCode}</div>`,
      '',
    );
    const codeBody = `<div class="code-body">${processedCodes}</div>`;

    item.insertAdjacentHTML('afterbegin', codeHeader);
    codeBlock!.innerHTML = codeBody;
  });

  const serializer = new XMLSerializer();
  const htmlString = serializer.serializeToString(htmlDocument);

  return htmlString;
};

export default useHtmlCodeParser;
