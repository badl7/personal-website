export interface Project {
	name: string;
	url: string;
	sourceUrl?: string;
	description?: string;
	createdAt?: string;
	starCount?: number;
	forkCount?: number;
	language?: string;
	licence?: string;
	topics?: string[];
	inProgress?: boolean;
}
