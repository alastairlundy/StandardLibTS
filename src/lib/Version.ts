/*
    A class to represent versions of Software.
 */
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

    public isNewerThan(version: Version): boolean{
        if(this.majorVersion > version.majorVersion){
            return true;
        }
        else if(this.majorVersion == version.majorVersion){
            if(this.minorVersion > version.minorVersion){
                return true;
            }
            else if(this.minorVersion == version.minorVersion){
                if(this.buildVersion == version.buildVersion){
                    if(this.revisionVersion > version.revisionVersion){
                        return true;
                    }
                    else{
                        return false;
                    }
                }
                else if(this.buildVersion > version.buildVersion){
                    return true;
                }
                else{
                    return false;
                }
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }

    public toString() : string{
        return this.majorVersion.toString() + "." + this.minorVersion.toString() + "." + this.buildVersion.toString() + "." + this.revisionVersion.toString();
    }

    public getMajorVersion(): number{
        return this.majorVersion;
    }
    public getMinorVersion(): number{
        return this.minorVersion;
    }
    public getBuildVersion(): number{
        return this.buildVersion;
    }
    public getRevisionVersion(): number{
        return this.revisionVersion;
    }

    public setMajorVersion(majorVersion: number): void{
        this.majorVersion = majorVersion;
    }
    public setMinorVersion(minorVersion: number): void{
        this.minorVersion = minorVersion;
    }
    public setBuildVersion(buildVersion: number): void{
        this.buildVersion = buildVersion;
    }
    public setRevisionVersion(revisionVersion: number): void{
        this.revisionVersion = revisionVersion;
    }
}