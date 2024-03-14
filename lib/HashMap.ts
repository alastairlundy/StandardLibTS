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

    public [Symbol.iterator](){
        return this.internalList.toArray().values;
    }

    /**
     * Adds a Key with it's associated Value to the HashMap
     * @param key 
     * @param value 
     */
    public put(key: K, value: V): void{
        this.internalList.add(new KeyValuePair(key, value));
    }

    /**
     * Add a KeyValuePair to the HashMap.
     * @param keyValuePair
     */
    public putPair(keyValuePair: KeyValuePair<K, V>): void{
        this.internalList.add(keyValuePair);
    }

    /**
     * If the key specified is not found within the hashmap, the key and value are added to it.
     * @param key 
     * @param value 
     * @returns 
     */
    public putIfAbsent(key: K, value:V): void{
        for(let i of this.internalList){
            if(i.key === key){
                i.value = value;
                return;
            }
        }
        this.put(key, value);
    }

    /**
     * If the KeyValuePair is not found within the hashmap, the KeyValuePair is added to it.
     * @param keyValuePair
     */
    public putPairIfAbsent(keyValuePair: KeyValuePair<K, V>) : void{
        for(let i of this.internalList){
            if(i.equals(keyValuePair)){
                return;
            }
        }
        this.putPair(keyValuePair);
    }

    /**
     * Returns the Value associated with the Key.
     * If no value is associated with the Key undefined is returned instead.
     * @param key 
     * @returns
     */
    public get(key: K){
        for(let i of this.internalList){
            if(i.key === key){
               return i.value;
            }
        }   

        return undefined;
    }

    /**
     * Returns either the value associated with the key, or if the key is not present the specified default value is returned.
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
     * Returns the Index of a Key within a HashMap.
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
     * Get Keys associated with a Value.
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
     * Returns all keys in the HashMap.
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
     * Returns all values in the HashMap.
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
     * Returns whether the HashMap contains a specified Key.
     * @param key
     */
    public contains(key: K): boolean{
        let found: boolean = false;

        for(let k of this.internalList){
            if(k === key){
                found = true;
            }
        }
        return found;
    }

    /**
     * Returns whether the HashMap contains a specified KeyValuePair.
     * @param keyValuePair
     */
    public containsPair(keyValuePair: KeyValuePair<K, V>): boolean{
        let found: boolean = false;

        for(let k of this.internalList){
            if(k.equals(keyValuePair)){
                found = true;
            }
        }
        return found;
    }

    /**
     * Returns the HashMap as an Array of KeyValuePairs.
     * @returns 
     */
    public toArray() : Array<KeyValuePair<K, V>>{
        return this.internalList.toArray();
    }

    /**
     * Returns whether a specified HashMap is equal to this HashMap.
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