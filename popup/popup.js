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
}, 750);

function tenorCallback_search(responsetext) {
  var response_objects = JSON.parse(responsetext);

  gifs = response_objects["results"];

  var idx = Math.floor(Math.random() * gifs.length);
  var gif_url = gifs[idx]["media"][0]["gif"]["url"];

  document.getElementById("gif_display").src = gif_url;
  return;
}

var presets = [
  {
    name: "Animals",
    queries: [
      "cute animals",
      "cute kitten",
      "sleeping kitten",
      "smol kitten",
      "cute puppy",
      "cute sleeping puppy",
      "cute cat",
      "cute dog",
      "cute rabbit",
      "cute bunny",
      "cute panda",
      "cute koala",
      "cute polar bear",
      "cute llama",
      "cute alpaca",
      "cute pig",
      "cute dog hug",
      "cute doggo",
      "cute catto",
      "cute squirrel",
      "cute fox",
      "cute golden retriever",
      "cute samoyed",
      "cute sand cat",
      "cute raccoon",
      "cute snake",
      "cute quokka",
      "cute arctic foxes",
      "cute hamster",
      "cute red panda",
      "cute panda bear",
      "cute guinea pig",
      "cute deer",
      "cute giraffe",
      "cute penguin",
      "cute hummingbird",
      "cute butterfly",
      "cute owl",
      "cute kitten paw",
    ],
    show: true,
  },
];

function grab_data() {
  var apikey = "ABOEVPLHCZH1";

  var queries = [];

  for (var i = 0; i < presets.length; i++)
    if (presets[i].show) queries = queries.concat(presets[i].queries);

  var search_query = queries[Math.floor(Math.random() * queries.length)];

  var search_url =
    "https://g.tenor.com/v1/search?q=" + search_query + "&key=" + apikey;

  httpGetAsync(search_url, tenorCallback_search);

  return;
}

grab_data();
