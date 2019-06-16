//Random Quote Generator


var quotes = [
    {
    quote: "The only way to learn a new programming language is by writing programs in it.",
    author: "Dennis Ritchie",
    number:'1'
    },
    {
    quote: "Testing leads to failure, and failure leads to understanding.",
    author: "Burt Rutan",
    number:'2'
    },
    {
    quote: "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.",
    author: "Ellen Ullman",
    number:'3'
    },
    {
    quote: "Sometimes it's better to leave something alone, to pause, and that's very true of programming.",
    author: "Joyce Wheeler",
    number:'4'
    },
    {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    number:'5'
    },
    {
    quote: "In programming the hard part isn't solving problems, but deciding what problems to solve.",
    author: "Paul Graham",
    number:'6'
    },
    {
    quote: "Before software can be reusable it first has to be usable.",
    author: "Ralph Johnson",
    number:'7'
    },
    {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    author: "Patrick McKenzie",
    number:'8'
    },
    {
    quote: "Give someone a program, you frustrate them for a day; teach them how to program, you frustrate them for a lifetime.",
    author: "Avid Leinweber",
    number:'9'
    },
    {
    quote: "Without requirements or design, programming is the art of adding bugs to an empty text file.",
    author: "Louis Srygley",
    number:'10'
    },
    {
    quote: "The best programs are the ones written when the programmer is supposed to be working on something else.",
    author: "Melinda Varian",
    number:'11'
    },
    {
    quote: "The key to efficient development is to make interesting new mistakes.",
    author: "Tom Love",
    number:'12'
    },
    {
    quote: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
    number:'13'
    },
    {
    quote: "Documentation is a love letter that you write to your future self.",
    author: "Damian Conway",
    number:'14'
    },
    {
    quote: "The most secure code in the world is code which is never written.",
    author: "Colin Percival",
    number:'15'
    },
    {
    quote: "A user interface should be so simple that a beginner in an emergency can understand it within ten seconds.",
    author: "Ted Nelson",
    number:'16'
    },
    {
    quote: "Debuggers don't remove bugs. They only show them in slow motion.",
    author: "Unknown",
    number:'17'
    },
    {
    quote: "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.",
    author: "John Romero",
    number:'18'
    },
    {
    quote: "Programming is the art of algorithm design and the craft of debugging errant code.",
    author: "Ellen Ullman",
    number:'19'
    },
    {
    quote: "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
    author: "Andy Hunt",
    number:'20'
    },
    {
    quote: "The first step of any project is to grossly underestimate its complexity and difficulty.",
    author: "Nicoll Hunt",
    number:'21'
    },
    {
    quote: "A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.",
    author: "Niklaus Wirth",
    number:'22'
    },
    {
    quote: "The trouble with programmers is that you can never tell what a programmer is doing until it's too late.",
    author: "Seymour Cray",
    number:'23'
    },{
    quote: "That's what's cool about working with computers. They don't argue, they remember everything and they don't drink all your beer.",
    author: "Paul Leary",
    number:'24'
    },
    {
    quote: "The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do.",
    author: "Ted Nelson",
    number:'25'
    },
    {
    quote: "Write shy code - modules that don't reveal anything unnecessary to other modules and that don't rely on other modules' implementations.",
    author: "Dave Thomas",
    number:'26'
    },
    {
    quote: "Falling in love with code means falling in love with problem solving and being a part of a forever ongoing conversation.",
    author: "Kathryn Barrett",
    number:'27'
    },
    {
    quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
    author: "Christopher Thompson",
    number:'28'
    },
    {
    quote: "A language that doesn't affect the way you think about programming is not worth knowing.",
    author: "Alan J. Perlis",
    number:'29'
    },
    {
    quote: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
    number:'30'
    },
    {
    quote: "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",
    author: "Pragmatic Programmer",
    number:'31'
    },
    {
    quote: "Looking at code you wrote more than two weeks ago is like looking at code you are seeing for the first time.",
    author: "Dan Hurvitz",
    number:'32'
    },
    {
    quote: "There is nothing more unproductive than to build something efficiently that should not have been built at all.",
    author: "Milt Bryce",
    number:'33'
    },
    {
    quote: "The strength of JavaScript is that you can do anything. The weakness is that you will.",
    author: "Reg Braithwaite",
    number:'34'
    },
    {
    quote: "Good software, like wine, takes time.",
    author: "Joel Spolsky",
    number:'35'
    },
    {
    quote: "If at first you don't succeed, call it version 1.0.",
    author: "Unknown",
    number:'36'
    },
    {
    quote: "The most important property of a program is whether it accomplishes the intention of its user.",
    author: "C.A.R. Hoare",
    number:'37'
    },
    {
    quote: "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.",
    author: "Ellen Ullman",
    number:'38'
    },
    {
    quote: "So much complexity in software comes from trying to make one thing do two things.",
    author: "Ryan Singer",
    number:'39'
    }
    ];
    
    
    
    function getNewQuote() {
        //Randomly select one group from the array
        var random = quotes[Math.floor(Math.random() * quotes.length)];
    
        var quoteHTML = random.quote;
        var authorHTML = "-" + random.author;
        var imageHTML = random.image;
        var locationHTML = random.where;
        var numberHTML = random.number;
        var picRefresh = '?' + numberHTML;
        var urlRefresh = 'vers' + numberHTML;
    
    
        //For changing Twitter quote source
        var baseTweet = "https://twitter.com/intent/tweet?url=http%3A%2F%2Fsonorangirl.github.io%2FEarth-Quotes%2F%23&text=";
        var newText = "" + quoteHTML + "." + authorHTML;
        var encoded = encodeURI(newText);
        var customTweet = baseTweet + encoded;
    
        
        $('#quote').fadeOut(800, function(){ $('#quote').html(quoteHTML).fadeIn(800);});
        $('.fa-quote-left').fadeOut(800, function(){ $('.fa-quote-left').fadeIn(800);});
        $('.fa-quote-right').fadeOut(800, function(){ $('.fa-quote-right').fadeIn(800);});
        $('#speaker').fadeOut(800, function(){ $('#speaker').html(authorHTML).fadeIn(800); });
    
            $('meta[property="og:url"]').attr('content', 'https://sonorangirl.github.io/Earth-Quotes/#' + urlRefresh);
            $('meta[property="og:description"]').attr('content', 'Location: ' + locationHTML);
            $('meta[property="og:image"]').attr('content', 'https://sonorangirl.github.io/Earth-Quotes/img/' + imageHTML + picRefresh);
    
            $('.tweet > a').attr('href', customTweet);
    
    }
    
    
    
    //From Twitter 
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
        
    
    $(document).ready(function() {
        
       $('#quote-button').click(function() {
          getNewQuote();
          twttr.widgets.load();
       });
            
       $('[data-hover="tooltip"]').tooltip();
    
    });
    