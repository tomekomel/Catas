function towerBuilder(nFloors) {
  var char = "*";
  var space = ' ';
  var towerWidth = nFloors * 2 - 1;
  var tower = [];

  for (var level = nFloors; level > 0; level--) {
    var levelWidth = level * 2 - 1;
    var levelBlock = char.padStart(levelWidth, char);

    var spaceNeeded = towerWidth - levelWidth;
    var levelWithSpaces = levelBlock.padStart(
      levelBlock.length + spaceNeeded / 2,
      space
    );
    levelWithSpaces = levelWithSpaces.padEnd(
      levelWithSpaces.length + spaceNeeded / 2,
      space
    );

    tower.push(levelWithSpaces);
  }

  return tower.reverse();
}

module.exports = towerBuilder;
