import { ArrayList } from "./ArrayList"

import { KeyValuePair } from "./KeyValuePair";

    /**
 * A class that mimics C# Dictionaries and Java HashMaps. 
 */
 export class HashMap<K, V>{
    protected internalList : ArrayList<KeyValuePair<K, V>>;

    public constructor(){
        this.internalList = new ArrayList<KeyValuePair<K, V>>();
    }

    /**
     * Adds a Key and it's associated Value to the HashMap
     * @param key 
     * @param value 
     */
    public put(key: K, value: V): void{
        this.internalList.add(new KeyValuePair(key, value));
    }

    /**
     * 
     * @param key 
     * @param value 
     * @returns 
     */
    public putIfAbsent(key: K, value:V): void{
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
    public get(key: K){
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
    public getOrDefault(key: K, defaultValue: V) : V{
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
     * @returns Returns -1 if an error has occurred or the correct index if correctly detected.
     */
    public indexOf(key: K): number{
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
    public getKeysOf(value: V): Array<K>{
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
    public keys() : Array<K>{
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
    public values(): Array<V>{
        let values: ArrayList<V> = new ArrayList<V>();
        
        for(let pair of this.internalList){
                values.add(pair.value);
        }

        return values.toArray();
    }

    /**
     *
     * @param key
     */
    public contains(key: K): boolean{
        let found: boolean = false;

        for(let k of this.toArray()){
            if(k === key){
                found = true;
            }
        }
        return found;
    }

    /**
     *
     * @param keyValuePair
     */
    public containsPair(keyValuePair: KeyValuePair<K, V>): boolean{
        let found: boolean = false;

        for(let k of this.toArray()){
            if(k.equals(keyValuePair)){
                found = true;
            }
        }
        return found;
    }

    /**
     * 
     * @returns 
     */
    public toArray() : Array<KeyValuePair<K, V>>{
        return this.internalList.toArray();
    }

    /**
     *
     * @param hashMap
     */
    public equals(hashMap: HashMap<K, V>): boolean{
        let equality: boolean = true;

        for(let i of hashMap.toArray()){
            if(!this.containsPair(i)){
                equality = false;
            }
        }

        return equality;
    }
}