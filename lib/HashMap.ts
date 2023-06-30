import { ArrayList } from "ArrayList"

import { KeyValuePair } from "KeyValuePair";

    /**
 * A class that mimics C# Dictionaries and Java HashMaps. 
 */
 export class HashMap<K, V>{
    internalList : ArrayList<KeyValuePair<K, V>>;

    constructor(){
        this.internalList = new ArrayList<KeyValuePair<K, V>>();
    }

    /**
     * Adds items to the HashMap
     * @param key 
     * @param value 
     */
    put(key: K, value: V): void{
        this.internalList.add(new KeyValuePair(key, value));
    }

    /**
     * 
     * @param key 
     * @param value 
     * @returns 
     */
    putIfAbsent(key: K, value:V): void{
        for(let i of this.internalList.toArray()){
            if(i.key === key){
                i.value = value;
                return;
            }
        }
        this.put(key, value);
    }

    /**
     * 
     * @param key 
     * @returns 
     */
    get(key: K){
        for(let i of this.internalList.toArray()){
            if(i.key === key){
               return i.value;
            }
        }   

        return undefined;
    }

    /**
     * 
     * @param key 
     * @param defaultValue 
     * @returns 
     */
    getOrDefault(key: K, defaultValue: V) : V{
        for(let i of this.internalList){
            if(i.key === key){
                return i.value;
            }
        }

        return defaultValue;
    }

    /**
     * 
     * @param key 
     * @returns Returns -1 if an error has occured or the correct index if correctly detected.
     */
    indexOf(key: K): number{
        for(let i = 0; i < this.internalList.size(); i++){
            if(key === this.internalList.get(i).key){
                return i;
            }
        }
        return -1;
    }

    /**
     * 
     * @param value 
     * @returns 
     */
    getKeysOf(value: V): Array<K>{
        let keys: ArrayList<K> = new ArrayList<K>();
        
        for(let pair of this.internalList){
            if(pair.value === value){
                keys.add(pair.key);
            }
        }

        return keys.toArray();
    }

    /**
     * 
     * @returns 
     */
    keys() : Array<K>{
        let keys: ArrayList<K> = new ArrayList<K>();
        
        for(let pair of this.internalList){
                keys.add(pair.key);
        }

        return keys.toArray();
    }

    /**
     * 
     * @returns 
     */
    values(): Array<V>{
        let values: ArrayList<V> = new ArrayList<V>();
        
        for(let pair of this.internalList){
                values.add(pair.value);
        }

        return values.toArray();
    }

    /**
     * 
     * @returns 
     */
    toArray() : Array<KeyValuePair<K, V>>{
        return this.internalList.toArray();
    }
}