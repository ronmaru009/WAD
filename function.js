(function() {

	window.onload = function(){



	var res = document.getElementById("result"); 
	var one = document.getElementById("k1");
	var k2 = document.getElementById("k2");
	var k3 = document.getElementById("k3");
	var k4 = document.getElementById("k4");
	var k5 = document.getElementById("k5");
	var k6 = document.getElementById("k6");
	var k7 = document.getElementById("k7");
	var k8 = document.getElementById("k8");
	var k9 = document.getElementById("k9");
	var k0 = document.getElementById("k0");
	var ka = document.getElementById("ka");
	var km = document.getElementById("km");
	var ks = document.getElementById("ks");
	var ke = document.getElementById("ke");
	var kd = document.getElementById("kd");
	var kc = document.getElementById("kc");
	var kv = document.getElementById("kv");


	
	one.onclick = function(){
		result.innerHTML += "1";
	};

	k2.onclick = function(){
		result.innerHTML += "2";
	};

	k3.onclick = function(){
		result.innerHTML += "3";
	};

	k4.onclick = function(){
		result.innerHTML += "4";
	};

	k5.onclick = function(){
		result.innerHTML += "5";
	};

	k6.onclick = function(){
		result.innerHTML += "6";
	};

	k7.onclick = function(){
		result.innerHTML += "7";
	};

	k8.onclick = function(){
		result.innerHTML += "8";
	};

	k9.onclick = function(){
		result.innerHTML += "9";
	};

	k0.onclick = function(){
		result.innerHTML += "0";
	};

	ka.onclick = function(){
		result.innerHTML += "+";
	};

	ks.onclick = function(){
		result.innerHTML += "-";
	};

	km.onclick = function(){
		result.innerHTML += "*";
	};

	kv.onclick = function(){
		result.innerHTML += "/";

	};

	kc.onclick = function(){
		result.innerHTML = "";

	};

	kd.onclick = function(){
		result.innerHTML += ".";

	};

	ke.onclick = function(){
		var eq = eval(result.innerHTML)

		result.innerHTML = eq;
	}
}
}());
