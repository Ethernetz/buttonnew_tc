import { Visual } from "./visual";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import ISelectionId = powerbi.extensibility.ISelectionId;


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
        // this.visual.selectionManager.select((<ButtoneData>this.tileData).selectionId, false) //BOUND
        this.visual.selectionManagerUnbound.select(this.i) //FIXED
        this.visual.update(this.collection.options)
    }

    onTileMouseover() {
        this.visual.hoveredIndex = this.i
        let vs = this.collection.visual.visualSettings
        if(vs.tile.hoverStyling || vs.text.hoverStyling || vs.icon.hoverStyling || vs.effects.hoverStyling)
            this.visual.update(this.collection.options)
    }
    onTileMouseout() {
        this.visual.hoveredIndex = null
        let vs = this.collection.visual.visualSettings
        if(vs.tile.hoverStyling || vs.text.hoverStyling || vs.icon.hoverStyling || vs.effects.hoverStyling)
            this.visual.update(this.collection.options)
    }
}

export class ButtonData extends TileData {
    selectionId?: ISelectionId
}

