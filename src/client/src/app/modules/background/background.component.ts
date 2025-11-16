import {
    AdditiveBlending, AmbientLight, BufferGeometry, Color, Float32BufferAttribute, Mesh,
    MeshBasicMaterial, PerspectiveCamera, Points, PointsMaterial, Scene, SphereGeometry,
    WebGLRenderer
} from 'three';

import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent implements OnInit {
  private renderer: WebGLRenderer = new WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  private scene: Scene = new Scene();
  private camera: PerspectiveCamera | any;
  stars: any;
  private waypoints: Mesh[] = [];
  private scrollProgress: number = 0;
  private targetZ: number = 50;
  private currentZ: number = 50;
  private mouseX: number = 0;
  private mouseY: number = 0;

  ngOnInit() {
    this.setupScene();
    this.animate();
    this.handleScroll();
  }

  private setupScene(): void {
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    this.camera.position.set(0, 0, 50);

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const canvas = this.renderer.domElement;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);

    // Ambient light with subtle color
    const ambientLight = new AmbientLight(new Color(0xff007c), 0.3);
    this.scene.add(ambientLight);

    window.addEventListener('resize', this.onWindowResize.bind(this));
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('mousemove', this.handleMouseMove.bind(this));

    this.addStarField(2000);
    this.addWaypoints();
  }

  private addStarField(count: number = 2000): void {
    const geometry = new BufferGeometry();
    const positions = [];
    const colors = [];
    const sizes = [];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = Math.random() * 2000 - 1000;
      positions.push(x, y, z);

      // Color variation for depth
      const color = new Color();
      const hue = Math.random() * 0.2 + 0.8; // Pink to cyan range
      const saturation = 0.5 + Math.random() * 0.5;
      const lightness = 0.3 + Math.random() * 0.7;
      color.setHSL(hue, saturation, lightness);
      colors.push(color.r, color.g, color.b);

      sizes.push(Math.random() * 3 + 0.5);
    }

    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new Float32BufferAttribute(sizes, 1));

    const material = new PointsMaterial({
      size: 2,
      transparent: true,
      opacity: 0.8,
      blending: AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
      sizeAttenuation: true,
    });

    this.stars = new Points(geometry, material);
    this.scene.add(this.stars);
  }

  private addWaypoints(): void {
    // Create glowing waypoint spheres at different z positions
    const waypointPositions = [-800, -600, -400, -200, 0, 200, 400, 600, 800];

    waypointPositions.forEach((z, index) => {
      const geometry = new SphereGeometry(15, 16, 16);
      const material = new MeshBasicMaterial({
        color: new Color().setHSL((index * 0.1) % 1, 0.8, 0.6),
        transparent: true,
        opacity: 0.3,
        wireframe: false,
      });

      const waypoint = new Mesh(geometry, material);
      waypoint.position.set(
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300,
        z
      );

      this.waypoints.push(waypoint);
      this.scene.add(waypoint);
    });
  }

  @HostListener('window:scroll', [])
  handleScroll(): void {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = window.scrollY / scrollHeight;
    this.targetZ = 50 + this.scrollProgress * 500; // Move forward as user scrolls
  }

  @HostListener('window:mousemove', ['$event'])
  handleMouseMove(event: MouseEvent): void {
    this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());

    // Smooth camera movement
    this.currentZ += (this.targetZ - this.currentZ) * 0.05;

    // Parallax effect with mouse
    const parallaxX = this.mouseX * 20;
    const parallaxY = this.mouseY * 20;

    this.camera.position.x += (parallaxX - this.camera.position.x) * 0.05;
    this.camera.position.y += (parallaxY - this.camera.position.y) * 0.05;
    this.camera.position.z = this.currentZ;

    // Rotate camera slightly for journey feel
    this.camera.rotation.z = Math.sin(Date.now() * 0.0001) * 0.1;

    // Animate stars
    this.animateStars();

    // Animate waypoints
    this.animateWaypoints();

    this.renderer.render(this.scene, this.camera);
  }

  private animateStars(): void {
    const positions = this.stars.geometry.attributes.position.array;
    const colors = this.stars.geometry.attributes.color.array;
    const speed = 2 + this.scrollProgress * 3; // Speed increases with scroll

    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] += speed;

      // Reset stars that pass the camera
      if (positions[i + 2] > this.camera.position.z + 100) {
        positions[i + 2] = this.camera.position.z - 1000;
        positions[i] = (Math.random() - 0.5) * 2000;
        positions[i + 1] = (Math.random() - 0.5) * 2000;
      }

      // Fade stars based on distance
      const distance = positions[i + 2] - this.camera.position.z;
      const normalizedDistance = Math.max(
        0,
        Math.min(1, (distance + 500) / 1000)
      );
      const colorIndex = (i / 3) * 3;
      colors[colorIndex] = normalizedDistance;
      colors[colorIndex + 1] = normalizedDistance * 0.8;
      colors[colorIndex + 2] = normalizedDistance;
    }

    this.stars.geometry.attributes.position.needsUpdate = true;
    this.stars.geometry.attributes.color.needsUpdate = true;
  }

  private animateWaypoints(): void {
    const time = Date.now() * 0.001;

    this.waypoints.forEach((waypoint, index) => {
      // Pulse effect
      const scale = 1 + Math.sin(time * 2 + index) * 0.2;
      waypoint.scale.set(scale, scale, scale);

      // Rotate waypoints
      waypoint.rotation.x += 0.01;
      waypoint.rotation.y += 0.01;

      // Move waypoints slightly
      waypoint.position.x += Math.sin(time + index) * 0.1;
      waypoint.position.y += Math.cos(time + index) * 0.1;

      // Fade based on distance from camera
      const distance = Math.abs(waypoint.position.z - this.camera.position.z);
      const opacity = Math.max(0.1, 1 - distance / 500);
      (waypoint.material as MeshBasicMaterial).opacity = opacity * 0.4;
    });
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
