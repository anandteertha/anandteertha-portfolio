import {
    AdditiveBlending, AmbientLight, BufferGeometry, Float32BufferAttribute, MathUtils,
    PerspectiveCamera, Points, PointsMaterial, Scene, Texture, TextureLoader, WebGLRenderer
} from 'three';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  private renderer: WebGLRenderer = new WebGLRenderer();
  private scene: Scene = new Scene();
  private camera: PerspectiveCamera | any;
  stars: any;
  asteroidTexture!: Texture;

  ngOnInit() {
    this.loadTexture().then(() => {
      this.setupScene();
    });
  }

  private async loadTexture(): Promise<void> {
    const loader = new TextureLoader();
    this.asteroidTexture = await new Promise((resolve) =>
      loader.load('asteroid.jpg', resolve)
    );
  }

  private setupScene(): void {
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 0, 50);

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    const ambientLight = new AmbientLight(0xffffff, 1);
    ambientLight.position.set(5, 10, 7.5);
    this.scene.add(ambientLight);

    window.addEventListener('resize', this.onWindowResize.bind(this));
    this.addStarField(1000);
    this.animate();
  }

  private addStarField(count: number = 1000): void {
    const geometry = new BufferGeometry();
    const positions = [];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 1000;
      const y = (Math.random() - 0.5) * 1000;
      const z = (Math.random() - 0.5) * 1000;
      positions.push(x, y, z);
    }

    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));

    const material = new PointsMaterial({
      color: 0xffffff,
      size: 0.8,
      transparent: true,
      opacity: 0.8,
      blending: AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: false
    });

    this.stars = new Points(geometry, material);
    this.scene.add(this.stars);
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.animateStars();
    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animateStars() {
    const positions = this.stars.geometry.attributes.position.array;
    const speed = 1.5;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] += speed;
      if (positions[i + 2] > 0) {
        positions[i + 2] = MathUtils.randFloat(-1000, -200);
      }
    }
    this.stars.geometry.attributes.position.needsUpdate = true;
  }

}
