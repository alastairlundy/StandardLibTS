export = ArrayList;

declare class ArrayList<T>{

    constructor();

    Move(newPosition: number, item: T): void;
    InsertAt(position: number, item: T): void;
    Add(item: T) : void;
    Remove(item: T) : void;

    RemoveAt(index: number): void;

    Get(index: number): T;
    ToArray(): Array<T>;

    Size() : number;
    IndexOf(item: T): number;

    Clear(): void;
    Has(key: T): boolean;

}