import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tests from './pages/Tests/Tests';
import Create from './pages/Create/Create';
import Test from './pages/Test/Test';
import TestClass from './assets/TestClass';

function App() {

	/*
	const test1 = new TestClass();
	console.log(test1)
	test1.addTestInfo('Кто ты из jojo', 'описание описание описание');
	test1.addResults('Кира Йошикаге');
	test1.addResults('Джоске');
	test1.addQuestion('Сколько вам лет?', null, null);
	test1.addAnswer('Сколько вам лет?', '18', 'Кира Йошикаге', 3);
	test1.addAnswer('Сколько вам лет?', '21', 'Кира Йошикаге', 1);
	test1.addAnswer('Сколько вам лет?', '19', 'Джоске', 1);
	test1.addQuestion('Ваш пол?', null, null);
	test1.addAnswer('Ваш пол?', 'Мужской', 'Кира Йошикаге', 2);
	test1.addAnswer('Ваш пол?', 'Мужской', 'Джоске', 1);
	console.log(test1);
	*/

	return (
		<div className="App">
			<BrowserRouter>

				<Header />

				<Routes>
					<Route path="/" element={<Tests />} />
					<Route path="/create" element={<Create />} />
					<Route path="/test" element={<Test/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
