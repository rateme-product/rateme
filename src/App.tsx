import { Suspense } from 'react';
import { createUseStyles } from 'react-jss';

import Footer from 'sections/Footer';
import Header from 'sections/Header';
import Main from 'sections/Main';

const useStyles = createUseStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
  },
});

function App() {
  useStyles();
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
