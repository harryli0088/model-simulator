video_src="https://www.youtube.com/embed/UzXuQbcp8Yc";

pre_sections = [
  {"measures":4, "counts":6, "text":"Duet Intro"},
  {"measures":4, "counts":8, "text":"Intro"},
  {"measures":4, "counts":8, "text":"Verse 1"},
  {"measures":4, "counts":8, "text":"Pre Chorus 1"},
  {"measures":1, "counts":4, "text":"Pause"},
  {"measures":8, "counts":8, "text":"Chorus 1"},
  {"measures":4, "counts":8, "text":"Verse 2"},
  {"measures":4, "counts":8, "text":"Pre Chorus 2"},
  {"measures":1, "counts":4, "text":"Pause"},
  {"measures":4, "counts":8, "text":"Chorus 2"},
  {"measures":4, "counts":8, "text":"Bridge 1"},
  {"measures":4, "counts":8, "text":"Bridge 2"},
  {"measures":4, "counts":8, "text":"Bridge 2 Repeat"},
  {"measures":4, "counts":8, "text":"Chorus 3"},
  {"measures":4, "counts":8, "text":"Chorus 3 Repeat"},
  {"measures":4, "counts":8, "text":"Ending"}
];

pre_comments = [
  {"startCount":1, "endCount":24, "text":"Beat can be hard to discern"},
  {"startCount":25, "endCount":188, "text":"Dance; walk starts ~1:45"},
  {"startCount":253, "endCount":257, "text":"Freeze 4cts"},
  {"startCount":318, "endCount":328, "text":"Don't collide plz ty"},
  {"startCount":329, "endCount":336, "text":"Make a semicircle"},
  {"startCount":337, "endCount":338, "text":"Chris Y switch pose"},
  {"startCount":339, "endCount":340, "text":"John switch pose"},
  {"startCount":341, "endCount":342, "text":"June (J) switch pose"},
  {"startCount":343, "endCount":344, "text":"Julia switch pose"},
  {"startCount":345, "endCount":346, "text":"Jenett switch pose"},
  {"startCount":347, "endCount":348, "text":"Jeremy G switch pose"},
  {"startCount":349, "endCount":350, "text":"Allysa switch pose"},
  {"startCount":351, "endCount":352, "text":"Michelle F switch pose"},
  {"startCount":377, "endCount":384, "text":"Seizure warning"},
  {"startCount":385, "endCount":400, "text":"Order doesn't matter, line up with your color"},
  {"startCount":401, "endCount":448, "text":"Do a final group pose at the bottom of the T"}
];

