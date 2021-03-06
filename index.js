function ModelSimulator(options) {
  let self = this;
  self.models = options.models || [];
  self.pre_sections = options.pre_sections || [];
  self.pre_comments = options.pre_comments || [];

  //T squares are 60px
  /************************Data************************/
  self.rect_width = 560; //width the T occupies
  self.rect_height = 560; //height the T occupies
  self.radius = 10; //pixel size of model radius
  self.step = 40; //pixel size of model step
  self.move_index = -1; //which move to load first
  self.sections = []; //empty array to store song sections
  self.comments = []; // empty array to store comments
  self.interval = null;

  /*******************Initialization*******************/
  self.canvas = options.canvas || document.getElementsByTagName('canvas')[0]; //get the first canvas canvas
  self.ctx = self.canvas.getContext('2d');
  self.ctx.font = "15px Arial"; //font size and type

  self.text_bold = function(text,x,y) {
    self.ctx.font = "bold 15px Arial";
    self.ctx.fillText(text,x,y);
    self.ctx.font = "15px Arial";
  }

  // /***********************iframe video************************/
  // //many youtube music videos are blocked from being embeded, so it is often useless :/
  // let iframe = document.createElement('iframe');
  // iframe.width = 600;
  // iframe.height = 400;
  // iframe.frameBorder = "0";
  // iframe.src = video_src;
  // document.body.appendChild(iframe);


  /***********************Process models************************/
  //convert their moves into beat by beat positions and actions
  //add models to a list of all the models in self walk
  let model_names = []; //array to binary insert model names
  self.process_models = function() {
    //for each model
    for(let i=0; i<self.models.length; ++i) {
      self.models[i].moves = []

      //pre set starting positions
      //left - middle left - middle - middle right - right
      if(typeof self.models[i].start === "string") {
        //if the starting position includes the word "middle"
        if(self.models[i].start.indexOf("middle") !== -1) {
          //if starting middle left
          if(self.models[i].start.indexOf("left") !== -1) {
            self.models[i].x = self.rect_width/2 - self.step;
          }
          //if starting middle right
          else if(self.models[i].start.indexOf("right") !== -1) {
            self.models[i].x = self.rect_width/2 + self.step;
          }
          //else just middle
          else {
            self.models[i].x = self.rect_width/2;
          }
        }
        //if starting left
        else if(self.models[i].start.indexOf("left") !== -1) {
          self.models[i].x = self.rect_width/2 - 2*self.step;
        }
        //if starting right
        else if(self.models[i].start.indexOf("right") !== -1) {
          self.models[i].x = self.rect_width/2 + 2*self.step;
        }
        self.models[i].y = self.rect_height-20; //all set starting positions start at bottom of T
      }
      //custom starting position
      else {
        self.models[i].x = self.models[i].start.x;
        self.models[i].y = self.models[i].start.y;
      }

      //for each of self model's pre moves
      for(let j=0; j<self.models[i].pre_moves.length; ++j) {
        let count = 0;
        //while we are below the count length
        while(count < self.models[i].pre_moves[j].counts) {
          //if the move is not custom
          if(typeof self.models[i].pre_moves[j].dx === "undefined") {
            let type = self.models[i].pre_moves[j].type;
            if(type.indexOf("up") !== -1) {
              self.models[i].moves.push({dx:0,dy:-1,type:type});
            }
            else if(type.indexOf("down") !== -1) {
              self.models[i].moves.push({dx:0,dy:1,type:type});
            }
            else if(type==="pose" || type==="delay" || type==="kneel" || type==="pause") {
              self.models[i].moves.push({dx:0,dy:0,type:type});
            }
            else if(type.indexOf("right") !== -1) {
              self.models[i].moves.push({dx:1,dy:0,type:type});
            }
            else if(type.indexOf("left") !== -1) {
              self.models[i].moves.push({dx:-1,dy:0,type:type});
            }
            else if(type.indexOf("diag ne") !== -1) {
              self.models[i].moves.push({dx:1,dy:-1,type:type});
            }
            else if(type.indexOf("diag se") !== -1) {
              self.models[i].moves.push({dx:1,dy:1,type:type});
            }
            else if(type.indexOf("diag sw") !== -1) {
              self.models[i].moves.push({dx:-1,dy:1,type:type});
            }
            else if(type.indexOf("diag nw") !== -1) {
              self.models[i].moves.push({dx:-1,dy:-1,type:type});
            }

            //if the model is moving at half speed
            if(type.indexOf("half speed") !== -1) {
              self.record_model_new_position(i)

              //push half speed delay
              self.models[i].moves.push({dx:0,dy:0,type:"pause"});
              ++count;
            }
          }
          //otherwise the move is custom
          else {
            //manually calculate move
            let duration = self.models[i].pre_moves[j].counts;
            let dx = self.models[i].pre_moves[j].dx / duration;
            let dy = self.models[i].pre_moves[j].dy / duration;

            //check if there is a custom move description
            let type = "walk";
            if(self.models[i].pre_moves[j].type) {
              type = self.models[i].pre_moves[j].type;
            }

            //if the model is moving at half speed
            if(type.indexOf("half speed") !== -1) {
              //record double the half step to make a regular step
              self.models[i].moves.push({dx:2*dx,dy:2*dy,type:type});

              self.record_model_new_position(i)

              //push half speed delay
              self.models[i].moves.push({dx:0,dy:0,type:"pause"});
              ++count;
            }
            else {
              self.models[i].moves.push({dx:dx,dy:dy,type:type});
            }
          }

          self.record_model_new_position(i)

          //increase count
          ++count;
        }
      }

      self.binary_insert(self.models[i].name,model_names); //binary inser self model into the list
    }

    //get the max number of moves
    self.max_moves = 0;
    for(let i=0; i<self.models.length; ++i) {
      if(self.models[i].moves.length > self.max_moves) self.max_moves = self.models[i].moves.length;
    }
  }


  //binary insert function taken from https://gist.github.com/eloone/11342252
  self.binary_insert = function(value, array, startVal, endVal){
    let length = array.length;
    let start = typeof(startVal) != 'undefined' ? startVal : 0;
    let end = typeof(endVal) != 'undefined' ? endVal : length - 1;//!! endVal could be 0 don't use || syntax
    let m = start + Math.floor((end - start)/2);
    if(length == 0){
      array.push(value);
      return;
    }
    if(value > array[end]){
      array.splice(end + 1, 0, value);
      return;
    }
    if(value < array[start]){//!!
      array.splice(start, 0, value);
      return;
    }
    if(start >= end){
      return;
    }
    if(value < array[m]){
      self.binary_insert(value, array, start, m - 1);
      return;
    }
    if(value > array[m]){
      self.binary_insert(value, array, m + 1, end);
      return;
    }
    //we don't insert duplicates
  }

  //function used to get and record the new model position
  self.record_model_new_position = function(i) {
    //get new model position
    self.models[i].x += self.step * self.models[i].moves[self.models[i].moves.length-1].dx;
    self.models[i].y += self.step * self.models[i].moves[self.models[i].moves.length-1].dy;
    //record new model position
    self.models[i].moves[self.models[i].moves.length-1].x = self.models[i].x;
    self.models[i].moves[self.models[i].moves.length-1].y = self.models[i].y;
  }



  /***********************Process pre_sections************************/
  //convert pre_sections into beat by beat section titles
  self.process_pre_sections = function() {
    for(let i=0; i<self.pre_sections.length; ++i) {
      let section_count = 0;
      for(let j=0; j<self.pre_sections[i].measures; ++j) {
        //multiply by specified cts
        for(let k=0; k<self.pre_sections[i].counts; ++k) {
          self.sections.push({
            measure_size:self.pre_sections[i].counts,
            measure_count:k,
            section_count:section_count,
            text:self.pre_sections[i].text
          });
          ++section_count;
        }
      }
    }
  }




  /***********************Process pre_comments************************/
  //convert pre_comments into beat by beat comments
  let comments_delay = 0;
  self.process_pre_comments = function() {
    for(let i=0; i<self.pre_comments.length; ++i) {
      //push empty comment while advancing to next comment
      while(comments_delay+1 < self.pre_comments[i].startCount) {
        self.comments.push("");
        ++comments_delay;
      }
      //push comment
      while(comments_delay < self.pre_comments[i].endCount) {
        self.comments.push(self.pre_comments[i].text);
        ++comments_delay;
      }
    }
  }



  /***********************Draw functions************************/
  self.draw_background = options.draw_background || function() { //default background function draws a basic upside-down T
    //clear entire self.canvas
    self.ctx.fillStyle = 'white';
    self.ctx.fillRect(0,0,self.canvas.width,self.canvas.height);
    //gray boxes
    self.ctx.fillStyle = '#bbbbbb';
    self.ctx.fillRect(160,0,240,340);
    self.ctx.fillRect(0,self.rect_height-220,self.rect_width,220);
    //white T
    self.ctx.fillStyle = 'white';
    self.ctx.fillRect(180,20,200,340);
    self.ctx.fillRect(20,self.rect_height-200,self.rect_width-40,180);
  }

  self.draw_key = function() {
    //key
    self.ctx.fillStyle = 'black';
    self.text_bold("Key:",20,50);

    //walk
    self.draw_circle(20, 100, self.radius);
    self.ctx.fillText("Walk",50,110);
    //pose
    self.draw_star(20, 150, 5, 1.5*self.radius, 3*self.radius/4);
    self.ctx.fillText("Pose",50,160);
    //pivot
    self.draw_triangle(20, 200);
    self.ctx.fillText("Pivot",50,210);
    //kneel
    self.ctx.fillRect(20-self.radius, 250-self.radius,2*self.radius,2*self.radius);
    self.ctx.fillText("Kneel",50,260);
    //twirl
    self.draw_circle(20, 300, self.radius);
    self.ctx.fillText("Twirl",50,310);
    self.ctx.fillStyle = 'white';
    self.draw_circle(20, 300, self.radius/2);


    //model names in self walk
    self.ctx.fillStyle = 'black';
    self.text_bold("Models in this walk:",600,300);
    for(let i=0; i<model_names.length; ++i) {
      //draw columns with names
      let max_rows = 13;
      self.ctx.fillText(model_names[i],600 + 100*(Math.floor(i/max_rows)),320 + 20*i - max_rows*20*Math.floor(i/max_rows));
    }
  }


  self.draw_model = function(model) {
    //is move index is in range
    if(self.move_index>=0 && self.move_index<model.moves.length) {
      //update model position
      model.x = model.moves[self.move_index].x;
      model.y = model.moves[self.move_index].y;

      //draw if model is not delaying
      if(model.moves[self.move_index].type != "delay") {
        //self.models are translucent
        self.ctx.globalAlpha = 0.8;

        //switch to model color
        self.ctx.fillStyle = model.color;
        //pose
        if(model.moves[self.move_index].type === "pose") {
          self.draw_star(model.x, model.y, 5, 1.5*self.radius, 3*self.radius/4);
        }
        //pivot
        else if(model.moves[self.move_index].type.indexOf("pivot") !== -1) {
          self.draw_triangle(model.x, model.y);
        }
        //kneel
        else if(model.moves[self.move_index].type.indexOf("kneel") !== -1) {
          self.ctx.fillRect(model.x-self.radius, model.y-self.radius,2*self.radius,2*self.radius);
        }
        //twirl
        else if(model.moves[self.move_index].type.indexOf("twirl") !== -1) {
          self.draw_circle(model.x, model.y, self.radius);
          self.ctx.fillStyle = 'white';
          self.ctx.globalAlpha = 1;
          self.draw_circle(model.x, model.y, self.radius/2);
        }
        //regularly walking
        else {
          self.draw_circle(model.x, model.y, self.radius);
        }

        //model label
        self.ctx.globalAlpha = 1;
        self.ctx.fillStyle = "black";
        self.ctx.fillText(model.name,model.x-model.name.length*4,model.y-self.radius-10);
      }
    }
  }



  //draw shape functions were taken from stackoverflow
  self.draw_star = function(cx, cy, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    self.ctx.strokeSyle = "#000";
    self.ctx.beginPath();
    self.ctx.moveTo(cx, cy - outerRadius)
    for(let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      self.ctx.lineTo(x, y)
      rot += step

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      self.ctx.lineTo(x, y)
      rot += step
    }
    self.ctx.lineTo(cx, cy - outerRadius)
    self.ctx.closePath();
    self.ctx.fill();

  }

  self.draw_triangle = function(x,y) {
    self.ctx.beginPath();
    self.ctx.moveTo(x,y-self.radius);
    self.ctx.lineTo(x+self.radius, y+self.radius);
    self.ctx.lineTo(x-self.radius, y+self.radius);
    self.ctx.fill();
  }

  self.draw_count = function() {
    self.ctx.fillStyle = "black";

    if(self.move_index < self.sections.length) { //if there are sections to draw
      self.ctx.fillText(self.sections[self.move_index].text+"  "+self.sections[self.move_index].measure_size+"cts: "+(Math.floor(self.sections[self.move_index].section_count/self.sections[self.move_index].measure_size) + 1),420,150);
      self.ctx.fillText("Count: "+(self.sections[self.move_index].measure_count+1),420,200);
    }

    if(self.move_index < self.comments.length) { //if there are comments to draw
      self.ctx.fillText("Comments: "+self.comments[self.move_index],420,250);
    }
  }

  self.draw_circle = function(x,y,r) {
    self.ctx.beginPath();
    self.ctx.arc(x, y, r, 0, 2 * Math.PI, 0);
    self.ctx.fill();
  }


  self.draw_everything = function() {
    self.draw_background();
    self.draw_key();

    if(self.move_index>=0 && self.move_index<self.max_moves) {
      //draw each model
      for(let i=0; i<self.models.length; ++i) {
        self.draw_model(self.models[i]);
      }

      self.draw_count();
    }
  }


  /*****************Next or previous frame*****************/
  self.prev = function() {
    if(self.move_index > 0) {
      --self.move_index; //decrease move count
      self.draw_everything();
    }
  }

  self.next = function(autoRestart) {
    if(autoRestart===true && self.move_index>=self.max_moves) { //if we want to autoRestart AND we have passed the last move
      self.move_index = 0; //reset to move index zero
    }

    if(self.move_index < self.max_moves) {
      ++self.move_index; //increase move count
      self.draw_everything();
    }
  }

  self.autoStart = function(bpm, autoRestart) { //"beat" is the same as "interval" in this context
    const secondsPerInterval = 1000*60/bpm; //ms/sec * sec/min / interval/min
    self.next();
    clearInterval(self.interval)
    self.interval = setInterval(self.next, secondsPerInterval, autoRestart)
  }

  self.stop = function() {
    clearInterval(self.interval)
  }


  //next if right arrow, previous if left arrow
  self.keydown = function(e) {
    if(e.keyCode == 39) {self.next();}
    else if(e.keyCode == 37) {self.prev();}
  }
  window.addEventListener('keydown',self.keydown);

  //reinitializes the simulation at the given move index if provided
  self.init = function(move_index) {
    if(typeof move_index === "number") self.move_index = move_index
    self.process_models();
    self.process_pre_sections();
    self.process_pre_comments();
    self.draw_everything();
  }

  self.init() //auto init
}

if(typeof module != "undefined") {
  module.exports = ModelSimulator
}
