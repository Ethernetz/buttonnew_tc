import { State } from './enums';
export declare function calculateWordDimensions(text: string, fontFamily: string, fontSize: string, widthType?: string, maxWidth?: string): {
    width: number;
    height: number;
};
export declare function getMatchingStateProperty(state: State, formatObj: any, propBase: string): any;
export declare function round(n: any, p?: any): number;
