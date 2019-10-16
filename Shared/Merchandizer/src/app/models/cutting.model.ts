export class cuttingModel{
    referenceId : string;
    styleCode : string;
    remarks: string;
    cutting:[
        { color:string;  size: number; weight:number;row:number;col:number;}
    ]
}