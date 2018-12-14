import fs from 'fs';
import cheerio from 'cheerio';

fs.readFile('public/index.html', 'utf8', (err, markup) => {
	if (err) {
		return console.log(err);
	}

	const $ = cheerio.load(markup);
	$('head').prepend('<link rel="stylesheet" href="/styles.css">');

	fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
		if (err){
			return console.log(err);
		}
		console.log('index.html written to /dist');
	});
})