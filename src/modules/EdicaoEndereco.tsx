import React, { useState } from 'react';

interface Endereco {
  nome: string;
  endereco: string;
  telefone: string;
}

const EdicaoEndereco: React.FC = () => {
  const [endereco, setEndereco] = useState<Endereco>({
    nome: '',
    endereco: '',
    telefone: '',
  });

  const handleEdicao = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados editados:', endereco);
  };

  return (
    <div>
    <form onSubmit={handleEdicao} className='p-2'>
    <div className="space-y-2">
      <div className="border-b border-gray-900/10 pb-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              First Name 
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                defaultValue="Ryan"
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Last Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                defaultValue="Figueredo"
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                defaultValue="ryan.figueredo059@gmail.com"
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
              Street Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                defaultValue="Rua da Boa Sorte"
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="lote" className="block text-sm font-medium leading-6 text-gray-900">
              Your Batch
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="lote"
                id="lote"
                autoComplete="off"
                defaultValue="2600"
                maxLength={4}
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-6 space-y-10">
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">Before proceeding with your order, please accept our terms.</legend>
            <div className="mt-6 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm">
                  <label htmlFor="comments" className="font-medium text-gray-900">
                    I accept the terms of services
                  </label>
                  <p className="text-gray-500">Click here and read the terms.</p>
                </div>
              </div>
            
             
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </form>
  </div>
  );
};

export default EdicaoEndereco;
