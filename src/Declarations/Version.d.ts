export = Version;

declare class Version{

    constructor(majorVersion: number, minorVersion: number, buildVersion: number, revisionVersion: number);

    equals(): boolean;
    isNewerThan(version: Version): boolean;
    toString(): string;

    getMajorVersion(): number;
    getMinorVersion(): number;
    getBuildVersion(): number;
    getRevisionVersion(): number;

    setMajorVersion(majorVersion: number): void;
    setMinorVersion(minorVersion: number): void;
    setBuildVersion(buildVersion: number): void;
    setRevisionVersion(revisionVersion: number): void;
}