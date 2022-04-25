function employee(id:number,name:string){
    this.id=id
    this.name=name
}
var emp=new employee(123,"nidhi")
employee.prototype.email="nidhi@gmail.com"

console.log("employee's id : "+emp.id)
console.log("employee's name : "+emp.name)
console.log("employee's email id : "+emp.email)
