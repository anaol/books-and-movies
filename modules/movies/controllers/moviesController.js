app.controller('MoviesController', function() {
	var vm = this;
	vm.title = 'Movies';
	// Initialize the movies information.
	vm.products = [
		{ 
			name: 'Avengers', 
			price: 10, 
			pubdate: new Date('2012', '03', '08'), 
			cover: '../../../images/maxresdefault.jpg',
			likes: 0,
			dislikes: 0
		}, 
		{ 
			name: 'Avengers: Age of Ultron', 
			price: 8, 
			pubdate: new Date('2015', '05', '01'), 
			cover: './images/Avengers_Age_of_Ultron.jpg',
			likes: 0,
			dislikes: 0
		}, 
		{ 
			name: 'The Amazing Spider-Man', 
			price: 5.99, 
			pubdate: new Date('2014', '07', '08'), 
			cover: './images/The_Amazing_Spider-Man_Poster.jpg',
			likes: 0,
			dislikes: 0 
		}
	  ];
	  // like and dislike function
	  vm.plusOne = function(index) { 
		vm.products[index].likes += 1; 
		};
		vm.minusOne = function(index) { 
		vm.products[index].dislikes += 1; 
		};
});
