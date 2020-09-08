let particles = [];
let distances = [];
let time;
let backImage;
let pointImage;

function preload(){
    backImage = loadImage("assets/back2.jpg")
    pointImage = loadImage("assets/point.png")
}

function setup() {
    createCanvas(innerWidth,innerHeight);
    time = 0;
  noCursor();
   
}

function draw() {
    
    background(0);
    
    image(backImage,0,0,width+200,height+200)
    
    stroke(255,115,0)
    strokeWeight(0.5);
    if(!mouseIsPressed){
        ellipse(mouseX+23,mouseY-3,60)
    text("Cliccami",mouseX,mouseY)
    }
    translate(width/2,height/2)
   
    if(time<300){
    particles[time] = new Particle(time);
    }


    
    for(i = 0;i<particles.length;i++){
        particles[i].render();
        for(c = 0;c<particles.length;c++){
           if(c!=i){
              
                  if(particles[i].pos.x<=particles[c].pos.x+30&&particles[i].pos.x>=particles[c].pos.x-30){
                      if(particles[i].pos.y<=particles[c].pos.y+30&&particles[i].pos.y>=particles[c].pos.y-30){
                         stroke(255,115,0,particles[i].d.x+particles[i].d.y);
                          line(particles[i].pos.x,particles[i].pos.y,particles[c].pos.x,particles[c].pos.y)
                      }
                        }
              
             
            
                    }else{
                        break;
                    }
        }
       
            
        }
    
    time++;
    
    
   
}




class Particle{
    
    constructor(index){
      
        this.pos = createVector(random(-100,100),random(-100,100));
        this.velocity = createVector(random(-1,1),random(-1,1))
        this.d = createVector(this.pos.x,this.pos.y);
        this.s = 5;
        
    }
    
    render(){
        this.update()
    //    stroke(0);
        this.d.x=this.pos.x;
        this.d.y=this.pos.y;
        if(this.d.x<0){
            this.d.x*=-1
        }
       
        if(this.d.y<0){
            this.d.y*=-1
        }
         noFill()
         stroke(255,115,0,this.d.x+this.d.y);
   // rect(this.pos.x-50,this.pos.y-50,100,100)
       // fill(255,115,0,this.d.x+this.d.y);
       // ellipse(this.pos.x,this.pos.y,1,1);
        
        image(pointImage,this.pos.x-((this.d.x+this.d.y)/40)/2,this.pos.y-((this.d.x+this.d.y)/40)/2,(this.d.x+this.d.y)/40,(this.d.x+this.d.y)/40) 
        
    }
 
    
    update(){
        
         if(this.pos.x>width/2||this.pos.x<-width/2||this.pos.y>height/2||this.pos.y<-height/2){
               this.pos = createVector(random(-100,100),random(-100,100));
               this.velocity = createVector(random(-1,1),random(-1,1))
            }
        
        if(!mouseIsPressed){
        
        this.pos.add(this.velocity);
         if(mouseX-width/2>=this.pos.x-50&&mouseY-height/2>=this.pos.y-50){
             if(mouseX-width/2<=this.pos.x+50&&mouseY-height/2<=this.pos.y+50){
                 if(this.velocity.y>0){
                    this.velocity.y*=1.1
                 }else{
                     this.velocity.y*=-1;
                     this.velocity.y*=1.1
                 }
             }
         }
        if(mouseX-width/2>=this.pos.x-50&&mouseY-height/2>=this.pos.y){
             if(mouseX-width/2<=this.pos.x+50&&mouseY-height/2<=this.pos.y+50){
                 if(this.velocity.y<0){
                    this.velocity.y*=1.1
                 }else{
                     this.velocity.y*=-1;
                     this.velocity.y*=1.1
                 }
             }
         }
        if(mouseX-width/2>=this.pos.x&&mouseY-height/2>=this.pos.y-50){
             if(mouseX-width/2<=this.pos.x+50&&mouseY-height/2<=this.pos.y+50){
                 if(this.velocity.x<0){
                    this.velocity.x*=1.1
                 }else{
                     this.velocity.x*=-1;
                     this.velocity.x*=1.1
                 }
             }
         }
        if(mouseX-width/2>=this.pos.x-50&&mouseY-height/2>=this.pos.y-50){
             if(mouseX-width/2<=this.pos.x&&mouseY-height/2<=this.pos.y){
                 if(this.velocity.x>0){
                    this.velocity.x*=1.1
                 }else{
                     this.velocity.x*=-1;
                     this.velocity.x*=1.1
                 }
             }
         }
        
        
        
        }else{
             var mouse = createVector(mouseX-width/2,mouseY-height/2);
    var acceleration = p5.Vector.sub(mouse,this.pos);
    // Set magnitude of acceleration
    acceleration.setMag(0.4);

    this.velocity.add(acceleration);
 //   this.velocity.limit(this.topspeed);
    this.pos.add(this.velocity);
        }
       
         }          
                
        
        
    
    }
    
    

     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    