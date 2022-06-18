function doMath(){
	// Capture the entered values of two input boxes
        var my_input1 = document.getElementById('my_input1').value;
        var my_input2 = document.getElementById('my_input2').value;

        // Add them together and display
        var sum = parseInt(my_input1) + parseInt(my_input2);
        document.write(sum);
}
