// конструктор объекта "Двигатель" 
function Engine (cil, v) {
    this.cilCount = cil;
    this.v = v;
    return this;
}
// конструктор объекта "Автомобиль" 
function Automobile (aVendorName, aModel, nCil, V) {
    this.vendor = aVendorName;
    this.model = aModel;
    this.engine = new Engine (nCil, V);
    this.getInfo = autoInfo;
 
    return this;
}
function autoInfo() {
    alert ("Производитель: "+this.vendor+"\n"+
           "Модель: "+this.model+"\n"+
           "Двигатель: "+this.engine.cilCount+"цил. объем "+this.engine.v+"л.\n"); 
}
 
var myAuto = new Automobile("Toyota", "Celica", 6, 2.2);
// myAuto.getInfo();

Automobile.prototype.getModel = function() {
    return this.model;
    };