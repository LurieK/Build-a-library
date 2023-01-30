class Media{
    constructor (title){
      this._title = title;
      this._ratings = [];
      this._isCheckedOut=false;
    }
    get title (){
      return this._title;
    }
    get ratings(){
      return this._ratings;
    }
    get isCheckedOut (){
      return this._isCheckedOut;
    }
    set isCheckedOut(value){
      this._isCheckedOut = value;
    }
    toggleCheckOutStatus(value){
      if (value===true){
        this._isCheckedOut = false;
      }else{
        this._isCheckedOut = true;
      }
    }
    getAverageRating(){
      let avg = this._ratings.reduce(
        (c,a)=>c+a,0)/ this._ratings.length;
  
        return avg;
    }
    addRating(rating){
     if (rating <= 5){
        this._ratings.push(rating);
    }else{
      console.log('Please leave a rating between 0 and 5')
    }   
    }
  
    shuffleSongs (songs){ 
      songsShuffled=[];
      while(songsShuggled.length < 5){
      let i = Math.floor(Math.random()*this._songs.length);
      
        if(!songsShuffled.includes(this._songs[i])){
          songsShuffled.push(this._songs[i])
        }
      }
  return songsShuffled
    }
  }
  
  
  
  class Book extends Media {
    constructor (title, author, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor (title, director, runtime){
      super(title);
      this._director = 'director';
      this._runtime = runtime;
    }
    get director(){
      return this._director;
    }
    get runtime(){
      return this._runtime;
    }
  }
  
  class CD extends Media {
    constructor (title, artist, songs){
      super(title);
      this._artist = artist;
      this._songs= songs;
    }
  
    get artist(){
      return this._artist;
    }
    get songs(){
      return this._songs;
    }
  }
   
  const aWoman = new CD ('aWoman', 'Qveen Herby',['A Woman', 'Qveen Herby', 'Faster', 'A Woman', 'Good Morning', 'Celien Dion'])
  
  aWoman.toggleCheckOutStatus();
  
  console.log(aWoman.isCheckedOut)
  
  console.log(aWoman.songs)
  console.log(aWoman.shuffleSongs)

  const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson', 544)

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4,5,5)

console.log(historyOfEverything.getAverageRating())

const speed = new Movie ('Speed', 'Jan de Bont', 116)

speed.toggleCheckOutStatus();

console.log(speed.isCheckedOut)

speed.addRating(1,1,5);

console.log(speed.getAverageRating())
