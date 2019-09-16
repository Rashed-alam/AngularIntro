export class FabricPriceModel{
    auto_id: String;
    mailDate : string;
    entryDate : string;
    buyerName : string;
    size : string;
    referenceId : string;
    fabricPriceInformation : [  {
            styleCode : string;
            fabricType : string;
            itemName : string;
            wastePercentage : string;
            chestSize : string;
            chestUom:string;
            lengthSize : string;
            lengthUom: string;
            sleeveSize : string;
            sleeveUom: string;
            hoodSize : string;
            bottomSize : string;
            thighSize : string;
            pocketSize : string;
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
            remarks : string;
        }
    ]
}