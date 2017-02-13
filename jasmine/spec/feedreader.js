/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
   
    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('URL defined',function(){
            for(var i=0;i< allFeeds.length; i++)
                {
                    var url=allFeeds[i].url;
                    expect(url).toBeDefined();
                    expect(url.length).not.toBe(0);
                }
            
        });
        it('name defined',function(){
            for(var i=0;i< allFeeds.length; i++)
                {
                    var name=allFeeds[i].name;
                    expect(name).toBeDefined();
                    expect(name.length).not.toBe(0);
                }
            
        });
    });

    describe('The menu',function(){
        var menuDefault=$('body').hasClass('menu-hidden');
             it('Menu hidden by default',function(){
                 expect(menuDefault).toBe(true);
    });
        it('Visibility of Menu',function(){
            $('.menu-icon-link').click();
            expect(menuDefault).toBe(false);
            $('.menu-icon-link').click();
            expect(menuDefault).toBe(true);
        });
        
             });
    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
