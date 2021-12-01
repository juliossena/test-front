import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { convertion } from '../shared/convertion';

interface PTable {
  name: string;
  lastName: string;
  age: number;
  city: string;
  valueConvertion: number;
}

interface PTableConvertion {
  rows: PTable[];
}

const TableConvertion: React.FC<PTableConvertion> = ({ rows }: PTableConvertion) => {
  const sortTable = () => {
    // eslint-disable-next-line no-console
    console.log('Fazer a lógica aqui');
  };

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Sobrenome</TableCell>
            <TableCell>Idade</TableCell>
            <TableCell>Cidade</TableCell>
            <TableCell style={{ cursor: 'pointer' }} onClick={sortTable}>
              Valor convertido
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Incluir aqui as linhas da tabela */}
          {/* Inicio exemplo de linha (apagar exemplo no final) */}
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>sobrenome</TableCell>
            <TableCell>idade</TableCell>
            <TableCell>cidade</TableCell>
            <TableCell>{convertion(56465)}</TableCell>
          </TableRow>
          {/* Termino exemplo de linha */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableConvertion;
