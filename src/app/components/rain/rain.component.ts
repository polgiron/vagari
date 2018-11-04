import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.scss']
})
export class RainComponent implements OnInit {
  @ViewChild('canvas') canvasElement: ElementRef;
  canvas;
  context: CanvasRenderingContext2D;
  particles = [];

  constructor() { }

  ngOnInit() {
    this.canvas = this.canvasElement.nativeElement;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.context = this.canvas.getContext('2d');
    this.context.strokeStyle = 'rgba(0, 0, 0, 1)';
    this.context.lineWidth = 1;
    this.context.lineCap = 'round';

    let init = [];
    const maxParts = 1000;
    for (let a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 10 + 10
      })
    }

    for (let b = 0; b < maxParts; b++) {
      this.particles[b] = init[b];
    }

    setInterval(this.draw, 30);
  }

  draw() {
    console.log(this.context);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let c = 0; c < this.particles.length; c++) {
      let p = this.particles[c];
      this.context.beginPath();
      this.context.moveTo(p.x, p.y);
      this.context.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
      this.context.stroke();
    }
    this.move();
  }

  move() {
    for (let b = 0; b < this.particles.length; b++) {
      let p = this.particles[b];
      p.x += p.xs;
      p.y += p.ys;
      if (p.x > this.canvas.width || p.y > this.canvas.height) {
        p.x = Math.random() * this.canvas.width;
        p.y = -20;
      }
    }
  }
}
