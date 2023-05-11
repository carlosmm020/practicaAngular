export class Banner {
    private id: number;
    private titulo: string;
    private imagen: string;

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getImagen(): string {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }
    
    constructor(id: number, titulo: string, imagen: string) {
        this.id = id
        this.titulo = titulo
        this.imagen = imagen
    }

}