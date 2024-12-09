class animal
{
    constructor(name,leg,sound)
    {
        this.name=name;
        this.leg=leg;
        this.sound=sound;
    }
speak()
    {
   
     return console.log(this.name+"",""+this.sound);
    }
anileg()
{
    return console.log(this.name+" has "+this.leg+" legs")
}

}
let dog= new animal("Bob",4,"barks");
let cat= new animal("Tom",4,"meows");
dog.speak();
cat.speak();
dog.anileg()