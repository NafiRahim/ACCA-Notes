import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';

const app = express();
const port = 3000;

// db.json file path
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json')

// Configure lowdb to write to JSONFile
const adapter = new JSONFile(file)
const defaultData = { users: [] }
const db = new Low(adapter, defaultData)

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'mysecretkey', // In a real app, use an environment variable
    resave: false,
    saveUninitialized: true
}));

const subjects = [
    { id: 'ias2', name: 'IAS 2 - Inventories', link: 'Financial Reporting Notes/IAS 2 - Inventories.html' },
    { id: 'ias10', name: 'IAS 10 - Event After Reporting Date', link: 'Financial Reporting Notes/IAS 10 - Event After Reporting Date.html' },
    { id: 'ias16', name: 'IAS 16 - PPE', link: 'Financial Reporting Notes/IAS 16 - PPE.html' },
    { id: 'ias20', name: 'IAS 20 - Government Grants', link: 'Financial Reporting Notes/IAS 20 - Government Grants.html' },
    { id: 'ias23', name: 'IAS 23 - Borrowing Cost', link: 'Financial Reporting Notes/IAS 23 - Borrowing Cost.html' },
    { id: 'ias37', name: 'IAS 37 - Provision , Contingent Asstes and Liability', link: 'Financial Reporting Notes/IAS 37 - Provision , Contingent Asstes and Liability.html' },
    { id: 'ias36', name: 'IAS 36 - Impairment', link: 'Financial Reporting Notes/IAS 36 - Impairment.html' },
    { id: 'ias38', name: 'IAS 38 - Intangible Assets', link: 'Financial Reporting Notes/IAS 38 - Intangible Assets.html' },
    { id: 'ias40', name: 'IAS 40 - Investment', link: 'Financial Reporting Notes/IAS 40 - Investment.html' },
    { id: 'ias41', name: 'IAS 41 - Agriculture', link: 'Financial Reporting Notes/IAS 41 - Agriculture.html' },
    { id: 'ias33', name: 'IAS 33 - EPS', link: 'Financial Reporting Notes/IAS 33 - EPS.html' },
    { id: 'bizcombo', name: 'Business Combination', link: 'Financial Reporting Notes/Business Combination.html' }
];

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'ACCA Notes', user: req.session.user, subjects: subjects });
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', async (req, res) => {
    try {
        await db.read()
        const { username, password } = req.body;
        const existingUser = db.data.users.find(user => user.username === username);

        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { id: Date.now().toString(), username, password: hashedPassword, progress: [] };
        db.data.users.push(newUser);
        await db.write();

        req.session.user = newUser;
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating user');
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    try {
        await db.read()
        const { username, password } = req.body;
        const user = db.data.users.find(u => u.username === username);

        if (user && await bcrypt.compare(password, user.password)) {
            req.session.user = user;
            res.redirect('/');
        } else {
            res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error logging in');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.post('/progress', async (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('You must be logged in to update your progress.');
    }

    try {
        await db.read();
        const user = db.data.users.find(u => u.id === req.session.user.id);
        if (user) {
            user.progress = req.body['progress[]'] || [];
            await db.write();
            req.session.user = user; // Update session user
        }
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error updating progress');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});