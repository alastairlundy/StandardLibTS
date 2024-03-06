export = KeyValuePair;

declare class KeyValuePair<K, V>{

    public key: K;
    public value: V;

    constructor(key: K, value: V);

    public equals(keyValuePair: KeyValuePair<K, V>): boolean;
}