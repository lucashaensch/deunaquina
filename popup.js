(function(){
	var numbers = [];
	var num;
	for(var i = 0; i < 5; i++){
		num = Math.floor(Math.random() * 79) + 1;
		numbers.push(num);
	};
	numbers.sort(function(a, b){return a-b});
	document.getElementsByTagName('body')[0].innerHTML = numbers.toString().replace(/,/g, '\t');
})();

