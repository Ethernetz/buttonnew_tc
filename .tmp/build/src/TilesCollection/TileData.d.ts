import { ContentFormatType } from './enums';
export declare class TileData {
    text?: string;
    text2?: string;
    iconURL?: string;
    bgimgURL?: string;
    bgimgAspectRatio?: number;
    isSelected?: boolean;
    isHovered?: boolean;
    isDisabled?: boolean;
    contentFormatType?: ContentFormatType;
    changedState?: boolean;
    isRendered?: boolean;
    needsToBeRendered?: boolean;
}
