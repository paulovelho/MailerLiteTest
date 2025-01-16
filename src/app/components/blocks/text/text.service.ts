import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }

	public static getRandomQuote(): string {
		const quotes: string[] = [
			"For a moment, <b>nothing</b> happened. Then, after a second or so, <b>nothing</b> continued to happen.",
			"The Answer to the Great Question... Of <i>Life, the Universe and Everything</i>... Is... <b>Forty-two</b>,' said Deep Thought, with infinite majesty and calm.",
			"<i>In the beginning the Universe was created.</i><br/> This had made many people very angry and has been widely regarded as a bad move.",
			"It is a mistake to think you can solve any major problems just with <b>potatoes</b>.",
			"Having not said anything the first time, it was somehow even more difficult to broach the subject the second time around.",
			"He learned to communicate with birds and discovered their conversation was <i>fantastically boring</i>. It was all to do with windspeed, wingspans, power-to-weight ratios and a fair bit about berries.",
			"Nothing travels faster than the speed of light, with the possible exception of <b>bad news</b>, which obeys its own special laws.",
			"It can be very dangerous to see things from somebody else's point of view without the proper training."
		];
		const randomI = Math.floor(Math.random() * quotes.length);
		return `"${quotes[randomI]}"`;
	}
}
