import { Viewport } from './interfaces';
import { FormatSettings } from './FormatSettings';
import { TileData } from './TileData';
import { Tile } from './Tile';
import * as d3 from 'd3';
declare type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;
export declare class TilesCollection {
    formatSettings: FormatSettings;
    tilesData: TileData[];
    viewport: Viewport;
    container: Selection<SVGElement>;
    tiles: Tile[];
    maxBoundedTextHeight: number;
    render(): void;
    createTile(i: any): Tile;
    onShift(): void;
    onShiftUp(): void;
}
export {};
