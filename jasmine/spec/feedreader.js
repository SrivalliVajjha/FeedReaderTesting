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
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(false);
        });
        
             });
     describe('Initial Entries',function(){
         beforeEach(function(done){
           loadFeed(0,done);  
         });
         it(' the Load feed complete work',function(){
             expect($('.entry')[0]).toBeDefined();
         });
     });

    describe('New Feed Selection',function(){
        var feed1,feed2;
        beforeEach(function(done){
            loadFeed(0,function(){
                feed1=$('.feed').html();
                done();
           
            loadFeed(1,function(){
                feed2=$('.feed').html();
                done();
            });
                 });
        });
        it('has the new newsfeed loaded',function(){
            expect(feed1).not.toBe(feed2);
        });
    });

    
}());
