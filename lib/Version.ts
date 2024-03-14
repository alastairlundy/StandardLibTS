/*
    A class to represent versions of Software or other things.
 */
export class Version {
    protected majorVersion: number;
    protected minorVersion: number;
    protected buildVersion: number;
    protected revisionVersion: number;

    /**
     *
     * @param majorVersion
     * @param minorVersion
     * @param buildVersion
     * @param revisionVersion
     */
    constructor(majorVersion: number, minorVersion: number, buildVersion: number, revisionVersion: number){
        this.majorVersion = majorVersion;
        this.minorVersion = minorVersion;
        this.buildVersion = buildVersion;
        this.revisionVersion = revisionVersion;
    }

    /**
     * Returns whether another Version object is equal to this version object.
     * @param version
     */
    public equals(version: Version): boolean{
        return ((this.majorVersion === version.majorVersion)
         && (this.minorVersion === version.minorVersion)
          && (this.buildVersion === version.buildVersion)
           && (this.revisionVersion === version.revisionVersion));
    }

    /**
     * Returns whether another Version object is a newer version than this version object.
     * @param version
     */
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

    /**
     * Returns the version in a string format of Major.Minor.Build.Revision
     */
    public toString() : string{
        return this.majorVersion.toString() + "." + this.minorVersion.toString() + "." + this.buildVersion.toString() + "." + this.revisionVersion.toString();
    }

    /**
     * Returns the major version of this version object.
     */
    public getMajorVersion(): number{
        return this.majorVersion;
    }

    /**
     * Returns the minor version of this version object.
     */
    public getMinorVersion(): number{
        return this.minorVersion;
    }

    /**
     * Returns the build version of this version object.
     */
    public getBuildVersion(): number{
        return this.buildVersion;
    }

    /**
     * Returns the revision version of this version object.
     */
    public getRevisionVersion(): number{
        return this.revisionVersion;
    }

    /**
     * Sets the major version of this version object to a specified number.
     * @param majorVersion
     */
    public setMajorVersion(majorVersion: number): void{
        this.majorVersion = majorVersion;
    }

    /**
     * Sets the minor version of this version object to a specified number.
     * @param minorVersion
     */
    public setMinorVersion(minorVersion: number): void{
        this.minorVersion = minorVersion;
    }

    /**
     * Sets the build version of this version object to a specified number.
     * @param buildVersion
     */
    public setBuildVersion(buildVersion: number): void{
        this.buildVersion = buildVersion;
    }

    /**
     * Sets the revision version of this version object to a specified number.
     * @param revisionVersion
     */
    public setRevisionVersion(revisionVersion: number): void{
        this.revisionVersion = revisionVersion;
    }
}