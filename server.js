const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

// Configuration pour l'environnement de production sur cPanel
const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || 'localhost'
const port = process.env.PORT || 3000

// Initialisation de l'application Next.js
const app = next({
    dev,
    hostname,
    port,
    dir: process.cwd() // Assure que Next.js trouve les fichiers au bon endroit sur cPanel
})

const handle = app.getRequestHandler()

// Démarrage du serveur
app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            // Gestion des requêtes entrantes
            const parsedUrl = parse(req.url, true)

            // Déléguer toutes les requêtes à Next.js
            await handle(req, res, parsedUrl)

        } catch (err) {
            console.error('Erreur lors du traitement de la requête:', req.url, err)
            res.statusCode = 500
            res.end('Erreur interne du serveur')
        }
    })
        .once('error', (err) => {
            console.error('Erreur de démarrage du serveur:', err)
            process.exit(1)
        })
        .listen(port, hostname, () => {
            console.log(`> Serveur démarré sur http://${hostname}:${port}`)
        })
})