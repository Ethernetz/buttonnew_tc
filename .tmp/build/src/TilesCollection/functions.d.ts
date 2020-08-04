import { State, ShapeDirection } from './enums';
export declare function calculateWordDimensions(text: string, fontFamily: string, fontSize: string, widthType?: string, maxWidth?: string): {
    width: number;
    height: number;
};
export declare function getMatchingStateProperty(state: State, formatObj: any, propBase: string): any;
export declare function getCorrectPropertyStateName(state: State, propBase: string): string;
export declare function round(n: any, p?: any): number;
export declare function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
};
export declare function rotatePath(pathRight: [string, ...number[]][], direction: ShapeDirection, height: number, width: number): [string, ...number[]][];
