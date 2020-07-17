import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
import * as TileCollectionFormatSettings from "./TilesCollection/FormatSettings";
import { State, PresetStyle } from './TilesCollection/enums';
import { TileCollectionStatedFormatObject } from "./TilesCollection/FormatSettings";
import { StatesUsed } from "./TilesCollection/interfaces";
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
export declare class ContentSettings implements TileCollectionStatedFormatObject {
    state: State;
    statesUsed: StatesUsed;
    hover: boolean;
    n: number;
    icons: boolean;
    textD: string;
    textA: string;
    textS: string;
    textU: string;
    iconD: string;
    iconA: string;
    iconS: string;
    iconU: string;
}
export declare class BgImgSettings {
    img: string;
}
export declare class PresetStyleSettings {
    color: string;
    preset: PresetStyle;
}
export declare class VisualSettings extends DataViewObjectsParser {
    tile: TileSettings;
    text: TextSettings;
    icon: IconSettings;
    layout: LayoutSettings;
    effects: EffectSettings;
    content: ContentSettings;
    bgimg: BgImgSettings;
    presetStyle: PresetStyleSettings;
}
