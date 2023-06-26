import { marked } from 'marked';
import { useState, useEffect, SetStateAction } from 'react';
import './style.css'

const defaultMarkdown = `# Welcome to my Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// This is multi-line code:

function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
    }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
    - Some are bulleted.
    - With different indentation levels.
        - That look like this.
        
        
1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...

- Even if you use dashes or asterisks.`;

export const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = useState(defaultMarkdown);

    useEffect(() => {
        const preview = document.getElementById('preview');
        if (preview) {
            preview.innerHTML = marked(markdown);
        }
    }, [markdown]);

    const handleMarkdownChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setMarkdown(e.target.value);
    };

    return (
        <main>
            <div className="container">
                <div className="editor">
                    <textarea id="editor" value={markdown} onChange={handleMarkdownChange}></textarea>
                    <span>Modify me</span>
                </div>
                <div className="preview">
                    <div id="preview"></div>
                </div>
            </div>
        </main>

    );
};
