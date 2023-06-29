export = ArrayList;

declare class ArrayList<T>{

    constructor();

    move(newPosition: number, item: T): void;
    insertAt(position: number, item: T): void;
    add(item: T) : void;
    remove(item: T) : void;

    removeAt(index: number): void;

    get(index: number): T;
    toArray(): Array<T>;

    size() : number;
    indexOf(item: T): number;

    clear(): void;
    has(key: T): boolean;

}