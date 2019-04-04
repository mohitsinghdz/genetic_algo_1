

function dna (num)
{   this.genes = [];
    this.fitness;
    for(var i=0;i<num;i++)
    {   //for converting random integers to characters
        this.genes[i] = String.fromCharCode(random(32, 128));
    //  console.log(this.genes[i]);
  
    }

}

dna.prototype.getPhrase = function (){
    //return this.genes;
    return this.genes.join('');
}

dna.prototype.calcFitness = function (target){
    var score = 0;
    for(var i=0;i<this.genes.length;i++)
    {
        if(this.genes[i] == target.charAt(i))
        {
            score++;
        }
    }

    this.fitness = score/target.length;
    // console.log(this.fitness);
}

dna.prototype.crossover = function (partner) {
     var child = new dna(partner.length);
     var midpoint = random(this.genes.length);

     for(var i =0; i<this.genes.length;i++)
     {
         if(i>midpoint)
         {
    child.genes[i] =  this.genes[i];
         }
         else
         {
             child.genes[i] = partner.genes[i];
         }
     }
     return child;
}

dna.prototype.mutate = function (rate) {

    for (var i =0 ; i<this.genes.length;i++)
    {
        if(random(1) < rate){
            this.genes[i] = String.fromCharCode(random(32,128));
        }
    }
}