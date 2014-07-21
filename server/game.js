var nc = require("ncurses");


var player = {
  x: 5,
  y: 10
};

var map =  {
  height: 20,
  width: 8
};
nc.showCursor = false;

var win = new nc.Window(map.width, map.height);
function draw() {
  var color = 1;
  for(var x = 0; x < map.width; x++) {
    for(var y = 0; y < map.height; y++) {
      nc.colorPair(color, 0, 2);
      win.attrset(nc.colorPair(color++));
      win.cursor(x, y);
      win.addstr(".");
    }
  }

  win.refresh();
  win.cursor(player.x, player.y);
  nc.colorPair(color, 7, 2);
  win.attrset(nc.colorPair(color++));
  win.addstr("@");
  win.cursor(0, map.height);
  win.refresh();
}

module.exports = {
  draw: draw,
  player: player
};
