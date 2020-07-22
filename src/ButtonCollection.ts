import { Visual } from "./visual";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;


import { TilesCollection } from "./TilesCollection/TilesCollection";
import { Tile } from "./TilesCollection/Tile";
import powerbi from "powerbi-visuals-api";
import { TileData } from "./TilesCollection/TileData";
// import { sizeTextContainer, styleText, makeTextTransparent } from './d3calls'

export class ButtonCollection extends TilesCollection {
    visual: Visual
    options: VisualUpdateOptions
    tilesData = <ButtonData[]>this.tilesData

    public createTile(i): Tile {
        return new Button(this, i, this.tilesData, this.formatSettings)
    }

}

export class Button extends Tile {
    collection = <ButtonCollection>this.collection
    tilesData = <ButtonData[]>this.tilesData
    visual: Visual = this.collection.visual


    onTileClick() {
        this.visual.selectionManagerUnbound.select(this.i)
        this.collection.onStateChange(this.visual.createButtonData()) 
    }

    onTileMouseover() {
        this.visual.hoveredIndex = this.i
        this.collection.onStateChange(this.visual.createButtonData()) 
    }
    onTileMouseout() {
        this.visual.hoveredIndex = null
        this.collection.onStateChange(this.visual.createButtonData())  
    }
}

export class ButtonData extends TileData {
}

