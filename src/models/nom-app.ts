export class Exemple {

    location?: string;

    constructor(
        public title: string,
        public description: string,
        public createdAt: Date,
        public like: number,
        public imageUrl: string
    ){
    }
    addLike(): void {
        this.like++;
    };
    removeLike(): void {
        this.like--;
    }

    setLocation(location: string): void {
        this.location = location;
    }
}