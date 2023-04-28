/**
 * @package: Xeptrix
 * @module: HTML Elements
 * @file: src/classes/html_types/html_elements.ts
 */

type HtmlElement = {
  element: string;
  description: string;
  category: string;
  parent: string;
  child: string;
  attributes: string;
  interface: string;
};

export const HtmlElement: HtmlElement[] = [
  {
    element: 'a',
    description: 'Hyperlink',
    category: 'flow;phrasing;interactive;palpable',
    parent: 'phrasing',
    child: 'transparent',
    attributes: 'globals;href;target;download;ping;rel;hreflang;type;referrerpolicy',
    interface: 'HTMLAnchorElement',
  },
  {
    element: 'abbr',
    description: 'Abbreviation',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'address',
    description: 'Contact information for a page orarticleelement',
    category: 'flow;palpable',
    parent: 'flow',
    child: 'flow',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'area',
    description: 'Hyperlink or dead area on an image map',
    category: 'flow;phrasing',
    parent: 'phrasing',
    child: 'empty',
    attributes: 'globals;alt;coords;shape;href;target;download;ping;rel;referrerpolicy',
    interface: 'HTMLAreaElement',
  },
  {
    element: 'article',
    description: 'Self-contained syndicatable or reusable composition',
    category: 'flow;sectioning;palpable',
    parent: 'flow',
    child: 'flow',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'aside',
    description: 'Sidebar for tangentially related content',
    category: 'flow;sectioning;palpable',
    parent: 'flow',
    child: 'flow',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'audio',
    description: 'Audio player',
    category: 'flow;phrasing;embedded;interactive;palpable',
    parent: 'phrasing',
    child: 'source;track;transparent',
    attributes: 'globals;src;crossorigin;preload;autoplay;loop;muted;controls',
    interface: 'HTMLAudioElement',
  },
  {
    element: 'b',
    description: 'Keywords',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'base',
    description: 'Base URL and default targetnavigableforhyperlinksandforms',
    category: 'metadata',
    parent: 'head',
    child: 'empty',
    attributes: 'globals;href;target',
    interface: 'HTMLBaseElement',
  },
  {
    element: 'bdi',
    description: 'Text directionality isolation',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'bdo',
    description: 'Text directionality formatting',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'blockquote',
    description: 'A section quoted from another source',
    category: 'flow;palpable',
    parent: 'flow',
    child: 'flow',
    attributes: 'globals;cite',
    interface: 'HTMLQuoteElement',
  },
  {
    element: 'body',
    description: 'Document body',
    category: 'none',
    parent: 'html',
    child: 'flow',
    attributes: 'globals;onafterprint;onbeforeprint;onbeforeunload;onhashchange;onlanguagechange;onmessage;onmessageerror;onoffline;ononline;onpagehide;onpageshow;onpopstate;onrejectionhandled;onstorage;onunhandledrejection;onunload',
    interface: 'HTMLBodyElement',
  },
  {
    element: 'br',
    description: '"Line break, e.g. in poem or postal address"',
    category: 'flow;phrasing',
    parent: 'phrasing',
    child: 'empty',
    attributes: 'globals',
    interface: 'HTMLBRElement',
  },
  {
    element: 'button',
    description: 'Button control',
    category: 'flow;phrasing;interactive;listed;labelable;submittable;form-associated;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals;disabled;form;formaction;formenctype;formmethod;formnovalidate;formtarget;name;popovertarget;popovertargetaction;type;value',
    interface: 'HTMLButtonElement',
  },
  {
    element: 'canvas',
    description: 'Scriptable bitmap canvas',
    category: 'flow;phrasing;embedded;palpable',
    parent: 'phrasing',
    child: 'transparent',
    attributes: 'globals;width;height',
    interface: 'HTMLCanvasElement',
  },
  {
    element: 'caption',
    description: 'Table caption',
    category: 'none',
    parent: 'table',
    child: 'flow',
    attributes: 'globals',
    interface: 'HTMLTableCaptionElement',
  },
  {
    element: 'cite',
    description: 'Title of a work',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'code',
    description: 'Computer code',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'col',
    description: 'Table column',
    category: 'none',
    parent: 'colgroup',
    child: 'empty',
    attributes: 'globals;span',
    interface: 'HTMLTableColElement',
  },
  {
    element: 'colgroup',
    description: 'Group of columns in a table',
    category: 'none',
    parent: 'table',
    child: 'col;template',
    attributes: 'globals;span',
    interface: 'HTMLTableColElement',
  },
  {
    element: 'data',
    description: 'Machine-readable equivalent',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals;value',
    interface: 'HTMLDataElement',
  },
  {
    element: 'datalist',
    description: 'Container for options forcombo box control',
    category: 'flow;phrasing',
    parent: 'phrasing',
    child: 'phrasing;option;script-supporting elements',
    attributes: 'globals',
    interface: 'HTMLDataListElement',
  },
  {
    element: 'dd',
    description: 'Content for correspondingdtelement(s)',
    category: 'none',
    parent: 'dl;div',
    child: 'flow',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'del',
    description: 'A removal from the document',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'transparent',
    attributes: 'globals;cite;datetime',
    interface: 'HTMLModElement',
  },
  {
    element: 'details',
    description: 'Disclosure control for hiding details',
    category: 'flow;interactive;palpable',
    parent: 'flow',
    child: 'summary;flow',
    attributes: 'globals;open',
    interface: 'HTMLDetailsElement',
  },
  {
    element: 'dfn',
    description: 'Defining instance',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'dialog',
    description: 'Dialog box or window',
    category: 'flow',
    parent: 'flow',
    child: 'flow',
    attributes: 'globals;open',
    interface: 'HTMLDialogElement',
  },
  {
    element: 'div',
    description: '"Generic flow container, or container for name-value groups indlelements"',
    category: 'flow;palpable',
    parent: 'flow;dl',
    child: 'flow',
    attributes: 'globals',
    interface: 'HTMLDivElement',
  },
  {
    element: 'dl',
    description: 'Association list consisting of zero or more name-value groups',
    category: 'flow;palpable',
    parent: 'flow',
    child: 'dt;dd;div;script-supporting elements',
    attributes: 'globals',
    interface: 'HTMLDListElement',
  },
  {
    element: 'dt',
    description: 'Legend for correspondingddelement(s)',
    category: 'none',
    parent: 'dl;div',
    child: 'flow',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'em',
    description: 'Stress emphasis',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'embed',
    description: 'Plugin',
    category: 'flow;phrasing;embedded;interactive;palpable',
    parent: 'phrasing',
    child: 'empty',
    attributes: 'globals;src;type;width;height; any',
    interface: 'HTMLEmbedElement',
  },
  {
    element: 'fieldset',
    description: 'Group of form controls',
    category: 'flow;listed;form-associated;palpable',
    parent: 'flow',
    child: 'legend;flow',
    attributes: 'globals;disabled;form;name',
    interface: 'HTMLFieldSetElement',
  },
  {
    element: 'figcaption',
    description: 'Caption forfigure',
    category: 'none',
    parent: 'figure',
    child: 'flow',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'figure',
    description: 'Figure with optional caption',
    category: 'flow;palpable',
    parent: 'flow',
    child: 'figcaption;flow',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'footer',
    description: 'Footer for a page or section',
    category: 'flow;palpable',
    parent: 'flow',
    child: 'flow',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'form',
    description: 'User-submittable form',
    category: 'flow;palpable',
    parent: 'flow',
    child: 'flow',
    attributes: 'globals;accept-charset;action;autocomplete;enctype;method;name;novalidate;rel;target',
    interface: 'HTMLFormElement',
  },
  {
    element: '"h1,h2,h3,h4,h5,h6"',
    description: 'Heading',
    category: 'flow;heading;palpable',
    parent: 'legend;summary;flow',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLHeadingElement',
  },
  {
    element: 'head',
    description: 'Container for document metadata',
    category: 'none',
    parent: 'html',
    child: 'metadata content',
    attributes: 'globals',
    interface: 'HTMLHeadElement',
  },
  {
    element: 'header',
    description: 'Introductory or navigational aids for a page or section',
    category: 'flow;palpable',
    parent: 'flow',
    child: 'flow',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'hgroup',
    description: 'Heading container',
    category: 'flow;palpable',
    parent: 'legend;summary;flow',
    child: 'h1;h2;h3;h4;h5;h6;script-supporting elements',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'hr',
    description: 'Thematic break',
    category: 'flow',
    parent: 'flow',
    child: 'empty',
    attributes: 'globals',
    interface: 'HTMLHRElement',
  },
  {
    element: 'html',
    description: 'Root element',
    category: 'none',
    parent: 'none',
    child: 'head;body',
    attributes: 'globals;manifest',
    interface: 'HTMLHtmlElement',
  },
  {
    element: 'i',
    description: 'Alternate voice',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'iframe',
    description: 'Child navigable',
    category: 'flow;phrasing;embedded;interactive;palpable',
    parent: 'phrasing',
    child: 'empty',
    attributes: 'globals;src;srcdoc;name;sandbox;allow;allowfullscreen;width;height;referrerpolicy;loading',
    interface: 'HTMLIFrameElement',
  },
  {
    element: 'img',
    description: 'Image',
    category: 'flow;phrasing;embedded;interactive;form-associated;palpable',
    parent: 'phrasing;picture',
    child: 'empty',
    attributes: 'globals;alt;src;srcset;sizes;crossorigin;usemap;ismap;width;height;referrerpolicy;decoding;loading;fetchpriority',
    interface: 'HTMLImageElement',
  },
  {
    element: 'input',
    description: 'Form control',
    category: 'flow;phrasing;interactive;listed;labelable;submittable;resettable;form-associated;palpable',
    parent: 'phrasing',
    child: 'empty',
    attributes: 'globals;accept;alt;autocomplete;checked;dirname;disabled;form;formaction;formenctype;formmethod;formnovalidate;formtarget;height;list;max;maxlength;min;minlength;multiple;name;pattern;placeholder;popovertarget;popovertargetaction;readonly;required;size;src;step;type;value;width',
    interface: 'HTMLInputElement',
  },
  {
    element: 'ins',
    description: 'An addition to the document',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'transparent',
    attributes: 'globals;cite;datetime',
    interface: 'HTMLModElement',
  },
  {
    element: 'kbd',
    description: 'User input',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'label',
    description: 'Caption for a form control',
    category: 'flow;phrasing;interactive;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals;for',
    interface: 'HTMLLabelElement',
  },
  {
    element: 'legend',
    description: 'Caption forfieldset',
    category: 'none',
    parent: 'fieldset',
    child: 'phrasing;heading content',
    attributes: 'globals',
    interface: 'HTMLLegendElement',
  },
  {
    element: 'li',
    description: 'List item',
    category: 'none',
    parent: 'ol;ul;menu',
    child: 'flow',
    attributes: 'globals;value',
    interface: 'HTMLLIElement',
  },
  {
    element: 'link',
    description: 'Link metadata',
    category: 'metadata;flow;phrasing',
    parent: 'head;noscript;phrasing',
    child: 'empty',
    attributes: 'globals;href;crossorigin;rel;as;media;hreflang;type;sizes;imagesrcset;imagesizes;referrerpolicy;integrity;blocking;color;disabled;fetchpriority',
    interface: 'HTMLLinkElement',
  },
  {
    element: 'main',
    description: 'Container for the dominant contents of the document',
    category: 'flow;palpable',
    parent: 'flow',
    child: 'flow',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'map',
    description: 'Image map',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'transparent;area',
    attributes: 'globals;name',
    interface: 'HTMLMapElement',
  },
  {
    element: 'mark',
    description: 'Highlight',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'MathMLmath',
    description: 'MathML root',
    category: 'flow;phrasing;embedded;palpable',
    parent: 'phrasing',
    child: 'per[MATHML]',
    attributes: 'per[MATHML]',
    interface: 'Element',
  },
  {
    element: 'menu',
    description: 'Menu of commands',
    category: 'flow;palpable',
    parent: 'flow',
    child: 'li;script-supporting elements',
    attributes: 'globals',
    interface: 'HTMLMenuElement',
  },
  {
    element: 'meta',
    description: 'Text metadata',
    category: 'metadata;flow;phrasing',
    parent: 'head;noscript;phrasing',
    child: 'empty',
    attributes: 'globals;name;http-equiv;content;charset;media',
    interface: 'HTMLMetaElement',
  },
  {
    element: 'meter',
    description: 'Gauge',
    category: 'flow;phrasing;labelable;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals;value;min;max;low;high;optimum',
    interface: 'HTMLMeterElement',
  },
  {
    element: 'nav',
    description: 'Section with navigational links',
    category: 'flow;sectioning;palpable',
    parent: 'flow',
    child: 'flow',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'noscript',
    description: 'Fallback content for script',
    category: 'metadata;flow;phrasing',
    parent: 'head;phrasing',
    child: 'varies',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'object',
    description: '"Image,child navigable, orplugin"',
    category: 'flow;phrasing;embedded;interactive;listed;form-associated;palpable',
    parent: 'phrasing',
    child: 'transparent',
    attributes: 'globals;data;type;name;form;width;height',
    interface: 'HTMLObjectElement',
  },
  {
    element: 'ol',
    description: 'Ordered list',
    category: 'flow;palpable',
    parent: 'flow',
    child: 'li;script-supporting elements',
    attributes: 'globals;reversed;start;type',
    interface: 'HTMLOListElement',
  },
  {
    element: 'optgroup',
    description: 'Group of options in a list box',
    category: 'none',
    parent: 'select',
    child: 'option;script-supporting elements',
    attributes: 'globals;disabled;label',
    interface: 'HTMLOptGroupElement',
  },
  {
    element: 'option',
    description: 'Option in a list box or combo box control',
    category: 'none',
    parent: 'select;datalist;optgroup',
    child: 'text',
    attributes: 'globals;disabled;label;selected;value',
    interface: 'HTMLOptionElement',
  },
  {
    element: 'output',
    description: 'Calculated output value',
    category: 'flow;phrasing;listed;labelable;resettable;form-associated;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals;for;form;name',
    interface: 'HTMLOutputElement',
  },
  {
    element: 'p',
    description: 'Paragraph',
    category: 'flow;palpable',
    parent: 'flow',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLParagraphElement',
  },
  {
    element: 'picture',
    description: 'Image',
    category: 'flow;phrasing;embedded;palpable',
    parent: 'phrasing',
    child: 'source; oneimg;script-supporting elements',
    attributes: 'globals',
    interface: 'HTMLPictureElement',
  },
  {
    element: 'pre',
    description: 'Block of preformatted text',
    category: 'flow;palpable',
    parent: 'flow',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLPreElement',
  },
  {
    element: 'progress',
    description: 'Progress bar',
    category: 'flow;phrasing;labelable;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals;value;max',
    interface: 'HTMLProgressElement',
  },
  {
    element: 'q',
    description: 'Quotation',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals;cite',
    interface: 'HTMLQuoteElement',
  },
  {
    element: 'rp',
    description: 'Parenthesis for ruby annotation text',
    category: 'none',
    parent: 'ruby',
    child: 'text',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'rt',
    description: 'Ruby annotation text',
    category: 'none',
    parent: 'ruby',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'ruby',
    description: 'Ruby annotation(s)',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing;rt;rp',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 's',
    description: 'Inaccurate text',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'samp',
    description: 'Computer output',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'script',
    description: 'Embedded script',
    category: 'metadata;flow;phrasing;script-supporting',
    parent: 'head;phrasing;script-supporting',
    child: '"script, data, or script documentation"',
    attributes: 'globals;src;type;nomodule;async;defer;crossorigin;integrity;referrerpolicy;blocking;fetchpriority',
    interface: 'HTMLScriptElement',
  },
  {
    element: 'search',
    description: 'Container for search controls',
    category: 'flow;palpable',
    parent: 'flow',
    child: 'flow',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'section',
    description: 'Generic document or application section',
    category: 'flow;sectioning;palpable',
    parent: 'flow',
    child: 'flow',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'select',
    description: 'List box control',
    category: 'flow;phrasing;interactive;listed;labelable;submittable;resettable;form-associated;palpable',
    parent: 'phrasing',
    child: 'option;optgroup;script-supporting elements',
    attributes: 'globals;autocomplete;disabled;form;multiple;name;required;size',
    interface: 'HTMLSelectElement',
  },
  {
    element: 'slot',
    description: 'Shadow tree slot',
    category: 'flow;phrasing',
    parent: 'phrasing',
    child: 'transparent',
    attributes: 'globals;name',
    interface: 'HTMLSlotElement',
  },
  {
    element: 'small',
    description: 'Side comment',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'source',
    description: 'Image source forimgor media source forvideooraudio',
    category: 'none',
    parent: 'picture;video;audio',
    child: 'empty',
    attributes: 'globals;src;type;srcset;sizes;media;width;height',
    interface: 'HTMLSourceElement',
  },
  {
    element: 'span',
    description: 'Generic phrasing container',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLSpanElement',
  },
  {
    element: 'strong',
    description: 'Importance',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'style',
    description: 'Embedded styling information',
    category: 'metadata',
    parent: 'head;noscript',
    child: 'text',
    attributes: 'globals;media;blocking',
    interface: 'HTMLStyleElement',
  },
  {
    element: 'sub',
    description: 'Subscript',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'summary',
    description: 'Caption fordetails',
    category: 'none',
    parent: 'details',
    child: 'phrasing;heading content',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'sup',
    description: 'Superscript',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'SVGsvg',
    description: 'SVG root',
    category: 'flow;phrasing;embedded;palpable',
    parent: 'phrasing',
    child: 'per[SVG]',
    attributes: 'per[SVG]',
    interface: 'SVGSVGElement',
  },
  {
    element: 'table',
    description: 'Table',
    category: 'flow;palpable',
    parent: 'flow',
    child: 'caption;colgroup;thead;tbody;tfoot;tr;script-supporting elements',
    attributes: 'globals',
    interface: 'HTMLTableElement',
  },
  {
    element: 'tbody',
    description: 'Group of rows in a table',
    category: 'none',
    parent: 'table',
    child: 'tr;script-supporting elements',
    attributes: 'globals',
    interface: 'HTMLTableSectionElement',
  },
  {
    element: 'td',
    description: 'Table cell',
    category: 'none',
    parent: 'tr',
    child: 'flow',
    attributes: 'globals;colspan;rowspan;headers',
    interface: 'HTMLTableCellElement',
  },
  {
    element: 'template',
    description: 'Template',
    category: 'metadata;flow;phrasing;script-supporting',
    parent: 'metadata;phrasing;script-supporting;colgroup',
    child: 'empty',
    attributes: 'globals',
    interface: 'HTMLTemplateElement',
  },
  {
    element: 'textarea',
    description: 'Multiline text controls',
    category: 'flow;phrasing;interactive;listed;labelable;submittable;resettable;form-associated;palpable',
    parent: 'phrasing',
    child: 'text',
    attributes: 'globals;autocompletecols;dirname;disabled;form;maxlength;minlength;name;placeholder;readonly;required;rows;wrap',
    interface: 'HTMLTextAreaElement',
  },
  {
    element: 'tfoot',
    description: 'Group of footer rows in a table',
    category: 'none',
    parent: 'table',
    child: 'tr;script-supporting elements',
    attributes: 'globals',
    interface: 'HTMLTableSectionElement',
  },
  {
    element: 'th',
    description: 'Table header cell',
    category: 'interactive',
    parent: 'tr',
    child: 'flow',
    attributes: 'globals;colspan;rowspan;headers;scope;abbr',
    interface: 'HTMLTableCellElement',
  },
  {
    element: 'thead',
    description: 'Group of heading rows in a table',
    category: 'none',
    parent: 'table',
    child: 'tr;script-supporting elements',
    attributes: 'globals',
    interface: 'HTMLTableSectionElement',
  },
  {
    element: 'time',
    description: 'Machine-readable equivalent of date- or time-related data',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals;datetime',
    interface: 'HTMLTimeElement',
  },
  {
    element: 'title',
    description: 'Document title',
    category: 'metadata',
    parent: 'head',
    child: 'text',
    attributes: 'globals',
    interface: 'HTMLTitleElement',
  },
  {
    element: 'tr',
    description: 'Table row',
    category: 'none',
    parent: 'table;thead;tbody;tfoot',
    child: 'th;td;script-supporting elements',
    attributes: 'globals',
    interface: 'HTMLTableRowElement',
  },
  {
    element: 'track',
    description: 'Timed text track',
    category: 'none',
    parent: 'audio;video',
    child: 'empty',
    attributes: 'globals;default;kind;label;src;srclang',
    interface: 'HTMLTrackElement',
  },
  {
    element: 'u',
    description: 'Unarticulated annotation',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'ul',
    description: 'List',
    category: 'flow;palpable',
    parent: 'flow',
    child: 'li;script-supporting elements',
    attributes: 'globals',
    interface: 'HTMLUListElement',
  },
  {
    element: 'var',
    description: 'Variable',
    category: 'flow;phrasing;palpable',
    parent: 'phrasing',
    child: 'phrasing',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'video',
    description: 'Video player',
    category: 'flow;phrasing;embedded;interactive;palpable',
    parent: 'phrasing',
    child: 'source;track;transparent',
    attributes: 'globals;src;crossorigin;poster;preload;autoplay;playsinline;loop;muted;controls;width;height',
    interface: 'HTMLVideoElement',
  },
  {
    element: 'wbr',
    description: 'Line breaking opportunity',
    category: 'flow;phrasing',
    parent: 'phrasing',
    child: 'empty',
    attributes: 'globals',
    interface: 'HTMLElement',
  },
  {
    element: 'autonomous custom elements',
    description: 'Author-defined elements',
    category: 'flow;phrasing;palpable',
    parent: 'flow;phrasing',
    child: 'transparent',
    attributes: 'globals; any, as decided by the element\'s author',
    interface: 'Supplied by the element\'s author (inherits fromHTMLElement)',
  },
];
