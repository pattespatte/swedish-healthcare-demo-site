import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Define page titles for all routes
const pageTitles = {
	'/': 'Vårdcentralen Vårdportalen - Start',
	'/om-oss': 'Om Oss - Vårdcentralen Vårdportalen',
	'/om-oss/jobba-hos-oss': 'Jobba Hos Oss - Vårdcentralen Vårdportalen',
	'/om-oss/lediga-tjanster': 'Lediga Tjänster - Vårdcentralen Vårdportalen',
	'/om-oss/formaner': 'Formaner - Vårdcentralen Vårdportalen',
	'/om-oss/karriarvagar': 'Karriär - Vårdcentralen Vårdportalen',
	'/tjanster': 'Tjänster - Vårdcentralen Vårdportalen',
	'/tjanster/specialistmottagningar': 'Specialistmottagningar - Vårdcentralen Vårdportalen',
	'/tjanster/labbprov': 'Labbprov - Vårdcentralen Vårdportalen',
	'/tjanster/hemsjukvard': 'Hemsjukvård - Vårdcentralen Vårdportalen',
	'/kontakt': 'Kontakt - Vårdcentralen Vårdportalen',
	'/fragor-och-svar': 'FAQ - Vårdcentralen Vårdportalen',
	'/vardguide': 'Vårdguide - Vårdcentralen Vårdportalen',
	'/boka-tid': 'Boka Tid - Vårdcentralen Vårdportalen',
	'/mina-sidor': 'Mina Sidor - Vårdcentralen Vårdportalen',
	'/tillganglighet': 'Tillgänglighet - Vårdcentralen Vårdportalen',
	'/mottagningar': 'Mottagningar - Vårdcentralen Vårdportalen',
	'/patientinformation': 'Patientinformation - Vårdcentralen Vårdportalen',
	'/patientinformation/vardgaranti': 'Vårdgaranti - Vårdcentralen Vårdportalen',
	'/patientinformation/avgifter': 'Avgifter - Vårdcentralen Vårdportalen',
	'/patientinformation/din-vardkontakt': 'Din Vårdkontakt - Vårdcentralen Vårdportalen',
	'/integritetspolicy': 'Integritetspolicy - Vårdcentralen Vårdportalen',
	'/cookies': 'Cookies - Vårdcentralen Vårdportalen',
	'/components': 'Komponenter - Vårdcentralen Vårdportalen',
	'/colors': 'Färger - Vårdcentralen Vårdportalen'
}

// Function to update title in HTML file
function updateTitle(filePath, title) {
	if (!fs.existsSync(filePath)) {
		console.log(`File not found: ${filePath}`)
		return
	}

	const content = fs.readFileSync(filePath, 'utf-8')
	const updatedContent = content.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
	fs.writeFileSync(filePath, updatedContent)
	console.log(`Updated title in: ${filePath}`)
}

// Get all HTML files in dist directory
function updateAllTitles() {
	const distDir = path.join(__dirname, 'dist')

	// Update index.html (root path)
	updateTitle(path.join(distDir, 'index.html'), pageTitles['/'])

	// Update other HTML files
	for (const [route, title] of Object.entries(pageTitles)) {
		if (route === '/') continue

		// Convert route to file path
		let filePath
		if (route.endsWith('/')) {
			filePath = path.join(distDir, route.slice(1), 'index.html')
		} else {
			filePath = path.join(distDir, `${route.slice(1)}.html`)
		}

		updateTitle(filePath, title)
	}
}

updateAllTitles()
console.log('Title update completed!')