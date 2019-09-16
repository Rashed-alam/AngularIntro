export class FabricPriceModel{
    auto_id: number;
    mailDate : string;
    entryDate : string;
    buyerName : string;
    size : string;
    referenceId : string;
    fabricPriceInformation : [  {
            styleCode : string;
            fabricType : string;
            itemName : string;
            wastePercentage : number;
            chestSize : number;
            chestUom:string;
            lengthSize : number;
            lengthUom: string;
            sleeveSize : number;
            sleeveUom: string;
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