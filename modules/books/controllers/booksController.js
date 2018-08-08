app.controller('BooksController', function() {
	var vm = this;
	vm.title = 'Books';
	// All the books are put here. 
	vm.products = [
		{ 
			name: 'The Book of Trees', 
			price: 19, 
			pubdate: new Date('2014', '03', '08'), 
			cover: '../../../images/the-book-of-trees.jpg',
			likes: 0,
			dislikes: 0
		}, 
		{ 
			name: 'Program or be Programmed', 
			price: 8, 
			pubdate: new Date('2013', '08', '01'), 
			cover: './images/program-or-be-programmed.jpg',
			likes: 0,
			dislikes: 0
		}, 
		{ 
			name: 'Harry Potter & The Prisoner of Azkaban', 
			price: 11.99, 
			pubdate: new Date('1999', '07', '08'), 
			cover: './images/51gY5jzz3NL._SX340_BO1,204,203,200_.jpg',
			likes: 0,
			dislikes: 0 
		}, 
		{ 
			name: 'Ready Player One', 
			price: 7.99, 
			pubdate: new Date('2011', '08', '16'), 
			cover: 'http://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_cover.jpg',
			likes: 0,
			dislikes: 0 
		}
	  ];
	  // Initialize the like and dislike function.
	  vm.plusOne = function(index) { 
		vm.products[index].likes += 1; 
		};
		vm.minusOne = function(index) { 
		vm.products[index].dislikes += 1; 
		};
	});
