
/**
 * 
 * 
 */
export class ArrayList<T>{
        protected defaultSize: number = 0;
    
        protected innerArray: Array<T>;
    
        constructor(){
            //Initialize the array to the default size
            this.innerArray = new Array<T>(this.defaultSize);
        }
    
        protected [Symbol.iterator](){
            return this.innerArray.values.arguments;
        }
    
        /**
         * 
         * @param newPosition
         * @param item 
         */
        Move(newPosition: number, item: T): void{
            let oldPosition = this.IndexOf(item);
    
            let existingObject = this.innerArray[newPosition];
            this.innerArray[newPosition] = item;
    
            this.innerArray[oldPosition] = existingObject;
        }
    
        /**
         * 
         * @param position 
         * @param item 
         */
        InsertAt(position: number, item: T): void{
            
            this.Add(item);
            this.Move(position, item);
        }
    
        /**
         * 
         * @param item 
         */
        Add(item: T) : void{
            let newArray: Array<T> = new Array<T>(this.innerArray.length + 1);
            newArray.push(item);
    
            this.innerArray = newArray;
        }
    
        /**
         * 
         * @param item 
         */
        Remove(item: T): void{
            let newArray = new Array<T>(this.innerArray.length - 1);
    
            for(let i of this.innerArray){
                if(i === item){
                    //Do nothing.
                }
                else{
                    newArray.push(i);
                }
            }
    
            this.innerArray = newArray;
        }
    
        /**
         * Removes the item at the specified index.
         * @param index: The index to retrieve the item to be removed.
         */
        RemoveAt(index: number): void{
            this.Remove(this.Get(index));
        }
    
        /**
         * Gets the item at the specified index.
         * @param index 
         * @returns 
         */
        Get(index: number): T{
           return this.innerArray[index];
        }
    
        /**
         * 
         * @returns 
         */
        ToArray(): Array<T>{
            return this.innerArray;
        }
    
        /**
         * 
         * @returns 
         */
        Size() : number{
            return this.innerArray.length;
        }
    
        /**
         * Gets the index of an item within the List.
         * @param item 
         * @returns 
         */
        IndexOf(item: T): number{
            let index = -1;
            
            for(let i = 0; i < this.innerArray.length; i++){
                if(this.innerArray[i] === item){
                    index = i;
                }
            }
            return index;
        }
    
        /**
         * Removes all elements in the ArrayList.
         */
        Clear(): void{
            for(let i = 0; i < this.innerArray.length; i++){
                this.RemoveAt(i);
            }
        }
    
        /**
         * 
         * @param key 
         * @returns 
         */
        Has(key: T): boolean{
            let found: boolean = false;
            
            for(let k of this.innerArray){
                if(k === key){
                found = true;
                }
            }
            return found;
        }
    }