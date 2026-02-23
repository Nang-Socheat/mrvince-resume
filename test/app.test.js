const { describe, it } = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../app');

describe('Resume App', () => {
	it('GET / returns status 200', async () => {
		const res = await request(app).get('/');
		assert.strictEqual(res.status, 200);
	});

	it('GET / returns HTML', async () => {
		const res = await request(app).get('/');
		assert.match(res.headers['content-type'], /html/);
	});

	it('renders the resume name', async () => {
		const res = await request(app).get('/');
		assert.match(res.text, /Vince Spector/);
	});

	it('renders the skills section', async () => {
		const res = await request(app).get('/');
		assert.match(res.text, /Skills/);
		assert.match(res.text, /JavaScript/);
		assert.match(res.text, /Node\.js/);
	});

	it('renders the experience section', async () => {
		const res = await request(app).get('/');
		assert.match(res.text, /Experience/);
		assert.match(res.text, /Vince Enterprises/);
		assert.match(res.text, /Gotham Safe Streets Initiative/);
	});

	it('renders the header partial', async () => {
		const res = await request(app).get('/');
		assert.match(res.text, /<header>/);
		assert.match(res.text, /The Dark Vibe Coder of Gotham/);
	});

	it('renders the footer partial', async () => {
		const res = await request(app).get('/');
		assert.match(res.text, /<footer>/);
		assert.match(res.text, /mrvince369@gmail\.com/);
	});

	it('renders the nav partial', async () => {
		const res = await request(app).get('/');
		assert.match(res.text, /<nav>/);
		assert.match(res.text, /href="#skills"/);
		assert.match(res.text, /href="#education"/);
	});

	it('renders the education section with currentStatus helper', async () => {
		const res = await request(app).get('/');
		assert.match(res.text, /Education/);
		assert.match(res.text, /American University of Phnom Penh/);
		assert.match(res.text, /In Progress/);
		assert.match(res.text, /Completed/);
	});

	it('renders the projects section with joinList helper', async () => {
		const res = await request(app).get('/');
		assert.match(res.text, /Projects/);
		assert.match(res.text, /mrvince-resume/);
		assert.match(res.text, /Express, Handlebars, CSS, Tears/);
	});

	it('renders the fun facts section with uppercase helper', async () => {
		const res = await request(app).get('/');
		assert.match(res.text, /FUN FACTS/);
		assert.match(res.text, /first try approximately 0%/);
	});

	it('renders the current year in the footer', async () => {
		const res = await request(app).get('/');
		const year = new Date().getFullYear().toString();
		assert.match(res.text, new RegExp(year));
	});

	it('returns 404 for unknown routes', async () => {
		const res = await request(app).get('/unknown-page');
		assert.strictEqual(res.status, 404);
	});
});
