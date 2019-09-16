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
            fabricWeight : string;
            currency : string;
            fabricUnitPrice : string;
            fabricTotalPrice : string;
            rimPrice : string;
            cmPrice : string;
            trimPrice : string;
            printPrice : string;
            docPrice : string;
            perDozenPrice : string;
            perUnitPrice : string;
        }
    ]
}