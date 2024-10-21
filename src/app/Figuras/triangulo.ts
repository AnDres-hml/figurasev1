import { figurasGeometricas } from "./figuras";

export class triangulo extends figurasGeometricas {
    constructor(public lado1: number, public lado2: number, public lado3: number){
        super();
    }

    calcularPerimetro(): number {
        return this.lado1 + this.lado2 + this.lado3;
        
    }
}