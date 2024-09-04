export class Exemple {
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
}