import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import Home from '../pages/Home';
import PictureGallery from '../pages/PictureGallery';

export const App = () => {
  return (
    <main className='text-slate-100 bg-gradient-to-t from-slate-900 to-slate-950'>
      {/* <BrowserRouter>
        <NavBar />
          <div className='min-h-screen'>
            <div className='container overflow-x-hidden mx-auto'>
              <Routes>
                <Route path="/" element={<Home />} index />
              </Routes>
            </div>
          </div>
      </BrowserRouter> */}
    </main>
  );
}

export default App;
