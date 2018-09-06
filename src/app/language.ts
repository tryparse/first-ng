export class Language {
    Id: number;
    Title: string;
    CreatedWhen: Date;

    constructor(Id: number, Title: string, CreatedWhen: Date) {
        this.Id = Id;
        this.Title = Title;
        this.CreatedWhen = CreatedWhen;
    }

    formatYear(): number {
        return this.CreatedWhen.getFullYear();
    }
}
