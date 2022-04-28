class PrinterClass{
    doPrint():void{
        console.log("doPrint() called fromparent")
    }
}

class StringPrinter extends PrinterClass{
    doPrint(): void {
        super.doPrint()
        console.log("doPrint called from childclass")
    }
}

var printerObj=new StringPrinter()

printerObj.doPrint()