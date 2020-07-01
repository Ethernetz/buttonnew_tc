import { propertyStateName, propertyStatesInput, propertyStatesOutput } from './interfaces';
import { State } from './TilesCollection/enums';
import powerbi from "powerbi-visuals-api";
import { VisualSettings } from './settings';
export declare function getPropertyStateNameArr(propKeys: string[]): propertyStateName[];
export declare function getPropertyStateNames(propBase: string): propertyStateName;
export declare function getCorrectPropertyStateName(state: State, propBase: string): string;
export declare function getObjectsToPersist(visualSettings: VisualSettings): powerbi.VisualObjectInstancesToPersist;
export declare function levelProperties(propertyStates: propertyStatesInput): propertyStatesOutput;
