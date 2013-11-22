var Cell = function(rows,cols){
  this.cellStatus = initialCellStatus();
  this.maxRows = rows
  this.maxCols = cols
}

function initialCellStatus(){
  if (randomNumber() === 1){
    return true;
  } else {
    return false;
  }
}

function randomNumber(){
  return Math.floor( Math.random() * 3 )+1;
}

Cell.prototype.toggleCellStatus = function(){
  console.log("toggleCellStatus: changes the cell status from dead to alive or vice versa");
  if (this.cellStatus === true){
    this.cellStatus = false;
  } else {
    this.cellStatus = true;
  }
};

Cell.prototype.findNeighbors = function(x, y){
  if ((x===1 || x===this.maxRows) && (y===1 || y===this.maxCols)){
    return this.findNeighborsForCornerCell(x, y)
  } else if ((x===1)&&(y>=2 || y<=this.maxCols-1)){
    return this.findNeighborsForTopEdgeCells(x, y)
  } else if ((x===this.maxRows)&&(y>=2 || y<=this.maxCols-1)){
    return this.findNeighborsForBottomEdgeCells(x, y)
  } else if ((x>=2 || x<=this.maxRows-1)&&(y===this.maxCols)){
    return this.findNeighborsForRightEdgeCells(x, y)
  } else if ((x>=2 || x<=this.maxRows-1)&&(y===1)){
    return this.findNeighborsForLeftEdgeCells(x, y)
  } else {
    return this.findNeighborsForCenterCells(x, y)
  }
}

Cell.prototype.findNeighborsForCornerCell = function(x, y){
  if (x===1 && y===1){
    return [[x, y+1], [x+1, y], [x+1, y+1]];
  } else if (x===this.maxRows && y===1){
    return [[x, y+1], [x-1, y], [x-1, y+1]];
  } else if (x===1 && y===this.maxCols){
    return [[x, y-1], [x+1, y-1], [x+1, y]];
  } else if (x===this.maxRows && y===this.maxCols){
    return [[x-1, y], [x-1, y-1], [x, y-1]];
  }
}

Cell.prototype.findNeighborsForTopEdgeCells = function(x, y){
  return [[x, y-1], [x+1, y-1], [x+1, y], [x+1, y+1], [x, y+1]]
}

Cell.prototype.findNeighborsForBottomEdgeCells = function(x, y){
  return [[x, y-1], [x-1, y-1], [x-1, y], [x-1, y+1], [x, y+1]]
}

Cell.prototype.findNeighborsForRightEdgeCells = function(x, y){
  return [[x-1, y], [x-1, y-1], [x, y-1], [x+1, y-1], [x+1, y]]
}

Cell.prototype.findNeighborsForLeftEdgeCells = function(x, y){
  return [[x-1, y], [x-1, y+1], [x, y+1], [x+1, y+1], [x+1, y]]
}

Cell.prototype.findNeighborsForCenterCells = function(x, y){
  return [[x-1, y-1], [x-1, y], [x-1, y+1], [x, y-1], [x, y+1], [x+1, y-1], [x+1, y], [x+1, y+1]]
}