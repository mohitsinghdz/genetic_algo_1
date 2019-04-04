
mutationRate = 0.01;
totalPopulation = 550;
var population = [];
matingPool = [];
var target = "genetic algorithm";
 font = 'Courier';
var fontSize = 20;
var frame = 0;
var best = 0.0;
var besti = 0;
var bestG = '';
function setup(){
    createCanvas(1600, 1200);

       // target  = "testing genentic algorithms";

        for(var i=0; i<totalPopulation; i++)
        {  population.push(new dna(target.length));
            //population[i] =  new dna(target.length);
        }
     
    }

  //draw  
 
    function draw(){
        if(bestG==target)
        {
            noLoop();
        }
        background(255);
        fill(0);
        textFont(font);
        textSize(fontSize);
        var pool = []; // array for eligible agents
        //for displaying genes
        for (var i =0; i < population.length; i++)
        {   text(population[i].genes.join(''),20,80+(i*22),width,height);
            population[i].calcFitness(target);

        }

       // console.log(pool)
     
        // calculate fitness

        text(target,20,20,width,height);
        text('number of generations : ',1000,120,width,height);
       
        text(frame,1300,120,width,height);
        frame++;

        for(i=0;i<population.length;i++)
        { console.log(population[i].fitness);
            if(population[i].fitness > best)
            { 
                besti =i;
                best = population[i].fitness;
                 bestG = population[i].genes.join(''); 
            }
        }
        text(bestG,1200,180,width,height);
        text('best agent',1000,180,width,height);
        for( i =0;i< population.length; i++)
        {     
            var fit  = population[i].fitness * 100;  //fitness in percentages;
            for(var j =0; j <fit;j++)
            {   //console.log('pushing',population[i]);
                pool.push(population[i]);   // higher the fitness function, higher the probability to be selected for mating;
            }
        }
        for( i=0; i<population.length;i++)
        {
         var   a = floor(random(pool.length-1));
           var  b = floor(random(pool.length-1));
            // console.log(pool[a],pool[b], 'mate');
            
               var child = pool[a].crossover(pool[b]);
          child.mutate(mutationRate);
            population[i] = child;
        }
    }
    