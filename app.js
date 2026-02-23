const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

// 3 custom Handlebars helpers
const helpers = {
	// Converts text to UPPERCASE
	uppercase: (str) => str.toUpperCase(),

	// Returns "In Progress" or "Completed" based on a boolean
	currentStatus: (inProgress) => inProgress ? 'In Progress' : 'Completed',

	// Joins an array with commas — e.g. ['Express', 'CSS'] → "Express, CSS"
	joinList: (arr) => arr.join(', '),
};

// Set Handlebars as the view engine (with custom helpers)
app.engine('hbs', engine({ extname: '.hbs', helpers }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, etc.) from the public/ folder
app.use(express.static(path.join(__dirname, 'public')));

// Home route - renders the resume
app.get('/', (req, res) => {
	res.render('home', {
		pageTitle: 'Vince Spector - Resume',
		name: 'Vince Spector',
		title: 'The Dark Vibe Coder of Gotham',
		email: 'mrvince369@gmail.com',
		bio: 'CS student at AUPP by day, Batman by night. I fight bugs in code the same way I fight crime — relentlessly and with way too much caffeine. Currently pursuing a degree so I can put "B.S." next to my name (and no, it doesn\'t stand for what you think).',
		currentYear: new Date().getFullYear(),

		skills: [
			'JavaScript',
			'Node.js',
			'Express',
			'HTML & CSS',
			'Staying Up Past 3 AM',
			'Googling Error Messages',
			'Pretending to Understand Regex',
			'Git (force push and pray)',
		],

		experience: [
			{
				role: 'CEO & Founder',
				company: 'Vince Enterprises',
				duration: '2025 - Present',
				description: 'Founded a company. Still figuring out what it does. Revenue: vibes.',
			},
			{
				role: 'Lead Developer',
				company: 'Gotham Safe Streets Initiative',
				duration: '2024 - 2025',
				description: 'Built a city-wide crime alert app that sends real-time warnings to citizens. Gotham PD said it reduced muggings by 40%. The Joker said it was "annoyingly effective."',
			},
			{
				role: 'Professional Procrastinator',
				company: 'My Bedroom',
				duration: '2023 - 2024',
				description: 'Mastered the art of doing everything except what needed to be done.',
			},
		],

		education: [
			{ school: 'American University of Phnom Penh', degree: 'B.S. Computer Science', inProgress: true },
			{ school: 'Gotham Academy', degree: 'High School Diploma in Vigilante Studies', inProgress: false },
		],

		projects: [
			{
				name: 'mrvince-resume',
				description: 'This very website. Built it to prove I can make a website. You\'re looking at the proof.',
				tech: ['Express', 'Handlebars', 'CSS', 'Tears'],
				link: 'https://github.com/mrvince/mrvince-resume',
			},
			{
				name: 'Batcave Dashboard',
				description: 'A real-time dashboard for monitoring Gotham. Alfred said it was "adequate."',
				tech: ['Node.js', 'WebSockets', 'Bat-Signal API'],
				link: null,
			},
			{
				name: 'TodoOrNotTodo',
				description: 'A todo app I built to organize my life. I never opened it again after deploying.',
				tech: ['React', 'Regret'],
				link: null,
			},
		],

		funFacts: [
			'My code works on the first try approximately 0% of the time.',
			'I once mass-deleted a production database. On my first day. It was a learning experience.',
			'My favorite HTTP status code is 418 — I\'m a teapot.',
			'I have 47 unfinished side projects and counting.',
			'I named my laptop "Alfred" because it does everything for me.',
			'Stack Overflow should give me a loyalty card at this point.',
			'Claude Code should give me an honored discount as I am their loyal client.',
			
		],
	});
});

// 404 handler — must be after all other routes
app.use((req, res) => {
	res.status(404).render('404', { pageTitle: '404 — Page Not Found' });
});

// Export the app (no listening here — that's server.js's job)
module.exports = app;
