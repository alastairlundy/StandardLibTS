export class KeyValuePair<K, V>{
    public key: K;
    public value: V;

    constructor(key: K, value: V){
        this.key = key;
        this.value = value;
    }

    public equals(keyValuePair: KeyValuePair<K, V>): boolean{
        return (this.key === keyValuePair.key) && (this.value === keyValuePair.value);
    }
}