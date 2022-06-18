function doMath(s){
        var my_input1 = document.getElementById('my_input1').value;
        var my_input2 = document.getElementById('my_input2').value;

	switch(s){
		case "soma":
        		// Add them together and display
        		var sum = parseInt(my_input1) + parseInt(my_input2);
        		document.write(sum);
			break;
		case "multiplica":
			var multi = parseInt(my_input1) * parseInt(my_input2);
			document.write(multi);
			break;
		case "subtrai":
			var sub = parseInt(my_input1) - parseInt(my_input2);
			document.write(sub);
			break;
		case "divide":
			var div = parseInt(my_input1) / parseInt(my_input2);
			document.write(div);
			break;
		case "potencia":
			var pow = Math.pow(parseInt(my_input1), parseInt(my_input2));
			document.write(pow);
			break;
		case default:
			document.append("Erro");
			break
	}
}
