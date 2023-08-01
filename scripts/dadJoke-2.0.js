/* =================================

* A really silly little dad joke generator by Nick Frühling.

* Thank you Dad for the original inspiration.

================================= */

var jokes = [
	"What's the difference between a good joke and a bad joke timing.",
	"What did the pirate say when he turned 80 years old? Aye matey.",
	"What do you call a dog that does magic tricks? A labracadabrador.",
	"What goes 'clopclopclop - clop - clop - clop - clopclopclop?' Horse code.",
	"When does a joke become a dad joke? When the punchline becomes apparent.",
	"I have a fear of elevators, but I've started taking steps to avoid it.",
	"What’s brown and sticky? A stick.",
	"I used to be addicted to the hokey pokey, but then I turned myself around.",
	"What time did I go to the dentist? Tooth hurty.",
	"What's the difference between Dubai and Abu Dhabi? People in Dubai don't watch The Flintstones, but people in Abu Dhabi do.",
	"What do you do when you see a spaceman? You park your car, man.",
	"Why did the hipster burn his tongue? Because he drank his coffee before it was cool.",
	"The butcher accidentally backed into the meat grinder and got a little behind in his work.",
	"Did you hear about the new corduroy pillows? They're making headlines.",
	"Why do scuba divers always fall backwards off the boat? If they fell forwards they'd still be in the boat.",
	"What's the difference between a hippo and a Zippo? One's really heavy and the other's a little lighter.",
	"Why didn’t the sun go to university? Because it already had a million degrees.",
	"Why did the scarecrow get promoted? He was outstanding in his field.",
	"Yesterday I bought the world's worst thesaurus. Not only was it terrible, but it was terrible.",
	"Why can't you hear a pterodactyl in the bathroom? Because the P is silent.",
    "Can I perform under pressure? I'm not sure, but I do an amazing Bohemian Rhapsody.",
    "What's the best thing about living in Switzerland? No idea but the flag is a big plus.",
    "Why do bees stay in the hive during winter? Swarm.",
	"People are usually shocked when they find out I’m not a very good electrician.",
    "How do you find Will Smith in the snow? Look for the fresh prints.",
    "Why did the golfer wear two pairs of pants? In case they got a hole in one.",
    "How do you know when a joke becomes a dad joke? When it's full groan.",
    "I stayed up all night to see where the sun went. Then it dawned on me.",
    "I'm reading a book about anti-gravity. I can't put it down.",
    "I didn't like my beard at first, but then it grew on me."
]

function newJoke() {
	$('#jokeContainer').removeClass('jokeHidden');
	var randomNumber = Math.floor(Math.random() * (jokes.length));
	document.getElementById('jokeDisplay').innerHTML = jokes[randomNumber];
	var x = document.getElementById("jokeDisplay");
	if (x.style.display === "none") {
	    x.style.display = "block";
	
	}
}

function goAway() {
    var x = document.getElementById("jokeDisplay");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}