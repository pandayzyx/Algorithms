function test(description, fn) {
	console.log(description);
	fn();
}

function Expect(recieved) {
	function Tobe(expected) {
		if (recieved === expected) {
			console.log("Test passed");
		} else {
			console.log("Test failed");
			console.log("Recieved", recieved);
			console.log("Expected", expected);
		}
	}
	return { Tobe };
}

test("Sum of (1+2) and output should be 3", () => {
	Expect(1 + 2).Tobe(4);
});
