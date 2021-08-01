// url Async requesting function
function httpGetAsync(theUrl, callback) {
  // create the request object
  var xmlHttp = new XMLHttpRequest();

  // set the state change callback to capture when the response comes in
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      callback(xmlHttp.responseText);
    }
  };

  // open as a GET call, pass in the url and set async = True
  xmlHttp.open("GET", theUrl, true);

  // call send with no params as they were passed in on the url string
  xmlHttp.send(null);

  return;
}

// hide banner for 2 seconds
setTimeout(function () {
  document.getElementById("banner").style.display = "none";
}, 1000);

function tenorCallback_search(responsetext) {
  var response_objects = JSON.parse(responsetext);

  gifs = response_objects["results"];

  var idx = Math.floor(Math.random() * gifs.length);

  document.getElementById("gif_display").src =
    gifs[idx]["media"][0]["gif"]["url"];
  return;
}

function grab_data() {
  var apikey = "ABOEVPLHCZH1";

  var prefixes = [
    "adorable",
    "sleeping",
    "happy",
    "dance",
    "funny",
    "smile",
    "smol",
    "petting",
  ];

  var animals = [
    "animals",
    "kitten",
    "puppy",
    "cat",
    "dog",
    "rabbit",
    "bunny",
    "panda",
    "koala",
    "polar bear",
    "llama",
    "alpaca",
    "pig",
    "piggy",
    "piglet",
    "dog hug",
    "doggo",
    "cat hug",
    "catto",
    "squirrel",
    "fox",
    "golden retriever",
    "samoyed",
    "sand cat",
    "raccoon",
    "snake",
    "quokka",
    "arctic foxes",
    "fish",
    "hamster",
    "red panda",
    "panda bear",
    "chipmunk",
    "guinea pig",
    "munchkin kitten",
    "poodle",
    "otter",
    "deer",
    "cute chicken",
    "giraffe",
    "penguin",
    "bird",
    "hummingbird",
    "butterfly",
    "sparrow",
    "owl",
    "san francisco garter",
    "floof",
    "kitten paw",
    "kitten milk",
    "teddy bears",
    "cat sunglasses",
  ];

  var search_term =
    "cute" +
    prefixes[Math.floor(Math.random() * prefixes.length)] +
    animals[Math.floor(Math.random() * animals.length)];

  var search_url =
    "https://g.tenor.com/v1/search?q=" + search_term + "&key=" + apikey;

  httpGetAsync(search_url, tenorCallback_search);

  return;
}

grab_data();
