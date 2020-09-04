let particles = [];
let distances = [];
let time;
function setup() {
    createCanvas(600,600);
    time = 0;
    smooth();
    filter(GRAY)
}

function draw() {
    background(0);
     strokeWeight(1);
    
    translate(width/2,height/2)
   
    if(time<100){
    particles[time] = new Particle(time);
    }
    for(i = 0;i<particles.length;i++){
        particles[i].render();
        //console.log(particles[0].d);
      //  particles[i].velocity.sub(mouse)
        
    }
    for(i = 0;i<particles.length;i++){
    
        
    }
    
    for(i = 0;i<particles.length;i++){
        for(c = 0;c<particles.length;c++){
                if(particles[i].pos.x>300||particles[i].pos.x<-300||particles[i].pos.y>300||particles[i].pos.y<-300){
               
                
             particles[i] = new Particle();
            }
              
                  if(particles[i].pos.x<=particles[c].pos.x+30&&particles[i].pos.x>=particles[c].pos.x-30){
                      if(particles[i].pos.y<=particles[c].pos.y+30&&particles[i].pos.y>=particles[c].pos.y-30){
                         stroke(255,115,0,particles[i].d.x+particles[i].d.y);
                          line(particles[i].pos.x,particles[i].pos.y,particles[c].pos.x,particles[c].pos.y)}
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
    }
    
    render(){
        this.update()
        stroke(0);
        this.d.x=this.pos.x;
        this.d.y=this.pos.y;
        if(this.d.x<0){
            this.d.x*=-1
        }
       
        if(this.d.y<0){
            this.d.y*=-1
        }
         noFill()
     //    stroke(255,115,0,particles[i].d.x+particles[i].d.y);
   // rect(this.pos.x-50,this.pos.y-50,100,100)
        fill(255,115,0,this.d.x+this.d.y);
        ellipse(this.pos.x,this.pos.y,1,1);
        
    }
 
    
    update(){
        this.pos.add(this.velocity);
         if(mouseX-300>=this.pos.x-50&&mouseY-300>=this.pos.y-50){
             if(mouseX-300<=this.pos.x+50&&mouseY-300<=this.pos.y+50){
                 if(this.velocity.y>0){
                    this.velocity.y*=1.01
                 }else{
                     this.velocity.y*=-1;
                     this.velocity.y*=1.01
                 }
             }
         }
        if(mouseX-300>=this.pos.x-50&&mouseY-300>=this.pos.y){
             if(mouseX-300<=this.pos.x+50&&mouseY-300<=this.pos.y+50){
                 if(this.velocity.y<0){
                    this.velocity.y*=1.01
                 }else{
                     this.velocity.y*=-1;
                     this.velocity.y*=1.01
                 }
             }
         }
        if(mouseX-300>=this.pos.x&&mouseY-300>=this.pos.y-50){
             if(mouseX-300<=this.pos.x+50&&mouseY-300<=this.pos.y+50){
                 if(this.velocity.x<0){
                    this.velocity.x*=1.01
                 }else{
                     this.velocity.x*=-1;
                     this.velocity.x*=1.01
                 }
             }
         }
        if(mouseX-300>=this.pos.x-50&&mouseY-300>=this.pos.y-50){
             if(mouseX-300<=this.pos.x&&mouseY-300<=this.pos.y){
                 if(this.velocity.x>0){
                    this.velocity.x*=1.01
                 }else{
                     this.velocity.x*=-1;
                     this.velocity.x*=1.01
                 }
             }
         }
       
         }          
                
        
        
    
    }
    
    

     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
