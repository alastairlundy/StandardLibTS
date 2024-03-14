export class MathHelper{

    /**
     *
     * @param value
     * @param power
     */
    public root(value: number, power: number): number{
        return Math.pow(value, (1.0 / power));
    }

    /**
     * Calculate the geometric mean of a given array of numbers.
     * @param numbers The numbers to calculate a geometric mean of.
     */
    public calculateGeometricMean(numbers: number[]): number{
        let sum: number = 0;

        for(let i of numbers){
            sum *= numbers[i];
        }

        return this.root(sum, numbers.length);
    }

    /**
     * Calculate the arithmetic mean of a given arrays of numbers.
     * @param numbers The numbers to calculate an arithmetic mean of.
     */
    public calculateArithmeticMean(numbers: number[]): number{
        let sum: number = 0;

        for(let i of numbers){
            sum += numbers[i];
        }

        return sum / numbers.length;
    }
    /**
     * Turns a negative number into a positive number (e.g. It turns -100 into 100)
     * @param number 
     * @returns 
     */
    public toPositiveNumber(number: number): number{
        if(number < 0){
            number = number * number;

            return Math.sqrt(number);
        }
        else{
            return number;
        }
    }

    /**
     * Turns a positive number into a negative number (e.g. It turns 100 into -100)
     * @param number 
     * @returns 
     */
    public toNegativeNumber(number: number): number{
        if(number > 0){
            number = number * Number("-" + number.toString());
        
            return Math.sqrt(number);
        }
        else{
            return number;
        }
    }
}