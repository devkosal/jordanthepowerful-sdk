export class Jordan {
    private value:string;
    constructor(val:string) {
        this.value=val;
    }

    public sayit():void {
        console.log(`Jordan is ${this.value}`);
    }
}