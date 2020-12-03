// @ts-nocheck
let btn = document.querySelector('#press');
let colors = ['#0E8008', '#1F1BE6', '#800880', '#808080', '#A9AF04'];
try {
  btn.onclick = () => {
    localStorage.setItem(
      localStorageKey, // ! localStorageKey from 'get-note-contents.js'
      JSON.stringify([
        {
          id: '0000',
          name: 'Todo',
          content: `
## Todo:

### Must do
- [ ] Função Editar
- [x] Criar o css certo
- [ ] Colocar o manifest.json
- [ ] Criar o seletor da div#editable
    click para editar :)
- [ ] Fix: modal not closing

### Should do
*nothing :)*

### Can do
- [ ] Marcar as checkboxes por fora
- [ ] ? Dark mode vs light mode ?

        `,
          color: '#0e8008',
        },
        {
          id: '0001',
          name: 'Big Test',
          content: `
# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)
        `,
          color: '#A9AF04',
        },
        {
          id: '0002',
          name: 'note 3',
          content: `# note 3 title`,
          color: '#800880',
        },
        {
          id: '0003',
          name: 'note 4',
          content: `# note 4 title`,
          color: '#808080',
        },
        {
          id: '0004',
          name: 'note 5',
          content: `# note 5 title`,
          color: '#1F1BE6',
        },
      ])
    );

    localStorage.setItem(currentKey, '0000'); // ! currentKey from 'get-note-contents.js'
  };
} catch (err) {}
