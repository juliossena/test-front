import React from 'react';
import Table from './table/Table';

const rows = [
  {
    name: 'Miguel',
    lastName: 'Silva',
    age: 12,
    city: 'São Paulo',
    valueConvertion: 5432,
  },
  {
    name: 'Arthur',
    lastName: 'Santos',
    age: 56,
    city: 'Rio de Janeiro',
    valueConvertion: 156,
  },
  {
    name: 'Heitor',
    lastName: 'Oliveira',
    age: 86,
    city: 'Salvador',
    valueConvertion: 98519,
  },
  {
    name: 'Helena',
    lastName: 'Souza',
    age: 43,
    city: 'Belo Horizonte',
    valueConvertion: 415,
  },
  {
    name: 'Alice',
    lastName: 'Rodrigues',
    age: 35,
    city: 'Fortaleza',
    valueConvertion: 98491,
  },
  {
    name: 'Theo',
    lastName: 'Ferreira',
    age: 21,
    city: 'Curitiba',
    valueConvertion: 6516,
  },
  {
    name: 'Davi',
    lastName: 'Alves',
    age: 7,
    city: 'Manaus',
    valueConvertion: 12,
  },
  {
    name: 'Laura',
    lastName: 'Pereira',
    age: 39,
    city: 'Porto alegre',
    valueConvertion: 9,
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <Table rows={[]} />
      </main>
    </div>
  );
};

export default App;
