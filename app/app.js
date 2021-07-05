import * as React from 'react';
import imgGirafe from '../static/girafe.png';
import './app.scss';

const Lazy = React.lazy(() => import('./components/SomeLazy'));

export const App = () => {
  return (
    <div>
      App js

      <img src={imgGirafe} />
      <Lazy />
    </div>
  );
}
