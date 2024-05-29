import React, { useState } from 'react';
import './index.css';
import Cadastro from './modules/Cadastro';
import EdicaoEndereco from './modules/EdicaoEndereco';

function App() {
  const [pagina, setPagina] = useState<'cadastro' | 'edicao'>('cadastro');

  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="md:w-3/5">
        <div className="p-6">
          <div className="flex items-center">
            <img className="h-10 w-10" src="./food.svg" alt="" />
            <h1 className="text-3xl font-bold">Address</h1>
          </div>
          <p className="text-sm">Register the address you want to receive your food</p>
        </div>
        <main>
          {pagina === 'cadastro' ? <Cadastro /> : <EdicaoEndereco />}
        </main>
        <nav className="p-6 flex items-center justify-end gap-x-6">
          <button className="text-sm font-semibold leading-6 text-gray-900" onClick={() => setPagina('edicao')}>Edit</button>
          <button className="rounded-md text-white font-bold py-2 px-3 rounded transition ease-in-out bg-red-500 hover:bg-red-900 duration-200" onClick={() => setPagina('cadastro')}>Save</button>
        </nav>
      </div>

      <div className="md:w-2/5 bg-cover bg-no-repeat bg-right-bottom">
        <img className="w-full h-full object-cover" src="./businessImage.jpg" alt="Background" />
      </div>
    </div>
  );
}

export default App;
