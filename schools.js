class School{
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    quickFacts (){
      return (`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
      
    }
    
    static pickSubstituteTeacher(substituteTeachers){
      let i = Math.floor(Math.random()*(substituteTeachers.length-1))
      return substituteTeachers[i];
    }
  
   set numberOfStudents(num){
     if (isNaN(num)){
       this._numberOfStudents.push(num)
     }else{
       console.log('Invalid input: numberOfStudents must be set to a Number.')
     }
   }
  }
  
  class Primary extends School{
    constructor(name, numberOfStudents, pickUpPolicy){
      super(name, 'primary', numberOfStudents);
      this._pickUpPolicy = pickUpPolicy;
    }
    get pickUpPolicy(){
      return this._pickUpPolicy;
    }
  }
  
  class Middle extends School{
    constructor(name){
      super(name);
    }
  }
  
  class High extends School{
    constructor(name, numberOfStudents, sportsTeams){
      super(name, 'HighSchool', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
      return this._sportsTeams;
    }
  }
  
  // const lorraineHansbury = new Primary ('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
  
  // console.log (lorraineHansbury.quickFacts());
  
  // console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'] ))
  
  const alSmith = new High ('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
  
  console.log(alSmith.sportsTeams)