import { BoundingBox, Handle } from "./interfaces";
export declare class Shape {
    xPos: number;
    yPos: number;
    width: number;
    height: number;
    radius: number;
    alterVPadding: number;
    static handleFocused: boolean;
    constructor(xPos: number, yPos: number, width: number, height: number, radius?: number);
    get strokePath(): string;
    get handles(): any[];
}
export interface Shape {
    xPos: number;
    yPosd: number;
    width: number;
    height: number;
    shapePath: string;
    strokePath: string;
    contentBoundingBox: BoundingBox;
    handles: any[];
}
export declare class Rectangle extends Shape implements Shape {
    constructor(xPos: number, yPos: number, width: number, height: number, radius: number);
    get shapePath(): string;
    get contentBoundingBox(): BoundingBox;
}
export declare class Parallelogram extends Shape implements Shape {
    static _z: number;
    angle: number;
    constructor(xPos: number, yPos: number, width: number, height: number, angle: number, radius: number);
    get shapePath(): string;
    get contentBoundingBox(): BoundingBox;
    get handles(): Handle[];
    static getAlterHPadding(height: number, angle: number): number;
    static getExtraHSpace(height: number, angle: number): number;
}
export declare class ParallelogramVertical extends Shape implements Shape {
    static _z: number;
    angle: number;
    constructor(xPos: number, yPos: number, width: number, height: number, angle: number, radius: number);
    get shapePath(): string;
    get contentBoundingBox(): BoundingBox;
    get handles(): Handle[];
    static getAlterVPadding(width: number, angle: number): number;
    static getExtraVSpace(width: number, angle: number): number;
}
export declare class Chevron extends Shape implements Shape {
    static _z: number;
    angle: number;
    constructor(xPos: number, yPos: number, width: number, height: number, angle: number, radius: number);
    get shapePath(): string;
    get contentBoundingBox(): BoundingBox;
    get handles(): Handle[];
    static getAlterHPadding(height: number, angle: number): number;
    static getExtraHSpace(height: number, angle: number): number;
}
export declare class ChevronVertical extends Shape implements Shape {
    static _z: number;
    angle: number;
    constructor(xPos: number, yPos: number, width: number, height: number, angle: number, radius: number);
    get shapePath(): string;
    get contentBoundingBox(): BoundingBox;
    get handles(): Handle[];
    static getAlterVPadding(width: number, angle: number): number;
    static getExtraVSpace(width: number, angle: number): number;
}
export declare class Pentagon extends Shape implements Shape {
    static _z: number;
    constructor(xPos: number, yPos: number, width: number, height: number, angle: number, radius: number);
    get shapePath(): string;
    get contentBoundingBox(): BoundingBox;
    get handles(): Handle[];
    static getExtraHSpace(): number;
}
export declare class Hexagon extends Shape implements Shape {
    static _z: number;
    constructor(xPos: number, yPos: number, width: number, height: number, angle: number, radius: number);
    get shapePath(): string;
    get contentBoundingBox(): BoundingBox;
    get handles(): Handle[];
    static getExtraHSpace(): number;
}
export declare class Ellipse extends Shape implements Shape {
    constructor(xPos: number, yPos: number, width: number, height: number);
    get shapePath(): string;
    get contentBoundingBox(): BoundingBox;
}
export declare class Tab_RoundedCorners extends Shape implements Shape {
    constructor(xPos: number, yPos: number, width: number, height: number);
    get shapePath(): string;
    get contentBoundingBox(): BoundingBox;
    get strokePath(): string;
}
export declare class Tab_CutCorners extends Shape implements Shape {
    static _z: number;
    constructor(xPos: number, yPos: number, width: number, height: number, length: number);
    get shapePath(): string;
    get contentBoundingBox(): BoundingBox;
    get strokePath(): string;
    get handles(): Handle[];
}
export declare class Tab_CutCorner extends Shape implements Shape {
    static _z: number;
    constructor(xPos: number, yPos: number, width: number, height: number, length: number);
    get shapePath(): string;
    get contentBoundingBox(): BoundingBox;
    get strokePath(): string;
    get handles(): Handle[];
}
