import { KeyValuePair } from "../Types/KeyValuePair";

export = KeyValuePair;

declare class KeyValuePair<K, V>{

    key: K;
    value: V;

    constructor(key: K, value: V);
}