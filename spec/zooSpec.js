var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      zoo.changeLocation("Denver");
      expect(zoo.location).toBe("Denver");
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.open();
      expect(zoo.status).toBe('open');
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.open();
      zoo.isOpen();
      expect(zoo.isOpen()).toBe('Open!');
    });
    it('should see if the zoo is closed', function(){
      zoo.close();
      expect(zoo.status).toBe('closed');
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([]);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      zoo.close();
      zoo.addAnimal('Tiger');
      expect(zoo.addAnimal()).toEqual(false);
    });
    it('should add an animal to the animals array', function(){
      zoo.open();
      var tomZebra = new Animal("Tommy" , 5, 'zebra');
      zoo.addAnimal(tomZebra);
      expect(zoo.animals[0].kind).toEqual('zebra');
});        
    

    it('should only add instances of animals', function(){
      var tomZebra = new Animal("Tommy" , 5, 'zebra');
      zoo.addAnimal(tomZebra);
      expect(tomZebra instanceof Animal).toBe(true);
    });

    it('should not add duplicates', function(){
      zoo.open();
      var tomZebra = new Animal("Tommy" ,5, 'zebra');
      zoo.addAnimal(tomZebra);
      zoo.addAnimal(tomZebra);
      expect(zoo.animals.length).toBe(1);
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.open();
      zoo.addAnimal(lion);
      expect(zoo.animals).toEqual([lion]);
      zoo.removeAnimal(lion);
      expect(zoo.animals).toEqual([]);
    });
  });
});


