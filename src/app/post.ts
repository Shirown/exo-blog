export class Post {
	title: string;
	content: string;
	loveIts: number;
	created_at: Date;

	constructor(theTitle: string = "Pas de Titre"){
		this.title = theTitle;
		this.content = "Cet article n'est pas encore rédigé !";
		this.loveIts = 0;
		this.created_at = new Date();
	}

	setLoveIts(addLove: boolean = true){
		this.loveIts += (addLove) ? 1 : -1;
		console.log('plop');
	};
}
