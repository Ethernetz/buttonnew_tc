import { Viewport } from './interfaces';
import { FormatSettings } from './FormatSettings';
import { TileData } from './TileData';
import { UniversalTileData } from './UniversalTileData';
import { Tile } from './Tile';
import * as d3 from 'd3';
declare type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;
export declare class TilesCollection {
    formatSettings: FormatSettings;
    tilesData: TileData[];
    viewport: Viewport;
    container: Selection<SVGElement>;
    svg: Selection<SVGElement>;
    universalTileData: UniversalTileData;
    tiles: Tile[];
    visualElement: HTMLElement;
    maxBoundedTextHeight: number;
    createTiles(tilesData: TileData[]): Tile[];
    sameDataState(tdold: TileData, tdnew: TileData): boolean;
    render(newTilesData: TileData[]): void;
    clear(): void;
    draw(): void;
    createTile(i: number): Tile;
    createUniversalTileData(): UniversalTileData;
    onShift(): void;
    onShiftUp(): void;
}
export {};
