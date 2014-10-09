// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time

var Car = require('../src/car.js'),
expect = require('chai').expect;

describe('Car', function(){

  beforeEach(function(){
    // var today = new Date().getFullYear();
    // create a new myCar object each time
    myCar = new Car();
  });

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current year', function(){
      expect(myCar.year).to.equal(2014);
    });
  });

  describe('#state', function(){
    it('should initially be off', function(){
      expect(myCar.state).to.equal("off");
    });
  });

  describe('#previousOwners', function(){
    it('should initially be empty', function(){
      expect(myCar.previousOwners).to.be.empty;
    });
  });

  describe('#curretOwner', function(){
    it('should initially be manufacturer', function(){
      expect(myCar.currentOwner).to.eql("Honda");
    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){
      expect(myCar.passengers).to.be.empty;
    });
  });

  describe('#sale', function(){

    
    it('should move currentOwner to previousOwners array', function(){
      myCar.sale("Bill");
      expect("Honda").to.eql(myCar.previousOwners[0]);
    });

    it('should update currentOwner with the new owner', function(){
      myCar.sale("Bill");
      expect(myCar.currentOwner).to.eql("Bill");
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
      myCar = new Car("make", "model", "red");
      myCar.paint("blue");
      expect(myCar.color).to.eql("blue");
    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){
      myCar.start();
      expect(myCar.state).to.eql("on");
    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){
      myCar.off();
      expect(myCar.state).to.eql("off");
    });
  });

  describe('#park', function(){
    it('should make sure to only work when the car is off', function(){
      myCar.off();
      expect(myCar.park()).to.eql(true);
    });

  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){
      myCar.start();
      myCar.pickUp("carl");
      // expect(myCar.passengers).to.contain("carl");
      expect(myCar.passengers.length).to.equal(1)
      // console.log(myCar.passengers);
    });

    it('should not modify the passengers array if car is off', function(){
      myCar.off();
      myCar.passengers = [];
      myCar.pickUp("carl");
      expect(myCar.passengers).to.be.empty;
    });
  });

  describe('#dropOff', function(){
    it('should remove passenger from the passengers array if car is on', function(){
      myCar.start();
      myCar.passengers = ["Kesslee", "The Monarch", "Lex Luthor", "Zorg"];
      myCar.dropoff("The Monarch");
      expect(myCar.passengers.length).to.equal(3);
    });

    it('should leave passenger in the passengers array if car is off', function(){
      myCar.off();
      myCar.passengers = ["Kesslee", "The Monarch", "Lex Luthor", "Zorg"];
      myCar.dropoff("The Monarch");
      expect(myCar.passengers.length).to.equal(4);
    });
  });

});


