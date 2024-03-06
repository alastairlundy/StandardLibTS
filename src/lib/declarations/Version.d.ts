export = Version;

declare class Version{

    constructor(majorVersion: number, minorVersion: number, buildVersion: number, revisionVersion: number);

    public equals(): boolean;

    public isNewerThan(version: Version): boolean;
    public toString(): string;

    public getMajorVersion(): number;
    public getMinorVersion(): number;
    public getBuildVersion(): number;
    public getRevisionVersion(): number;

    public setMajorVersion(majorVersion: number): void;
    public setMinorVersion(minorVersion: number): void;
    public setBuildVersion(buildVersion: number): void;
    public setRevisionVersion(revisionVersion: number): void;
}