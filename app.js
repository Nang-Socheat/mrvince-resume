const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const PORT = 3000;

// Set Handlebars as the view engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

// Home routes - renders the resume
app.get('/', (req, res) => {
	res.render('home', {
		pageTitle: 'Vince - Resume',
		name: 'Vince Spector',
		title: 'Batman',
		email: 'mrvince369@gmail.com',
		bio: 'A CS student at AUPP.',
		skills: ['JavaScript', 'Node.js', 'Express', 'HTML', 'CSS'],
		// skills: ['No-Sleeping', 'Procrastinating', 'Movie-Watching'],	
		experience: [
			{ role: 'Owner', company: 'Vince Enterprises', duration: '2025 - Present' },
			{ role: 'Homeless', company: 'Self-employed', duration: '2023 - 2025' },
		]
	});
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
