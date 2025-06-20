import { Routes, Route } from 'react-router-dom'

import Dashboard from '@/pages/Dashboard'

function App() {
	return (
		<Routes>
			<Route index element={<Dashboard />} />
		</Routes>
	)
}

export default App
