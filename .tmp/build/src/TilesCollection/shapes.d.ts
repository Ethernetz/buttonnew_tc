import { BoundingBox } from "./interfaces";
import { ShapeDirection, TileLayoutType } from "./enums";
export declare class Shape {
    width: number;
    height: number;
    roundedCornerRadius: number;
    direction: ShapeDirection;
    static alterPadding: boolean;
    _shapePath: string;
    _strokePath: string;
    constructor(height: number, width: number, direction: ShapeDirection, roundedCornerRadius?: number, ...args: number[]);
    get shapePath(): string;
    get shapePathRight(): [string, ...number[]][];
    get strokePath(): string;
    get strokePathRight(): [string, ...number[]][];
    get contentBoundingBox(): BoundingBox;
    get contentBoundingBoxRight(): BoundingBox;
    static getDimsWithoutContent(direction: ShapeDirection, height: number, width: number, ...args: number[]): {
        width: number;
        height: number;
    };
    static getDimsWithoutContentRight(...args: number[]): {
        width: number;
        height: number;
    };
    static getAutoPreference(layoutType: TileLayoutType): ShapeDirection;
}
export declare class Rectangle extends Shape {
    constructor(height: number, width: number, direction: ShapeDirection, roundedCornerRadius: number);
    get shapePathRight(): [string, ...number[]][];
}
export declare class Parallelogram extends Shape {
    static alterPadding: boolean;
    private z;
    constructor(height: number, width: number, direction: ShapeDirection, angle: number, roundedCornerRadius: number);
    get shapePathRight(): [string, ...number[]][];
    get contentBoundingBoxRight(): BoundingBox;
    static getDimsWithoutContentRight(height: number, width: number, angle: number): {
        width: number;
        height: number;
    };
    static getAutoPreference(layoutType: TileLayoutType): ShapeDirection;
}
export declare class Chevron extends Shape {
    static alterPadding: boolean;
    private z;
    constructor(height: number, width: number, direction: ShapeDirection, angle: number, roundedCornerRadius: number);
    get shapePathRight(): [string, ...number[]][];
    get contentBoundingBoxRight(): BoundingBox;
    static getDimsWithoutContentRight(height: number, width: number, angle: number): {
        width: number;
        height: number;
    };
    static getAutoPreference(layoutType: TileLayoutType): ShapeDirection;
}
export declare class Pentagon extends Shape {
    private z;
    constructor(height: number, width: number, direction: ShapeDirection, angle: number, roundedCornerRadius: number);
    get shapePathRight(): [string, ...number[]][];
    get contentBoundingBoxRight(): BoundingBox;
    static getDimsWithoutContentRight(height: number, width: number, angle: number): {
        width: number;
        height: number;
    };
    static getAutoPreference(layoutType: TileLayoutType): ShapeDirection;
}
export declare class Hexagon extends Shape {
    private z;
    constructor(height: number, width: number, direction: ShapeDirection, angle: number, roundedCornerRadius: number);
    get shapePathRight(): [string, ...number[]][];
    get contentBoundingBoxRight(): BoundingBox;
    static getDimsWithoutContentRight(height: number, width: number, angle: number): {
        width: number;
        height: number;
    };
    static getAutoPreference(layoutType: TileLayoutType): ShapeDirection;
}
export declare class Ellipse extends Shape {
    constructor(height: number, width: number, direction: ShapeDirection);
    get shapePathRight(): [string, ...number[]][];
    get shapePath(): string;
    get contentBoundingBox(): BoundingBox;
    static getHorizontalNoContentRight(height: number, angle: number): number;
}
export declare class Tab_CutCorners extends Shape {
    private length;
    constructor(height: number, width: number, direction: ShapeDirection, length: number, roundedCornerRadius: number);
    get shapePathRight(): [string, ...number[]][];
    static getAutoPreference(layoutType: TileLayoutType): ShapeDirection;
}
export declare class Tab_CutCorner extends Shape {
    private length;
    constructor(height: number, width: number, direction: ShapeDirection, length: number, roundedCornerRadius: number);
    get shapePathRight(): [string, ...number[]][];
    static getAutoPreference(layoutType: TileLayoutType): ShapeDirection;
}
export declare class Tab_RoundedCorners extends Shape {
    private length;
    constructor(height: number, width: number, direction: ShapeDirection, roundedCornerRadius: number);
    get shapePathRight(): [string, ...number[]][];
    static getAutoPreference(layoutType: TileLayoutType): ShapeDirection;
}
export declare class Pill extends Shape {
    constructor(height: number, width: number, direction: ShapeDirection, roundedCornerRadius: number);
    get shapePathRight(): [string, ...number[]][];
    get contentBoundingBoxRight(): BoundingBox;
    static getDimsWithoutContentRight(height: number, width: number): {
        width: number;
        height: number;
    };
    static getAutoPreference(layoutType: TileLayoutType): ShapeDirection;
}
export declare class Triangle extends Shape {
    constructor(height: number, width: number, direction: ShapeDirection, roundedCornerRadius: number);
    get shapePathRight(): [string, ...number[]][];
    static getAutoPreference(layoutType: TileLayoutType): ShapeDirection;
}
export declare class Arrow extends Shape {
    private z;
    private arrowThickness;
    constructor(height: number, width: number, direction: ShapeDirection, angle: number, arrowThicknessPercentage: number, roundedCornerRadius: number);
    get shapePathRight(): [string, ...number[]][];
    get contentBoundingBoxRight(): BoundingBox;
    static getDimsWithoutContentRight(height: number, width: number, angle: number, rodThickness: number): {
        width: number;
        height: number;
    };
    static getAutoPreference(layoutType: TileLayoutType): ShapeDirection;
}
