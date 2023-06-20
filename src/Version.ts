export class Version {
    protected majorVersion: number;
    protected minorVersion: number;
    protected buildVersion: number;
    protected revisionVersion: number;

    constructor(majorVersion: number, minorVersion: number, buildVersion: number, revisionVersion: number){
        this.majorVersion = majorVersion;
        this.minorVersion = minorVersion;
        this.buildVersion = buildVersion;
        this.revisionVersion = revisionVersion;
    }

    public equals(version: Version): boolean{
        return ((this.majorVersion === version.majorVersion)
         && (this.minorVersion === version.minorVersion)
          && (this.buildVersion === version.buildVersion)
           && (this.revisionVersion === version.revisionVersion));
    }    
}