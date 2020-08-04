import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
import * as TileCollectionFormatSettings from "./TilesCollection/FormatSettings";
import { State, PresetStyle } from './TilesCollection/enums';
import { TileCollectionStatedFormatObject } from "./TilesCollection/FormatSettings";
import { StatesUsed } from "./TilesCollection/interfaces";
export declare class TileFillSettings extends TileCollectionFormatSettings.TileFillSettings {
    showBgimg: boolean;
    img: string;
}
export declare class TileStrokeSettings extends TileCollectionFormatSettings.TileStrokeSettings {
}
export declare class TextSettings extends TileCollectionFormatSettings.TextSettings {
}
export declare class IconSettings extends TileCollectionFormatSettings.IconSettings {
}
export declare class ShapeSettings extends TileCollectionFormatSettings.ShapeSettings {
}
export declare class ContentAlignmentSettings extends TileCollectionFormatSettings.ContentAlignmentSettings {
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
export declare class PresetStyleSettings {
    color: string;
    preset: PresetStyle;
}
export declare class VisualSettings extends DataViewObjectsParser {
    tileFill: TileFillSettings;
    tileStroke: TileStrokeSettings;
    text: TextSettings;
    icon: IconSettings;
    shape: ShapeSettings;
    content: ContentSettings;
    contentAlignment: ContentAlignmentSettings;
    effect: EffectSettings;
    presetStyle: PresetStyleSettings;
}
