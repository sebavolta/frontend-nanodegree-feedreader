/* feedreader.js
 *
 * This file contains all the Suites and Test used to
 * check the app functionality, and it is based in the
 * Jasmine Framework.
 */

$(function() {
	describe('RSS Feeds', function() {
		/* The following Suite tests the 'allFeeds' array to check
		if it is defined, and if all its items contain url
		and name.
		*/

		/*This test checks the 'allFeeds' array to be defined*/
		it('allFeeds var should be defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		/*This test checks the 'allFeeds' array items 
		have a url defined and not empty*/
		it('has a URL defined and is not empty', function(){
			 allFeeds.forEach(function(feed) {
				expect(feed.url).toBeDefined();
				expect(feed.url).not.toEqual('');
			});
		});

		/*This test checks the 'allFeeds' array items 
		have a name defined and not empty*/
		it('has a name defined and is not empty', function(){
			 allFeeds.forEach(function(feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name).not.toEqual('');
			});
		});
	});

	/* The following Suite tests  the menu regarding
	when it is open or closed*/
	describe('The menu', function() {
		
		beforeEach(function() {
		 	var body,
		 		bodyClass,
		 		bodyClassList;
		 });

		/*This test checks the menu to be hidden by default, 
		by looking at the body's 'menu-hidden' class*/
		it('menu should be hidden by default', function(){
		 	body = document.getElementsByTagName('body');
			bodyClass = body[0].getAttribute('class');
			bodyClassList = bodyClass.indexOf('menu-hidden');
			expect(bodyClassList).toBeGreaterThan(-1);
		});

		/*This test checks the menu to be visible or hidden
		when the menu button is clicked, again byb looking 
		at the body's 'menu-hidden' class*/
		it('menu should change visibility when the menu icon is clicked', function(){
		  	var menuButton = document.getElementsByClassName('menu-icon-link')[0];
		  	body = document.getElementsByTagName('body');
		  	
		  	/*First test on click to check if is open*/
		  	menuButton.click();
		  	bodyClass = body[0].getAttribute('class');
			bodyClassList = bodyClass.indexOf('menu-hidden');
			expect(bodyClassList).toBeLessThan(0);

		  	/*Second test on click to check if is closed*/
		  	menuButton.click();
		  	bodyClass = body[0].getAttribute('class');
			bodyClassList = bodyClass.indexOf('menu-hidden');
			expect(bodyClassList).toBeGreaterThan(-1);
		});
	});

	/* The following Suite checks the 'loadFeed' functions to 
	actually load content */
	describe('Initial Entries', function() {

		beforeEach(function(done) {
			/*Loads and sets the 'done' function as callback*/
			loadFeed(0, done);
		});

		/*This test Gets the length of '.feed' content to check 
		it is greater than '0'.
		This test uses an async approach*/
		it('should load at least a single .entry element within the .feed container', function(done) {
			var feedLength = document.querySelectorAll('.feed a').length;
			expect(feedLength).toBeGreaterThan(0);
			done();
		});
	});

	/* The following Suite checks the 'loadFeed' functions to 
	determine if the content changes after the loading. */
	describe('New Feed Selection', function() {
		
		var currentContent,
				newContent,
				id = 0;				

		beforeEach(function(done) {
			/*This test Loads the feed twice to save the title html in the first load
			and compare it with the second load.
			This test uses an async approach*/
			loadFeed(id, function(){
				currentContent = document.getElementsByClassName('header-title')[0].innerHTML;
				loadFeed(id + 1, function(){
					newContent = document.getElementsByClassName('header-title')[0].innerHTML;
					done();
				});
			});
		});

		it('should change the content when load', function() {
			expect(currentContent).not.toEqual(newContent);			
		});
	});
}());
