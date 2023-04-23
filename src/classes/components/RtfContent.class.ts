/*
  Xeptrix- A library for converting HTML to RTF

  RtfContent component

  /src/classes/RtfContent.class.ts
*/

class RtfContent implements RtfComponent {
  constructor(private htmlToRtfParser: HtmlToRtfParser) {}

  toString(): string {
    return this.htmlToRtfParser.processHtml();
  }
}