function Car(make, model,color){
	this.make = make;
	this.model = model;
	this.color = color;
	this.year = new Date().getFullYear();
	this.state = "off";
	this.previousOwners = [];
	this.currentOwner = "Honda";
	this.passengers = [];
	this.park = function(){
		if (this.state === "off"){
			return true;
		} else {
			return false;
		}
	};
}
Car.prototype.dropoff = function(name){
  if (this.state === "on" && this.passengers.indexOf(name) != -1){
    this.passengers.splice(this.passengers.indexOf(name),1);
  }
};

Car.prototype.pickUp = function(name){
  if (this.state === "on"){
    this.passengers.push(name);
  } 
};

Car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner);
	this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;

};

Car.prototype.start = function(){
	this.state = "on";
};
Car.prototype.off = function(){
	this.state = "off";
};

module.exports=Car;