function bitTable(){
//set the values of byteSet to 0 and print this once. 
var bitVal = 0;
var byteSet = ["0","0","0","0","0","0","0","1"];
var showVal = document.getElementById("showTable");
var showFoot = document.getElementById("showFoot");
showVal.innerHTML = "<tr>"+"<td>"+"Binary value"+"</td>"+"<td>"+"Decimal value"+"</td>"+"</tr>"+"<tr>"+"<td>"+"00000000"+"</td>"+"<td>"+bitVal+"</td>"+"</tr>";
bitVal = 1;
numbit = 8;
//begin to run other byte values to 
for(i=7; i>=0; i--){
//reset byteSet value back to 00000000 
byteSet = ["0","0","0","0","0","0","0","0"];

byteSet[i] = "1";
showVal.innerHTML += "<tr>"+"<td>"+byteSet[0]+byteSet[1]+byteSet[2]+byteSet[3]+byteSet[4]+byteSet[5]+byteSet[6]+byteSet[7]+"</td>"+"<td>"+bitVal+"</td>"+"</tr>";  	
//shift bits over 1
bitVal =  (bitVal<< 1);  
}
//this will show values are correct because it manipulated the bits and is now different datatype
var footerMessage = (bitVal!==128)?"This shows the correct Values":"Dear God it is all wrong!";
showFoot.innerHTML = footerMessage;
}