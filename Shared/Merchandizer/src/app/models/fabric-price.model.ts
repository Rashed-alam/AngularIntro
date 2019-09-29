export class FabricPriceModel{
    auto_id: number;
    mailDate : Date;
    entryDate : Date;
    buyerName : string;
    buyerCode: string;
    size : string;
    referenceId : string;
    fabricPriceInformation : [  {
            styleCode : string;
            fabricType : number;
            itemName : string;
            wastePercentage : number;
            chestSize : number;
            lengthSize : number;
            sleeveSize : number;
            unitOfMeasurement: string;
            hoodSize : number;
            bottomSize : number;
            thighSize : number;
            pocketSize : number;
            fabricWeight : number;
            currency : string;
            fabricUnitPrice : number;
            fabricTotalPrice : number;
            rimPrice : number;
            cmPrice : number;
            trimPrice : number;
            printPrice : number;
            docPrice : number;
            perDozenPrice : number;
            perUnitPrice : number;
        }
    ]
}