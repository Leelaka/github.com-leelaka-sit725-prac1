//create a biosensor simulator
//useful for many people
//display output to the console 
// simulates the hr 

class bioSensor{
    constructor(name){
        this.name = name;
        var rate = 0;
        rate++;
        var heartBeat = Math.floor((Math.random() * (72 - 60)) + 60);
        while (rate > 100){
        //var heartBeat = Math.floor((Math.random() * (72 - 60)) + 60);
        setInterval(heartBeat, 1000); 
        console.log(name, "current heart beat is: ", heartBeat);  
        }
    }
    
} 

var user1 = new bioSensor('Andrea');
var user2 = new bioSensor('James');

