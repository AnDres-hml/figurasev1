import { figurasGeometricas } from "./figuras";

export class circulo extends figurasGeometricas {
    constructor(public radio: number){
        super();
    }
    calcularPerimetro(): number {
        return 2* Math.PI * this.radio;
        
    }
}