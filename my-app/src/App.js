import React from "react";

// function App() {
// 	function getDigitsSum(num) {
// 		let num1 = num.toString();
// 		let arrString = num1.split('');
// 		let arrLenght = arrString.length;
// 		var result = 0;
// 		for(let i = 0; i < arrLenght; i++) {
// 			result += Number(arrString[i])
// 		}
// 		return result
// 	}
// 	let res = getDigitsSum(12345);
//   return (
//     <>
//       <div>{res}
// 	  <p>{res}</p></div>
//     </>
//   );
// }

function App() {
	const arr = [];
	for(let i = 0; i <= 9; i++) {
		arr.push(<p>{i}</p>);
	}
	return (
	<>
		<div>
			{arr}
		</div>
	</>
	);
}
	

export default App;
