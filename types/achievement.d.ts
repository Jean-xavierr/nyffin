// RANKS : number, positive, 0 = TBD
// DATE: string, '.' separated, numbers by two (5 becomes 05), empty = CURRENTLY

declare interface IAchievement {
	rank: number;
	date: string;
	event_name: string;
	url: string;
	url_type: string;
}
