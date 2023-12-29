import { astToHtmlString } from "@graphcms/rich-text-html-renderer";

const SHAREDCLASSES = "dark:text-white";
const BODYCLASSES = "text-lg text-gray-700";

const RENDERERS = {
  h1: ({ children }) =>
    `<h1 class="mb-4 text-5xl text-gray-900  ${SHAREDCLASSES}">${children}</h1>`,
  h2: ({ children }) =>
    `<h2 class="mb-4 text-4xl text-gray-900 ${SHAREDCLASSES}">${children}</h2>`,
  h3: ({ children }) =>
    `<h3 class="text-3xl ${SHAREDCLASSES}">${children}</h3>`,
  h4: ({ children }) =>
    `<h4 class="text-2xl ${SHAREDCLASSES}">${children}</h4>`,
  h5: ({ children }) => `<h5 class="text-xl ${SHAREDCLASSES}">${children}</h5>`,
  h6: ({ children }) =>
    `<h6 class="text-large ${SHAREDCLASSES}">${children}</h6>`,
  p: ({ children }) =>
    `<p class="my-4 text-lg ${BODYCLASSES} ${SHAREDCLASSES}">${children}</p>`,
  a: ({ children, href }) =>
    `<a class="my-4 text-lg underline italic ${BODYCLASSES} ${SHAREDCLASSES}" href="${href}" target="_blank">${children}</a>`,
  ul: ({ children }) =>
    `<ul class="list-disc list-inside my-4 text-lg ${BODYCLASSES} ${SHAREDCLASSES}">${children}</ul>`,
  ol: ({ children }) =>
    `<ol class="list-decimal list-inside my-4 text-lg ${BODYCLASSES} ${SHAREDCLASSES}">${children}</ol>`,
  li: ({ children }) =>
    `<li class="my-2 text-lg ${BODYCLASSES} ${SHAREDCLASSES}">${children}</li>`,
  code: ({ children }) =>
    `<code class="bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-sm ${SHAREDCLASSES}">${children}</code>`,
  code_block: ({ children }) =>
    `<pre class="bg-gray-100 dark:bg-gray-800 overflow-y-scroll rounded-md p-2 text-sm ${SHAREDCLASSES}">${children}</pre>`,
};

const renderContent = (post) => {
  const content = post?.content?.raw?.children;
  return astToHtmlString({
    content: content,
    renderers: RENDERERS,
  });
};

export default renderContent;
