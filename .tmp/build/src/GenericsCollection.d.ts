import { Visual } from "./visual";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import ISelectionId = powerbi.extensibility.ISelectionId;
import { TilesCollection } from "./TilesCollection/TilesCollection";
import { Tile } from "./TilesCollection/Tile";
import powerbi from "powerbi-visuals-api";
import { TileData } from "./TilesCollection/TileData";
export declare class GenericsCollection extends TilesCollection {
    visual: Visual;
    options: VisualUpdateOptions;
    tilesData: GenericData[];
    createTile(i: any): Tile;
}
export declare class Generic extends Tile {
    collection: GenericsCollection;
    tilesData: GenericData[];
    visual: Visual;
    onTileClick(): void;
    onTileMouseover(): void;
    onTileMouseout(): void;
}
export declare class GenericData extends TileData {
    selectionId?: ISelectionId;
}
