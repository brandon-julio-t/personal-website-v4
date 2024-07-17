import Coordinate from "./coordinate";
import ParticleSystem from "./particle-system";
import RGB from "./rgb";
import { toRgbString } from "./utilities";
import Vector from "./vector";

export default class Particle {
  public constructor(
    private readonly position: Coordinate,
    private readonly size: number,
    private readonly speed: Vector,
    private readonly color: RGB,
    private readonly ctx:
      | CanvasRenderingContext2D
      | OffscreenCanvasRenderingContext2D,
  ) {}

  public move(): void {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }

  public draw(): void {
    const { x, y } = this.position;

    const centerDelta = this.size / 2;

    this.ctx.fillStyle = toRgbString(this.color);
    this.ctx.beginPath();
    this.ctx.arc(x - centerDelta, y - centerDelta, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }

  public wrapCircle(): void {
    const { width, height } = this.ctx.canvas;
    const { x, y } = this.position;
    const { x: vX, y: vY } = this.speed;

    const centerDelta = this.size / 2;
    const edgeX = x + centerDelta;
    const edgeY = y + centerDelta;

    const isGoingLeft = vX < 0;
    const isGoingRight = vX > 0;
    const isGoingUp = vY < 0;
    const isGoingDown = vY > 0;

    if (edgeX > width + centerDelta && isGoingRight) {
      this.position.x = -centerDelta;
    }

    if (edgeX < centerDelta && isGoingLeft) {
      this.position.x = width + centerDelta;
    }

    if (edgeY > height + centerDelta && isGoingDown) {
      this.position.y = -centerDelta;
    }

    if (edgeY < centerDelta && isGoingUp) {
      this.position.y = height + centerDelta;
    }
  }

  public linkTo(another: Particle): void {
    const { x: x1, y: y1 } = this.position;
    const { x: x2, y: y2 } = another.position;

    const distance = this.position.euclideanDistanceTo(another.position);
    const gradient = this.ctx.createLinearGradient(x1, y1, x2, y2);
    gradient.addColorStop(
      0,
      toRgbString(this.color, distance / ParticleSystem.MIN_LINK_DISTANCE),
    );
    gradient.addColorStop(
      1,
      toRgbString(another.color, distance / ParticleSystem.MIN_LINK_DISTANCE),
    );

    const centerDelta = this.size / 2;

    this.ctx.strokeStyle = gradient;
    this.ctx.beginPath();
    this.ctx.moveTo(x1 - centerDelta, y1 - centerDelta);
    this.ctx.lineTo(x2 - centerDelta, y2 - centerDelta);
    this.ctx.stroke();
  }

  public distanceTo(another: Particle): number {
    return this.position.euclideanDistanceTo(another.position);
  }

  public distanceToCoordinate(coordinate: Coordinate): number {
    return this.position.euclideanDistanceTo(coordinate);
  }

  public linkToCoordinate(another: Coordinate): void {
    const { x: fromX, y: fromY } = this.position;
    const { x: toX, y: toY } = another;

    const centerDelta = this.size / 2;

    this.ctx.strokeStyle = toRgbString(
      this.color,
      this.position.euclideanDistanceTo(another) /
        ParticleSystem.MIN_LINK_DISTANCE,
    );
    this.ctx.beginPath();
    this.ctx.moveTo(fromX - centerDelta, fromY - centerDelta);
    this.ctx.lineTo(toX - centerDelta, toY - centerDelta);
    this.ctx.stroke();
  }
}
