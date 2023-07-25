import { KeyValuePair } from "../KeyValuePair"

export = HashMap

declare class HashMap<K, V>{

    constructor();

    Put(key: K, value: V): void;
    PutIfAbsent(key: K, value:V): void;

    Get(key: K): any;
    GetOrDefault(key: K, defaultValue: V) : V;

    IndexOf(key: K): number;
    GetKeysOf(value: V): Array<K>;
    Keys() : Array<K>;
    Values(): Array<V>;
    ToArray() : Array<KeyValuePair<K, V>>;
}