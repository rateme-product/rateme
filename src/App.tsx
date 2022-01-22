import { Suspense } from 'react';

import Footer from 'sections/Footer';
import Header from 'sections/Header';
import Main from 'sections/Main';

function App() {
  return (
    <Suspense fallback={<div />}>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
