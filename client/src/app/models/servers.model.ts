export class Servers{
    public model:string;
    public ram:any;
    public hdd:any;
    public location:string;
    public price:any;

    constructor(model:string,ram:any,hdd:any,location:string,price:any){
        this.model =model;
        this.ram =ram;
        this.hdd =hdd;
        this.location =location;  
        this.price =price;  
    }
}
