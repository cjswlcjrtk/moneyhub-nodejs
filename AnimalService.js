function Initalizer(){
	// return {
	// 	animal = function(){
	// 		Animal.prototype.setName = function(name){_name = name}
	// 		Animal.prototype.getName = function(){return _name}
	// 	}
	// }
	// this는 public이다.
	this.animal = function(){
		Animal.prototype.setName = function(name){_name = name}
		Animal.prototype.getName = function(){return _name}
	}//노드에서는 이런 모양이 클로져다.
	this.human = function(){
		Human.prototype = new Animal()
		Human.prototype.test = function(){return _name}
	}
	this.superHero = function(){
		SuperHero.prototype = new Human()
		SuperHero.prototype.exam = function(){return _name}
	}
	//클로저는 메소드를 public으로 쓰기 위헤
}