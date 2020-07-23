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
    onDataChange(newTilesData: TileData[]): void;
    setTextBounds(): void;
    setMaxIconHeight(callback?: () => any): void;
    onStateChange(newTilesData: TileData[]): void;
    onResize(): void;
    onScroll(): void;
    setWindow(): void;
    draw(): void;
    createTile(i: number): Tile;
    createUniversalTileData(): UniversalTileData;
    createTiles(tilesData: TileData[]): Tile[];
    setNeedsToBeRendered(): void;
    getMaxBoundedTextHeight(): number;
    isSameDataState(tdold: TileData, tdnew: TileData): boolean;
    clear(): void;
    onShift(): void;
    onShiftUp(): void;
}
export {};
