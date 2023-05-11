export class Coleccion {
    id: number;
    titulo: string;
    imagen: string;
    precio: number;
    precioOferta?: number;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getImagen(): string {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public getPrecioOferta(): number | undefined {
        return this.precioOferta;
    }

    public setPrecioOferta(precioOferta: number): void {
        this.precioOferta = precioOferta;
    }

    constructor(
        id: number,
        titulo: string,
        imagen: string,
        precio: number,
        precioOferta?: number
    ) {
        this.id = id
        this.titulo = titulo
        this.imagen = imagen
        this.precio = precio
        this.precioOferta = precioOferta
    }

}