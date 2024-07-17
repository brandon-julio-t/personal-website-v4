export default class Coordinate {
  public constructor(
    public x: number,
    public y: number,
  ) {}

  public euclideanDistanceTo(another: Coordinate): number {
    return Math.sqrt(
      Math.pow(this.x - another.x, 2) + Math.pow(this.y - another.y, 2),
    );
  }
}
