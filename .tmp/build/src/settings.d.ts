import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
import * as TileCollectionFormatSettings from "./TilesCollection/FormatSettings";
import { AlignmentType, State } from './TilesCollection/enums';
import { ContentSource } from './enums';
export declare class TileSettings extends TileCollectionFormatSettings.TileSettings {
}
export declare class TextSettings extends TileCollectionFormatSettings.TextSettings {
}
export declare class IconSettings extends TileCollectionFormatSettings.IconSettings {
}
export declare class LayoutSettings extends TileCollectionFormatSettings.LayoutSettings {
}
export declare class EffectSettings extends TileCollectionFormatSettings.EffectSettings {
}
export declare class ContentSettings {
    state: State;
    hover: boolean;
    source: ContentSource;
    n: number;
    icons: boolean;
    textA: string;
    textS: string;
    textU: string;
    textH: string;
    iconA: string;
    iconS: string;
    iconU: string;
    iconH: string;
}
export declare class MeasuresSettings {
    state: State;
    hover: boolean;
    colorA: string;
    colorS: string;
    colorU: string;
    colorH: string;
    alignmentA: AlignmentType;
    alignmentS: AlignmentType;
    alignmentU: AlignmentType;
    alignmentH: AlignmentType;
    fontSizeA: number;
    fontSizeS: number;
    fontSizeU: number;
    fontSizeH: number;
    fontFamilyA: string;
    fontFamilyS: string;
    fontFamilyU: string;
    fontFamilyH: string;
    vmarginA: number;
    vmarginS: number;
    vmarginU: number;
    vmarginH: number;
    transparencyA: number;
    transparencyS: number;
    transparencyU: number;
    transparencyH: number;
}
export declare class BgImgSettings {
    img: string;
}
export declare class VisualSettings extends DataViewObjectsParser {
    tile: TileSettings;
    text: TextSettings;
    icon: IconSettings;
    layout: LayoutSettings;
    effects: EffectSettings;
    content: ContentSettings;
    bgimg: BgImgSettings;
    measures: MeasuresSettings;
}
