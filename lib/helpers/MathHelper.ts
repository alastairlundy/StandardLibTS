export class MathHelper{

    public root(value: number, power: number): number{
        return Math.pow(value, (1.0 / power));
    }

    public calculateGeometricMean(numbers: number[]): number{
        let sum: number = 0;

        for(let i of numbers){
            sum *= numbers[i];
        }

        return this.root(sum, numbers.length);
    }

    public calculateArithmeticMean(numbers: number[]): number{
        let sum: number = 0;

        for(let i of numbers){
            sum += numbers[i];
        }

        return sum / numbers.length;
    }
}