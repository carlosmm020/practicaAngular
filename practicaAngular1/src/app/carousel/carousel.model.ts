export class Carousel {
    private id: number;
    private src: string;
    private alt: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getSrc(): string {
        return this.src;
    }

    public setSrc(src: string): void {
        this.src = src;
    }

    public getAlt(): string {
        return this.alt;
    }

    public setAlt(alt: string): void {
        this.alt = alt;
    }

    constructor(
        id: number,
        src: string,
        alt: string
    ) {
        this.id = id
        this.src = src
        this.alt = alt
    }

}