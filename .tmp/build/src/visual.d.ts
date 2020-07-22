import "core-js/stable";
import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import DataViewPropertyValue = powerbi.DataViewPropertyValue;
import { VisualSettings } from "./settings";
import VisualObjectInstanceEnumeration = powerbi.VisualObjectInstanceEnumeration;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import { SelectionManagerUnbound } from './SelectionManagerUnbound';
import { PresetStyle } from './TilesCollection/enums';
import { ButtonData } from './ButtonCollection';
export declare class Visual implements IVisual {
    visualSettings: VisualSettings;
    host: IVisualHost;
    private svg;
    private container;
    hoveredIndex: number;
    shiftFired: boolean;
    selectionManagerUnbound: SelectionManagerUnbound;
    currentPresetStyle: PresetStyle;
    currentPresetBaseColor: string;
    visualElement: HTMLElement;
    constructor(options: VisualConstructorOptions);
    getEnumeratedStateProperties(propertyGroup: any, prefix?: string): {
        [propertyName: string]: DataViewPropertyValue;
    };
    enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration;
    update(options: VisualUpdateOptions): void;
    createButtonData(): ButtonData[];
    private static parseSettings;
}
