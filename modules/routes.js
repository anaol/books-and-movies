app.config(function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
	$urlMatcherFactoryProvider.strictMode(false);
    $locationProvider.html5Mode(true);

    $stateProvider.state('/', {
        abstract: false,
        cache: false,
        url: "/",
        controller: 'HomeController',
        controllerAs: 'homeCtrl',
        templateUrl: "./modules/home/views/home.html"
    }).state('movies', {
        abstract: false,
        cache: false,
        url: "/movies",
        controller: 'MoviesController',
        controllerAs: 'moviesCtrl',
        templateUrl: "./modules/movies/views/movies.html"
	}).state('books', {
        abstract: false,
        cache: false,
        url: "/books",
        controller: 'BooksController',
        controllerAs: 'booksCtrl',
        templateUrl: "./modules/books/views/books.html"
	}).state('about', {
        abstract: false,
        cache: false,
        url: "/about",
        controller: 'AboutController',
        controllerAs: 'aboutCtrl',
        templateUrl: "./modules/about/views/about.html"
    });
});