class Piece {
  constructor(type, allegiance) {
    this.allegiance = allegiance;
    this.type = allegiance === 'w' ? type.toUpperCase() : type;
  }
}

module.exports = Piece;
