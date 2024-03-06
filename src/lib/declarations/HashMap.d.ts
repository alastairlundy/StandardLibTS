import { KeyValuePair } from "../KeyValuePair"

export = HashMap

declare class HashMap<K, V>{

    constructor();

    public put(key: K, value: V): void;
    public putPair(keyValuePair: KeyValuePair<K, V>): void;

    public putIfAbsent(key: K, value:V): void;
    public putPairIfAbsent(keyValuePair: KeyValuePair<K, V>): void;

    public get(key: K): any;
    public getOrDefault(key: K, defaultValue: V) : V;

    public indexOf(key: K): number;
    public getKeysOf(value: V): Array<K>;
    public keys() : Array<K>;
    public values(): Array<V>;
    public toArray() : Array<KeyValuePair<K, V>>;

    public contains(key: K): boolean;
    public containsPair(keyValuePair: KeyValuePair<K, V>): boolean;

    public equals(hashMap: HashMap<K, V>): boolean;
}