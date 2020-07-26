//create a biosensor simulator
//useful for many people
//display output to the console 
// simulates the hr 


//class to generate heart rate with owner name 

class Biosensor {
    constructor(name) {
        this.owner = name;
        this.heartRate = 0;
        this.live();
    }
    //generate a random heart rate between a given range
    getRandomHeartRate(min, max) {
        return parseInt(Math.random() * (max - min) + min);
      }
    
    //generate heart rate for the user
    beat(){
       let hr = this.getRandomHeartRate(60, 79);
       this.heartRate = hr; 
       console.log("[Owner]: " + this.owner + " ------- [HR]: " + this.heartRate); 
    }
    //keep generating a random heart rate every 2 seconds for the user
    live(){
        setInterval(()=>{this.beat()}, 2000);
    }


}

let James = new Biosensor('James');
let Andrea = new Biosensor('Andrea');
console.log(James);
console.log(Andrea);
