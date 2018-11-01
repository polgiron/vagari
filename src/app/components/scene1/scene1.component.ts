import { Component, OnInit } from '@angular/core';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-scene1',
  templateUrl: './scene1.component.html',
  styleUrls: ['./scene1.component.scss']
})
export class Scene1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initParallax();
    this.makeItRain();
  }

  initParallax() {
    const scene = document.querySelector('.parallax-wrapper');
    new Parallax(scene, {
      // limitX: 20,
      limitY: 0,
      // calibrateX: true,
      // calibrateY: true,
      // invertX: false,
      // invertY: true,
      // scalarX: 2,
      // scalarY: 8,
      // frictionX: 0.2,
      // frictionY: 0.8,
      // originX: 0.0,
      // originY: 1.0
    });
  }

  makeItRain() {
    // $('.rain').empty();
    const rain = document.querySelector('.rain');
    const rainFront = document.querySelector('.rain.front-row');
    const rainBack = document.querySelector('.rain.back-row');

    while (rain.firstChild) rain.removeChild(rain.firstChild);

    let increment = 0;
    let drops = "";
    let backDrops = "";

    while (increment < 100) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      const randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      //random number between 5 and 2
      const randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
      backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    // $('.rain.front-row').append(drops);
    // $('.rain.back-row').append(backDrops);
    rainFront.innerHTML = drops;
    rainBack.innerHTML = backDrops;
  }

}
