import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService{
    getCats(): string{
        return 'what do you want from me';
    }
    getCat(catId : number) : string {
        return `You resolved cat # ${catId}`;
    }
    addCats(): string {
        return 'Oh, you post something, wow';
    }
    updateCat(id: number): string {
        return `You updated ${id} cat`;
    }
    removeCat(id: number) : string {
        return `You deleted ${id} cat`;
    }
}
