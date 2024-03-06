
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
         * Moves an item in the arraylist to a new position.
         * @param newPosition
         * @param item 
         */
        public move(newPosition: number, item: T): void{
            let oldPosition = this.indexOf(item);
    
            let existingObject = this.innerArray[newPosition];
            this.innerArray[newPosition] = item;
    
            this.innerArray[oldPosition] = existingObject;
        }
    
        /**
         * 
         * @param position 
         * @param item 
         */
        public insertAt(position: number, item: T): void{
            
            this.add(item);
            this.move(position, item);
        }
    
        /**
         * 
         * @param item 
         */
        public add(item: T) : void{
            let newArray: Array<T> = new Array<T>(this.innerArray.length + 1);
            newArray.push(item);

            this.innerArray = newArray;
        }
    
        /**
         * 
         * @param item 
         */
        public remove(item: T): void{
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
         * @param index The index to retrieve the item to be removed.
         */
        public removeAt(index: number): void{
            this.remove(this.get(index));
        }
    
        /**
         * Gets the item at the specified index.
         * @param index 
         * @returns 
         */
        public get(index: number): T{
           return this.innerArray[index];
        }
    
        /**
         * 
         * @returns 
         */
        public toArray(): Array<T>{
            return this.innerArray;
        }
    
        /**
         * 
         * @returns 
         */
        public size() : number{
            return this.innerArray.length;
        }
    
        /**
         * Gets the index of an item within the List.
         * @param item 
         * @returns 
         */
        public indexOf(item: T): number{
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
        public clear(): void{
            for(let i = 0; i < this.innerArray.length; i++){
                this.removeAt(i);
            }
        }
    
        /**
         * 
         * @param item
         * @returns 
         */
        public contains(item: T): boolean{
            let found: boolean = false;
            
            for(let k of this.innerArray){
                if(k === item){
                found = true;
                }
            }
            return found;
        }

    /**
     *
     * @param arrayList
     */
    public equals(arrayList: ArrayList<T>) : boolean{
            let equality: boolean = true;

            for(let i of arrayList.toArray()){
                if(!this.contains(i)){
                    equality = false;
                }
            }

            return equality;
        }
    }