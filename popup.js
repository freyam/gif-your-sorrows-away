function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      callback(xmlHttp.responseText);
    }
  };

  xmlHttp.open("GET", theUrl, true);

  xmlHttp.send(null);

  return;
}

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

  var prefixes = ["adorable", "sleeping", "happy", "smile", "smol"];

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
    "guinea pig",
    "munchkin kitten",
    "deer",
    "cute chicken",
    "giraffe",
    "penguin",
    "hummingbird",
    "butterfly",
    "sparrow",
    "owl",
    "san francisco garter",
    "kitten paw",
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
