export class Post {
	title: string;
	content: string;
	loveIts: number;
	created_at: Date;

	constructor(theTitle: string = "Pas de Titre", theContent: string = "Cet article n'est pas encore rédigé !"){
		this.title = theTitle;
		this.content = theContent;
		this.loveIts = 0;
		this.created_at = new Date();
	}
}
