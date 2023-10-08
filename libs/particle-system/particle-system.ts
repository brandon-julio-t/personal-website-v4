import Particle from "./particle";
import { hexToRgb, randomHexColor, randomIntegerBetween } from "./utilities";
import Vector from "./vector";
import Coordinate from "./coordinate";

export default class ParticleSystem {
  public static readonly MIN_LINK_DISTANCE: number = 175;

  private readonly FPS: number = 60;
  private readonly PARTICLES_COUNT: number;
  private readonly MIN_PARTICLE_SIZE: number = 1;
  private readonly MAX_PARTICLE_SIZE: number = 5;

  private readonly particles: Particle[];
  private readonly ctx:
    | CanvasRenderingContext2D
    | OffscreenCanvasRenderingContext2D;

  private mouseX: number = 0;
  private mouseY: number = 0;
  private previousFrameTime: number = Date.now();
  private animationFrameId: number = 0;

  public constructor(canvas: HTMLCanvasElement) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    const { width, height } = canvas;

    if (canvas.transferControlToOffscreen) {
      // @ts-ignore
      this.ctx = canvas.transferControlToOffscreen().getContext("2d");
    } else {
      // @ts-ignore
      this.ctx = canvas.getContext("2d");
    }

    this.PARTICLES_COUNT = (width / height) * (Math.max(width, height) / 50);
    this.particles = [];

    this.fillParticles();
    this.handleMouseMove();
    this.play();
  }

  public cleanUp(): void {
    while (this.particles.length) {
      this.particles.pop();
    }

    cancelAnimationFrame(this.animationFrameId);
  }

  private fillParticles(): void {
    for (let i = 0; i < this.PARTICLES_COUNT; i++) {
      const { width, height } = this.ctx.canvas;

      const x = randomIntegerBetween(0, width);
      const y = randomIntegerBetween(0, height);

      const position = new Coordinate(x, y);

      const size = randomIntegerBetween(
        this.MIN_PARTICLE_SIZE,
        this.MAX_PARTICLE_SIZE,
      );

      const speed = new Vector(
        Math.random() * Math.round(Math.random())
          ? Math.random()
          : -Math.random(),
        Math.random() * Math.round(Math.random())
          ? Math.random()
          : -Math.random(),
      );

      const color = hexToRgb(randomHexColor());

      this.particles.push(new Particle(position, size, speed, color, this.ctx));
    }
  }

  private handleMouseMove(): void {
    onmousemove = (e: MouseEvent) => {
      const { x, y } = e;
      this.mouseX = x;
      this.mouseY = y;
    };
  }

  private play(): void {
    
    const interval = 1000 / this.FPS;
    const now = Date.now();
    const elapsed = now - this.previousFrameTime;

    if (elapsed <= interval) {
      requestAnimationFrame(() => this.play());
      return;
    }

    this.previousFrameTime = now - (elapsed % interval);

    const { width, height } = this.ctx.canvas;
    this.ctx.clearRect(0, 0, width, height);

    this.handleParticleSystem();

    requestAnimationFrame(() => this.play());
  }

  private handleParticleSystem(): void {
    this.particles.forEach((particle) => {
      particle.move();
      particle.draw();
      particle.wrapCircle();

      const mouseCoordinate = new Coordinate(this.mouseX, this.mouseY);
      const distanceToMouse = particle.distanceToCoordinate(mouseCoordinate);
      if (distanceToMouse <= ParticleSystem.MIN_LINK_DISTANCE) {
        particle.linkToCoordinate(mouseCoordinate);
      }

      this.particles.forEach((another) => {
        if (particle === another) {
          return;
        }

        const distance = particle.distanceTo(another);
        if (distance <= ParticleSystem.MIN_LINK_DISTANCE) {
          particle.linkTo(another);
        }
      });
    });
  }
}
