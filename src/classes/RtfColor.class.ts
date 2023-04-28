/**
 * @package: Xeptrix
 * @class: RtfColor
 * @file: src/classes/RtfDocument.class.ts
 */
export class RtfColor {
  private colorTable: Map<string, number>;
  private currentColorIndex: number;

  constructor() {
    this.colorTable = new Map();
    this.currentColorIndex = -1;

    // Add default color
    this.addColor(this.getDefaultColor());
  }

  addColor(color: [number, number, number]): number {
    const colorKey = color.join(',');
    if (this.colorTable.has(colorKey)) {
      return this.colorTable.get(colorKey)!;
    }

    const colorIndex = ++this.currentColorIndex;
    this.colorTable.set(colorKey, colorIndex);
    return colorIndex;
  }

  buildColorTableDefinition(): string {
    const colorDefinitions = Array.from(this.colorTable.keys()).map(
      (colorKey) => `\\red${colorKey.split(',')[0]}\\green${colorKey.split(',')[1]}\\blue${colorKey.split(',')[2]}`,
    );
    const colorDefinitionsString = colorDefinitions.join(';');
    return colorDefinitionsString.length > 0 ? `\\colortbl;${colorDefinitionsString};` : `\\colortbl;`;
  }

  parseColor(colorString: string): [number, number, number] {
    const color = parseInt(colorString.substr(1), 16);
    const red = Math.floor(color / 16 ** 4) % 256;
    const green = Math.floor(color / 16 ** 2) % 256;
    const blue = color % 256;
    return [red, green, blue];
  }

  getDefaultColor(): [number, number, number] {
    return [0, 0, 0];
  }
}