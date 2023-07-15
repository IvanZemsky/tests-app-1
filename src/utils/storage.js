function updateTests(tests) {
  console.log('Updating tests');
  return localStorage.setItem('tests', JSON.stringify(tests));
}

function getTests() {
  console.log('Getting tests');
  const tests = localStorage.getItem('tests');
  return JSON.parse(tests);
}

export {
  updateTests,
  getTests
}
