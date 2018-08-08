app.controller('HomeController', function() {
	var vm = this;
  vm.title = 'The best books and movies of the month.'; 
  // Favorite movies and books of the month stored here.
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
		name: 'Avengers: Age of Ultron', 
		price: 8, 
		pubdate: new Date('2015', '05', '01'), 
		cover: './images/Avengers_Age_of_Ultron.jpg',
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
  //Initialize like and dislike function
  vm.plusOne = function(index) { 
  	vm.products[index].likes += 1; 
	};
	vm.minusOne = function(index) { 
  	vm.products[index].dislikes += 1; 
	};
});
