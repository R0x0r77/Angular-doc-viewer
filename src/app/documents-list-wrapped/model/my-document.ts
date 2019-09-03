export class MyDocument {

    id: number;
    title: string;
    body: string;

    public setId(id: number): void {
        this.id = id;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public setBody(body: string): void {
        this.body = body;
    }
}