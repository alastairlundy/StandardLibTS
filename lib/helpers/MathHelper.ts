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
     * Rounds 
     * @param number 
     * @returns 
     */
    public roundToInteger(number: number) : number{
        return this.round(number, 0);
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

    /**
     * A slightly computationally expensive rounding method for when accuracy is needed.
     * @param number 
     * @param decimalPlaces 
     */
    public round(number: number, decimalPlaces: number): number{
            let result: string;

            let decimals: string[] = number.toString().split('.');

            if(decimalPlaces > 0){
                result = decimals[0] + ".";

            let decisionNumber = decimals[1].charAt(decimalPlaces);

            if(Number(decisionNumber) >= 5){
                result += (Number(decimals[1].charAt(decimalPlaces)) + 1); 
            }

            for(let index = 0; index < (decimals[1].length - 1); index++){
                    result += Number(0).toString();
                }

            return Number(Number(result).toFixed(decimalPlaces));
        }
        else if(decimalPlaces == 0){
            return Number(Number(decimals[0]).toFixed(decimalPlaces));
        }
        else{
            decimalPlaces = this.toPositiveNumber(decimalPlaces);

            result = "";

            for(let index = 0; index < (decimals[0].length - decimalPlaces); index++){
                result += decimals[0].charAt(index);
            }

            let decisionNumber = decimals[0].charAt(decimals[0].length - (decimalPlaces - 1));

            if(Number(decisionNumber) >= 5){
                result += (Number(decimals[0].charAt(decimals[0].length - decimalPlaces)) + 1);
            }

            for(let index = decimalPlaces + 1; index < decimals[1].length; index++){
                result += Number(0).toString();
            }

            return Number(Number(result).toFixed(decimalPlaces));
        }
    }
}