models = [
  {
    "name":"Derrick",
    "start":
      {
        "x":280,
        "y":60
      },
    "pre_moves":[
      {"counts":6, "type":"pose"},
      {"counts":6, "type":"pose"},
      {"counts":5, "type":"down"},
      {"counts":1, "type":"diag sw"},
      {"counts":6, "type":"pose"}
    ],
    "color":"green"
  },
  {
    "name":"Tim",
    "start":"middle",
    "pre_moves":[
      {"counts":6, "type":"delay"},
      {"counts":6, "type":"pose"},
      {"counts":5, "type":"up"},
      {"counts":1, "type":"diag ne"},
      {"counts":6, "type":"pose"},
      {"counts":6, "type":"down"}
    ],
    "color":"red"
  },
  {
    "name":"Sam",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"left"},
      {"counts":20, "type":"pose"},
      {"counts":6, "dx":4, "dy":4, "type":""}
    ],
    "color":"green"
  },
  {
    "name":"Eurie",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":8, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":3, "type":"down"},
      {"counts":2, "type":"left"},
      {"counts":14, "type":"pose"},
      {"counts":5, "dx":2, "dy":4, "type":""}
    ],
    "color":"green"
  },
  {
    "name":"Brandon",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":3, "type":"down"},
      {"counts":8, "type":"pose"},
      {"counts":4, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Nick P",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":24, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":8, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":7, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Julianne",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"right"},
      {"counts":20, "type":"pose"},
      {"counts":6, "dx":-4, "dy":4, "type":""}
    ],
    "color":"orange"
  },
  {
    "name":"Briana",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":8, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":3, "type":"down"},
      {"counts":2, "type":"right"},
      {"counts":14, "type":"pose"},
      {"counts":5, "dx":-2, "dy":4, "type":""}
    ],
    "color":"orange"
  },
  {
    "name":"Michele T",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":3, "type":"down"},
      {"counts":8, "type":"pose"},
      {"counts":4, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Shyam",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":24, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":8, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":7, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Maggie",
    "start":"middle",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":32, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":1, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"diag sw"}
    ],
    "color":"orange"
  },
  {
    "name":"ChaoLi",
    "start":"middle",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":32, "type":"delay"},
      {"counts":8, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":1, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"diag sw"}
    ],
    "color":"orange"
  },
  {
    "name":"Alvin",
    "start":"middle",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":32, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":1, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"diag sw"}
    ],
    "color":"orange"
  },
  {
    "name":"Nick L",
    "start":"middle",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":32, "type":"delay"},
      {"counts":24, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "dx":1, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"diag sw"}
    ],
    "color":"orange"
  },
  {
    "name":"Christine",
    "start":"middle",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":32, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":-1, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"diag se"}
    ],
    "color":"green"
  },
  {
    "name":"Joe",
    "start":"middle",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":32, "type":"delay"},
      {"counts":8, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":-1, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"diag se"}
    ],
    "color":"green"
  },
  {
    "name":"Rebecca",
    "start":"middle",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":32, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":-1, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"diag se"}
    ],
    "color":"green"
  },
  {
    "name":"Shawn",
    "start":"middle",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":32, "type":"delay"},
      {"counts":24, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"up"},
      {"counts":4, "dx":-1, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"diag se"}
    ],
    "color":"green"
  },
  {
    "name":"Chris M",
    "start":"middle",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":64, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":1, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"diag sw"}
    ],
    "color":"orange"
  },
  {
    "name":"Josh",
    "start":"middle",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":64, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":8, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":1, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"diag sw"}
    ],
    "color":"orange"
  },
  {
    "name":"Jeff",
    "start":"middle",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":64, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":-1, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"diag se"}
    ],
    "color":"green"
  },
  {
    "name":"Patrick",
    "start":"middle",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":64, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":8, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":-1, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"diag se"}
    ],
    "color":"green"
  },
  {
    "name":"Elizabeth",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":64, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":-2, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"diag se"}
    ],
    "color":"orange"
  },
  {
    "name":"Christina",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":64, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":8, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":-2, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"diag se"}
    ],
    "color":"orange"
  },
  {
    "name":"Melody W",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":64, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":-2, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Kevin",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":64, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":24, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":-2, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Isabelle",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":64, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":2, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"diag sw"}
    ],
    "color":"green"
  },
  {
    "name":"Michael",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":64, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":8, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":2, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"diag sw"}
    ],
    "color":"green"
  },
  {
    "name":"Cynthia",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":64, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":2, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Elaine",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":64, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":24, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":4, "dx":2, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Julia",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":128, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":6, "type":"delay"},
      {"counts":8, "dx":0, "dy":-4, "type":"half speed"},
      {"counts":18, "type":"pose"},
      {"counts":2, "dx":1.75, "dy":0.75, "type":""},
      {"counts":2, "dx":1.5, "dy":1.5, "type":""},
      {"counts":2, "dx":0.75, "dy":1.75, "type":""},
      {"counts":3, "type":"left"}
    ],
    "color":"orange"
  },
  {
    "name":"June (J)",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":128, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":8, "dx":1.75, "dy":-3.25, "type":"half speed"},
      {"counts":20, "type":"pose"},
      {"counts":2, "dx":1.5, "dy":1.5, "type":""},
      {"counts":2, "dx":0.75, "dy":1.75, "type":""},
      {"counts":3, "type":"left"}
    ],
    "color":"orange"
  },
  {
    "name":"John",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":128, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":2, "type":"delay"},
      {"counts":8, "dx":3.25, "dy":-1.75, "type":"half speed"},
      {"counts":22, "type":"pose"},
      {"counts":2, "dx":0.75, "dy":1.75, "type":""},
      {"counts":3, "type":"left"}
    ],
    "color":"orange"
  },
  {
    "name":"Chris Y",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":128, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":8, "dx":4, "dy":0, "type":"half speed"},
      {"counts":24, "type":"pose"},
      {"counts":3, "type":"left"}
    ],
    "color":"orange"
  },
  {
    "name":"Jenett",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":128, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":6, "type":"delay"},
      {"counts":8, "dx":0, "dy":-4, "type":"half speed"},
      {"counts":18, "type":"pose"},
      {"counts":2, "dx":-1.75, "dy":0.75, "type":""},
      {"counts":2, "dx":-1.5, "dy":1.5, "type":""},
      {"counts":2, "dx":-0.75, "dy":1.75, "type":""},
      {"counts":3, "type":"right"}
    ],
    "color":"green"
  },
  {
    "name":"Jereny G",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":128, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":8, "dx":-1.75, "dy":-3.25, "type":"half speed"},
      {"counts":20, "type":"pose"},
      {"counts":2, "dx":-1.5, "dy":1.5, "type":""},
      {"counts":2, "dx":-0.75, "dy":1.75, "type":""},
      {"counts":3, "type":"right"}
    ],
    "color":"green"
  },
  {
    "name":"Allysa",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":128, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":2, "type":"delay"},
      {"counts":8, "dx":-3.25, "dy":-1.75, "type":"half speed"},
      {"counts":22, "type":"pose"},
      {"counts":2, "dx":-0.75, "dy":1.75, "type":""},
      {"counts":3, "type":"right"}
    ],
    "color":"green"
  },
  {
    "name":"Michelle F",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":128, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":8, "dx":-4, "dy":0, "type":"half speed"},
      {"counts":24, "type":"pose"},
      {"counts":3, "type":"right"}
    ],
    "color":"green"
  },
  {
    "name":"Sabrina",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":160, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":24, "type":"up half speed"},
      {"counts":8, "type":"pose"},
      {"counts":10, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Iris",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":160, "type":"delay"},
      {"counts":8, "type":"delay"},
      {"counts":16, "dx":1, "dy":-8, "type":"half speed"},
      {"counts":12, "type":"pose"},
      {"counts":4, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Jen",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":160, "type":"delay"},
      {"counts":12, "type":"delay"},
      {"counts":8, "dx":1, "dy":-4, "type":"half speed"},
      {"counts":16, "type":"pose"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Jeremy R",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":160, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":12, "dx":5, "dy":-4, "type":"half speed"},
      {"counts":8, "type":"pose"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Cynthia",
    "start":"middle right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":160, "type":"delay"},
      {"counts":20, "type":"delay"},
      {"counts":8, "dx":5, "dy":0, "type":"half speed"},
      {"counts":8, "type":"pose"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Eric",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":160, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":24, "type":"up half speed"},
      {"counts":8, "type":"pose"},
      {"counts":10, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"June (S)",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":160, "type":"delay"},
      {"counts":8, "type":"delay"},
      {"counts":16, "dx":-1, "dy":-8, "type":"half speed"},
      {"counts":12, "type":"pose"},
      {"counts":4, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Peter",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":160, "type":"delay"},
      {"counts":12, "type":"delay"},
      {"counts":8, "dx":-1, "dy":-4, "type":"up half speed"},
      {"counts":16, "type":"pose"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Dom",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":160, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":12, "dx":-5, "dy":-4, "type":"half speed"},
      {"counts":8, "type":"pose"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Michele T",
    "start":"middle left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":160, "type":"delay"},
      {"counts":20, "type":"delay"},
      {"counts":8, "dx":-5, "dy":0, "type":"half speed"},
      {"counts":8, "type":"pose"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3O1",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O2",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":6, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O3",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":8, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O4",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":10, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O5",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":12, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O6",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":14, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O7",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O8",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":18, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O9",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":20, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O10",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":22, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O11",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":24, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O12",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":26, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O13",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":28, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O14",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":30, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O15",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":32, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O16",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":34, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O17",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":36, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O18",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":38, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O19",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":40, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag sw"},
      {"counts":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Derrick",
    "start":"right",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":42, "type":"delay"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":7, "type":"up"},
      {"counts":1, "type":"diag nw"},
      {"counts":32, "type":"pose"}
    ],
    "color":"orange"
  },
  {
    "name":"C3G1",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G2",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":6, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G3",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":8, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G4",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":10, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G5",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":12, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G6",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":14, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G7",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G8",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":18, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G9",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":20, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G10",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":22, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G11",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":24, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G12",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":26, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G13",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":28, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G14",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":30, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G15",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":32, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G16",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":34, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G17",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":36, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G18",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":38, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G19",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":40, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":1, "type":"diag se"},
      {"counts":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Melody T",
    "start":"left",
    "pre_moves":[
      {"counts":188, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":42, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":7, "type":"up"},
      {"counts":1, "type":"diag ne"},
      {"counts":32, "type":"pose"}
    ],
    "color":"green"
  }
]
