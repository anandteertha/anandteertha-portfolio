import { Mesh, Vector3 } from "three";

export interface AsteriodData {
    mesh: Mesh;
    rotationSpeed: Vector3;
    velocity: Vector3;
}
