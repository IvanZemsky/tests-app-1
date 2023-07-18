import './App.css';
import { useState } from 'react'
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Tests from './pages/Tests/Tests';
import Test from './pages/Test/Test';
import Create from './pages/Create/Create';
import TestClass from './assets/TestClass';
import { getTests } from './utils/storage';

function App() {

	/*
	const fakeTest = new TestClass();
	fakeTest.addTestInfo('testname', 'testdesc')
	*/

	const tests = getTests();

	const [testsList, setTestsList] = useState(tests);

	const { testNumber } = useParams();

	return (
		<div className="App">
			<BrowserRouter>

				<Header />

				<Routes>
					<Route path="/" element={<Tests testsList={testsList} />} />
					<Route path="create" element={
						<Create
							testsList={testsList}
							setTestsList={setTestsList}
						/>
					} />
					<Route path="test/:testNumber" element={
						<Test testsList={testsList} />
					} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
