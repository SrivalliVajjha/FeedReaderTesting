
$(function() {
   
    describe('RSS Feeds', function() { //this suite Rss feeds checks if all the feeds are defined. 
        
        it('are defined', function() {// this test checks if allFeeds are defined or not.
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('URL defined',function(){ //this test checks if the url of allFeeds are defined or not.
            for(var i=0;i< allFeeds.length; i++)
                {
                    var url=allFeeds[i].url;
                    expect(url).toBeDefined();//checking url is defined or not
                    expect(url.length).not.toBe(0);//checking length of the url is not 0
                }
            
        });
        it('name defined',function(){//this test checks if the names of allFeeds are defined or not.
            for(var i=0;i< allFeeds.length; i++)
                {
                    var name=allFeeds[i].name;
                    expect(name).toBeDefined();//checking url is defined or not
                    expect(name.length).not.toBe(0);//checking length of the url is not 0
                }
            
        });
    });

    describe('The menu',function(){//this suite The menu checks the Menu's functions
        var menuDefault=$('body').hasClass('menu-hidden');//checking if body of html has the class menu-hidden
             it('Menu hidden by default',function(){//this test checks if the menu is hidden by default.
                 expect(menuDefault).toBe(true);//expecting the Var menuDefault to be true.
    });
        it('Visibility of Menu',function(){//this test checks the visibilty of the menu when clicking the menu icon
            $('.menu-icon-link').click();//when clicking the menu-icon for first time
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //the menu-hidden class should not be there when clicking for first time
            $('.menu-icon-link').click();//when clicking the menu-icon for second time
            expect($('body').hasClass('menu-hidden')).toBe(true);
            //the menu-hidden class should be there when clicking for second time
        });
        
             });
     describe('Initial Entries',function(){//this suite checks the functions of Initial Entries function
         beforeEach(function(done){
           loadFeed(0,done);  
         });
         it(' the Load feed complete work',function(){//this test makes sure the load feed completes its work
             expect($('.entry')[0]).toBeDefined();
         });
     });

    describe('New Feed Selection',function(){//this test suite checks the newsfeed reloading 
        var feed1,feed2;
        beforeEach(function(done){//this makes sure the feed is loaded before each test
            loadFeed(0,function(){//loading of first feed
                feed1=$('.feed').html();
                done();
           
            loadFeed(1,function(){//loading the second feed
                feed2=$('.feed').html();
                done();
            });
                 });
        });
        it('has the new newsfeed loaded',function(){//this test makes sure the new newsfeed is loaded
            expect(feed1).not.toBe(feed2);//making sure the first feed is not equal to second feed
        });
    });

}());
