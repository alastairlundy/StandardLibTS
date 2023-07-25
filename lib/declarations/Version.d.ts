export = Version;

declare class Version{

    constructor(majorVersion: number, minorVersion: number, buildVersion: number, revisionVersion: number);

    Equals(): boolean;
    IsNewerThan(version: Version): boolean;
    ToString(): string;

    GetMajorVersion(): number;
    GetMinorVersion(): number;
    GetBuildVersion(): number;
    GetRevisionVersion(): number;

    SetMajorVersion(majorVersion: number): void;
    SetMinorVersion(minorVersion: number): void;
    SetBuildVersion(buildVersion: number): void;
    SetRevisionVersion(revisionVersion: number): void;
}