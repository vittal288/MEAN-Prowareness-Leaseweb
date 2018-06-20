export class TenantContextInfo {

    public missionId: string;
    public missionName: string;
    public copId: string;
    public copName: string;
    public countryCode: string;
    public jurisdictionName: string;
    public jurisDictionId: string;
    public visaCategory: string;
    public visaSubCategory: string;
    public visaCategoryId: string;
    public visaSubCategoryId: string;

    constructor(missionId: string,
        missionName: string,
        copId: string,
        copName: string,
        countryCode: string,
        jurisdictionName: string,
        jurisDictionId: string,
        visaCategory: string,
        visaSubCategory: string,
        visaCategoryId: string,
        visaSubCategoryId: string) {

        this.missionId = missionId;
        this.missionName = missionName;
        this.copId = copId;
        this.copName = copName;
        this.countryCode = countryCode;
        this.jurisdictionName = jurisdictionName;
        this.jurisDictionId = jurisDictionId;
        this.visaCategory = visaCategory;
        this.visaSubCategory = visaSubCategory;
        this.visaCategoryId = visaCategoryId;
        this.visaSubCategoryId = visaSubCategoryId;

    }
}
