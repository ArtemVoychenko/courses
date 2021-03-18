describe("dowbleElem", function(arr) { 
	it("передача не массива", () => { 
		assert(Array.isArray([1, 1, 2, 2, 3, 3]));
	}); 
	it("в массиве нечисловые элементы", () => { 
const hasNumber = ['sadf', 'sadf', 'sadf', 'sadf', 'sadf', 'sadf'].some((item)=> typeof item === 'number');
		 assert(!hasNumber);
	}); 
	it("в массиве не только числовые элементы", () => { 
		assert([1, 'sadf', 2, 2, 3, 3].some(isNaN));
   }); 
});
