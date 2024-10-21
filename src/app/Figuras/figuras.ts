export abstract class figurasGeometricas {
    abstract calcularPerimetro(): number;
    
}


export class Circulo extends figurasGeometricas {
    constructor(public radio: number){
        super();
    }
    calcularPerimetro(): number {
        return 2* Math.PI * this.radio;
        
    }
}


export class Triangulo extends figurasGeometricas {
    constructor(public lado1: number, public lado2: number, public lado3: number){
        super();
    }

    calcularPerimetro(): number {
        return this.lado1 + this.lado2 + this.lado3;
        
    }
}