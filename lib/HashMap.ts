import { ArrayList } from "./ArrayList"

import { KeyValuePair } from "./KeyValuePair";

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
    Put(key: K, value: V): void{
        this.internalList.Add(new KeyValuePair(key, value));
    }

    /**
     * 
     * @param key 
     * @param value 
     * @returns 
     */
    PutIfAbsent(key: K, value:V): void{
        for(let i of this.internalList.ToArray()){
            if(i.key === key){
                i.value = value;
                return;
            }
        }
        this.Put(key, value);
    }

    /**
     * 
     * @param key 
     * @returns 
     */
    Get(key: K){
        for(let i of this.internalList.ToArray()){
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
    GetOrDefault(key: K, defaultValue: V) : V{
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
    IndexOf(key: K): number{
        for(let i = 0; i < this.internalList.Size(); i++){
            if(key === this.internalList.Get(i).key){
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
    GetKeysOf(value: V): Array<K>{
        let keys: ArrayList<K> = new ArrayList<K>();
        
        for(let pair of this.internalList){
            if(pair.value === value){
                keys.Add(pair.key);
            }
        }

        return keys.ToArray();
    }

    /**
     * 
     * @returns 
     */
    Keys() : Array<K>{
        let keys: ArrayList<K> = new ArrayList<K>();
        
        for(let pair of this.internalList){
                keys.Add(pair.key);
        }

        return keys.ToArray();
    }

    /**
     * 
     * @returns 
     */
    Values(): Array<V>{
        let values: ArrayList<V> = new ArrayList<V>();
        
        for(let pair of this.internalList){
                values.Add(pair.value);
        }

        return values.ToArray();
    }

    /**
     * 
     * @returns 
     */
    ToArray() : Array<KeyValuePair<K, V>>{
        return this.internalList.ToArray();
    }
}