export = MathHelper;

declare class MathHelper {

    public root(value: number, power: number): number;

    public calculateGeometricMean(numbers: number[]): number;
    public calculateArithmeticMean(numbers: number[]): number;

    public roundToInteger(number: number) : number;

    public toPositiveNumber(number: number): number;
    public toNegativeNumber(number: number): number;

    public round(number: number, decimalPlaces: number): number;
}