    export class DisplayAttribute {
        atttributeCode: string;
        attributeName: string;
        attributeValue: string;
        attributeValueCode: string;
        constructor(atttributeCode: string,
            attributeName: string,
            attributeValue: string,
            attributeValueCode: string) {
                this.atttributeCode = atttributeCode;
                this.attributeName = attributeName;
                this.attributeValue = attributeValue;
                this.attributeValueCode = attributeValueCode;
            }
    }

    export class VisaFees {
        visaFeesId: string;
        visaFeesParameter: string;
        visaFees: number;
        currencyName: string;
        effectiveDate: Date;
        expiryDate: Date;
        fees: number;
        constructor(visaFeesId: string,
            visaFeesParameter: string,
            visaFees: number,
            currencyName: string,
            effectiveDate: Date,
            expiryDate: Date,
            fees: number) {
                this.visaFeesId = visaFeesId;
                this.visaFeesParameter = visaFeesParameter;
                this.visaFees = visaFees;
                this.currencyName = currencyName;
                this.effectiveDate = effectiveDate;
                this.expiryDate = expiryDate;
                this.fees = fees;
            }
    }

    export class Document {
        documentCheckListId: string;
        code: string;
        name: string;
        description: string;
        constructor(documentCheckListId: string,
            code: string,
            name: string,
            description: string) {
                this.documentCheckListId = documentCheckListId;
                this.code = code;
                this.name = name;
                this.description = description;
            }
    }

    export class VisaResultsModel {
        visaTypeId: string;
        code: string;
        name: string;
        displayAttributes: DisplayAttribute[];
        visaFees: VisaFees;
        documents: Document[];
        checked: boolean;
        disabled: boolean;
        constructor(visaTypeId: string,
            code: string,
            name: string,
            displayAttributes: DisplayAttribute[],
            visaFees: VisaFees,
            documents: Document[],
            checked: boolean,
            disabled: boolean) {
                this.visaTypeId = visaTypeId;
                this.code = code;
                this.name = name;
                this.displayAttributes = displayAttributes;
                this.visaFees = visaFees;
                this.documents = documents;
                this.checked = checked;
                this.disabled = disabled;
            }
    }

