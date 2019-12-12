//자바로 치면 메인 메소드
	function Animal(name){this._name = name}
	function Human(){Animal.apply(this, arguments)}//apply쳐서 위를 보게함. return은 지금 눈에 안보일뿐 존재함(생략되어있음), this가 포로토타입체인을 만들어준다.
	function SuperHero(){Human.apply(this, arguments)}//arguments는 this 여러개 모인거
	// function Main(){
	// 	return {
	// 		test : function(){
	// 			// alert(`클로저 테스트`)
	// 			Animal.prototype.setName = function(name){this._name = name}
	// 			Animal.prototype.getName = function(){return this._name}
	// 		}
	// 	}
	// }