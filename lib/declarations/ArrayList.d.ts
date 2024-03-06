export = ArrayList;

declare class ArrayList<T>{

    constructor();

   public move(newPosition: number, item: T): void;
   public insertAt(position: number, item: T): void;
   public add(item: T) : void;

   public remove(item: T) : void;
   public removeAt(index: number): void;

   public get(index: number): T;
   public toArray(): Array<T>;

   protected capacity(): number;
   public size() : number;
   public indexOf(item: T): number;

   public clear(): void;
   public contains(item: T): boolean;

   public equals(arrayList: ArrayList<T>): boolean;
}