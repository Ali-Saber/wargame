
function character (name , strength , health)
{
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attackbtn = document.querySelector(`#${this.name}-attack`);
    this.healthbtn = document.querySelector(`#${this.name}-make-health`);
    this.healthbar = document.querySelector(`.${this.name}-health span`);
    this.message = document.querySelector(`#${this.name}-message`);
}

character.prototype.attack = function (opponent)
{
    if(opponent.health > 0)
    {
        opponent.health -= this.strength;
        opponent.healthbar.style.width = `${opponent.health}%`;
    } else 
    {
        opponent.attackbtn.remove();
        opponent.healthbtn.remove();
        opponent.message.innerHTML = `${opponent.name} IS DIED`;
    }
}

character.prototype.status = function()
{

}

character.prototype.makehealth = function()
{
    if (this.health < 100)
    {
        this.health +=10;
        this.healthbar.style.width = `${this.health}%`;
    } 
    if (this.health > 100)
    {
       this.health = 100;
    }  
}

let naruto = new character ('naruto' , 10 , 100);
let sasuki = new character ('sasuki' , 5 , 100);

naruto.attackbtn.addEventListener('click' , function()
{
    naruto.attack(sasuki);
});
sasuki.attackbtn.addEventListener('click' , function()
{
    sasuki.attack(naruto);
});
naruto.healthbtn.addEventListener('click' , function()
{
    naruto.makehealth();
});
sasuki.healthbtn.addEventListener('click' , function()
{
    sasuki.makehealth();
});
