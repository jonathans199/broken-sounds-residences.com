import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Broken Sounds Residences - Boca Raton ',
	description:
		'Discover urban luxury and serenity at Broken Sounds Residences. Our meticulously designed homes, captivating amenities, and prime location create a harmonious living experience. Immerse yourself in the allure of our rooftop infinity pool, state-of-the-art fitness center, and beautifully landscaped gardens. With 24-hour concierge service and proximity to entertainment and dining, Broken Sounds Residences offers the pinnacle of urban living.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
