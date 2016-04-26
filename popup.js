(function(){
	document.getElementsByClassName('choose')[0].onclick = function(ev){
		document.getElementsByClassName('choose')[0].style.display = "none";

		var numbers = [];
		var numOfChoices = ev.target.innerHTML;
		var num;
		for(var i = 0; i < numOfChoices; i++){
			num = Math.floor(Math.random() * 79) + 1;
			numbers.push(num);
		};
		numbers = numbers.sort(function(a, b){return a-b}).toString().replace(/,/g, '\t');
		// document.getElementsByTagName('body')[0].innerHTML = numbers;

		document.getElementsByClassName('raffled')[0].innerHTML = numbers;
	};
})();