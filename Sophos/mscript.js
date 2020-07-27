function myFunction(n) {    	
	
	var pval="";
	var val = "";
	var cont = 0;	

	if(n==0){
		pval = "ERROR.";
	}else{
		for (var i = 0; i < n; i++) {		
			for (var j = 0; j < n; j++) {
				if(cont == j || j == n-cont-1)
					val = "X";
				else
					val = "_";

				pval = pval+val;	
			}
			cont += 1;
			pval = pval+"<br>";	
		};		
	}

	return pval;  	
}