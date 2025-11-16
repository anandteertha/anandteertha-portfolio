import {
    AdditiveBlending, AmbientLight, BufferGeometry, CanvasTexture, Color, Float32BufferAttribute,
    Mesh, MeshBasicMaterial, PerspectiveCamera, Points, PointsMaterial, Scene, SphereGeometry,
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
    alpha: true, // transparent so page can show behind
    antialias: true,
  });

  private scene: Scene = new Scene();
  private camera!: PerspectiveCamera;

  private stars!: Points;
  private waypoints: Mesh[] = [];

  private scrollProgress: number = 0;
  private targetZ: number = 50;
  private currentZ: number = 50;

  private mouseX: number = 0;
  private mouseY: number = 0;

  ngOnInit(): void {
    this.setupScene();
    this.addStarField(2000);
    this.addWaypoints();

    // Initialize scroll state once on load
    this.handleScroll();

    this.animate();
  }

  // ================== SETUP ==================

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
    canvas.style.zIndex = '0'; // app-root should be z-index: 1 with transparent bg
    document.body.appendChild(canvas);

    const ambientLight = new AmbientLight(new Color(0xff007c), 0.3);
    this.scene.add(ambientLight);

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  // Create a soft, round glow texture for stars
  private createStarTexture(): CanvasTexture {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext('2d')!;
    const center = size / 2;
    const radius = size / 2;

    const gradient = ctx.createRadialGradient(
      center,
      center,
      0,
      center,
      center,
      radius
    );
    gradient.addColorStop(0.0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.3, 'rgba(255,255,255,0.9)');
    gradient.addColorStop(0.7, 'rgba(255,255,255,0.3)');
    gradient.addColorStop(1.0, 'rgba(255,255,255,0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const texture = new CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  private addStarField(count: number = 2000): void {
    const geometry = new BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = Math.random() * 2000 - 1000;
      positions.push(x, y, z);

      const color = new Color();
      const hue = Math.random() * 0.2 + 0.8; // pink → cyan-ish range
      const saturation = 0.5 + Math.random() * 0.5;
      const lightness = 0.3 + Math.random() * 0.7;
      color.setHSL(hue, saturation, lightness);
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));

    const starTexture = this.createStarTexture();

    const material = new PointsMaterial({
      size: 6,
      map: starTexture,
      alphaTest: 0.1,
      transparent: true,
      opacity: 0.9,
      blending: AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
      sizeAttenuation: true,
    });

    this.stars = new Points(geometry, material);
    this.scene.add(this.stars);
  }

  private addWaypoints(): void {
    // Positions along Z where "planets" sit
    const waypointPositions = [-800, -600, -400, -200, 0, 200, 400, 600, 800];

    waypointPositions.forEach((z, index) => {
      // Smaller spheres
      const geometry = new SphereGeometry(6, 24, 24);

      // Softer blue-teal color range
      const baseHue = 0.55; // blue-ish
      const hue = (baseHue + index * 0.02) % 1;
      const color = new Color().setHSL(hue, 0.5, 0.6);

      const material = new MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.2, // softer / less intrusive
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

  // ================== EVENTS ==================

  @HostListener('window:scroll', [])
  handleScroll(): void {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (scrollHeight <= 0) {
      this.scrollProgress = 0;
    } else {
      this.scrollProgress = window.scrollY / scrollHeight;
    }

    if (!Number.isFinite(this.scrollProgress)) {
      this.scrollProgress = 0;
    }

    this.targetZ = 50 + this.scrollProgress * 500;
  }

  @HostListener('window:mousemove', ['$event'])
  handleMouseMove(event: MouseEvent): void {
    this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // ================== ANIMATION LOOP ==================

  private animate(): void {
    requestAnimationFrame(() => this.animate());

    // Smooth camera movement along Z based on scroll
    this.currentZ += (this.targetZ - this.currentZ) * 0.05;

    const parallaxX = this.mouseX * 20;
    const parallaxY = this.mouseY * 20;

    this.camera.position.x += (parallaxX - this.camera.position.x) * 0.05;
    this.camera.position.y += (parallaxY - this.camera.position.y) * 0.05;
    this.camera.position.z = this.currentZ;

    this.camera.rotation.z = Math.sin(Date.now() * 0.0001) * 0.1;

    this.animateStars();
    this.animateWaypoints();

    this.renderer.render(this.scene, this.camera);
  }

  private animateStars(): void {
    const positionAttr = this.stars.geometry.getAttribute(
      'position'
    ) as Float32BufferAttribute;
    const colorAttr = this.stars.geometry.getAttribute(
      'color'
    ) as Float32BufferAttribute;

    const positions = positionAttr.array;
    const colors = colorAttr.array;

    const speed = 2 + this.scrollProgress * 3;

    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] += speed;

      if (positions[i + 2] > this.camera.position.z + 100) {
        positions[i + 2] = this.camera.position.z - 1000;
        positions[i] = (Math.random() - 0.5) * 2000;
        positions[i + 1] = (Math.random() - 0.5) * 2000;
      }

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

    positionAttr.needsUpdate = true;
    colorAttr.needsUpdate = true;
  }

  private animateWaypoints(): void {
    const time = Date.now() * 0.001;

    this.waypoints.forEach((waypoint, index) => {
      // Smaller, subtler pulse
      const scale = 0.8 + Math.sin(time * 2 + index) * 0.15;
      waypoint.scale.set(scale, scale, scale);

      // Gentle rotation
      waypoint.rotation.x += 0.008;
      waypoint.rotation.y += 0.008;

      // Slight drifting
      waypoint.position.x += Math.sin(time + index) * 0.05;
      waypoint.position.y += Math.cos(time + index) * 0.05;

      const distance = Math.abs(waypoint.position.z - this.camera.position.z);
      const opacity = Math.max(0.1, 1 - distance / 500);
      (waypoint.material as MeshBasicMaterial).opacity = opacity * 0.3;
    });
  }
}
