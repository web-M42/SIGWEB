import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Proprietarios = () => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Usuários cadastrados</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>CPF</th>
                    <th>Estado</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Marcos</td>
                    <td>marcos@teste</td>
                    <td>123.456.789-90</td>
                    <td>Acre</td>
                    <td> <Link to="#" className="label theme-bg text-white f-12"> Ativo </Link></td>
                    <td>
                      <Link to="#" title='Editar usuário' > <i className="feather icon-edit f-20 text-c-green" /> </Link>
                      <Link to="#" title='Bloquear usuário' > <i className="feather icon-lock f-20 text-c-yellow" /> </Link>
                      <Link to="#" title='Deletar usuário' > <i className="feather icon-x f-20 text-c-red" /> </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Henrique</td>
                    <td>henrique@teste</td>
                    <td>123.456.789-90</td>
                    <td>São Paulo</td>
                    <td><Link to="#" className="label theme-bg text-white f-12">Ativo</Link></td>
                    <td>
                      <Link to="#" title='Editar usuário' > <i className="feather icon-edit f-20 text-c-green" /> </Link>
                      <Link to="#" title='Bloquear usuário' > <i className="feather icon-lock f-20 text-c-yellow" /> </Link>
                      <Link to="#" title='Deletar usuário' > <i className="feather icon-x f-20 text-c-red" /> </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Leandro</td>
                    <td>leandro@teste</td>
                    <td>123.456.789-90</td>
                    <td>Minas gerais</td>
                    <td><Link to="#" className="label theme-bg text-white f-12">Ativo</Link></td>
                    <td>
                      <Link to="#" title='Editar usuário' > <i className="feather icon-edit f-20 text-c-green" /> </Link>
                      <Link to="#" title='Bloquear usuário' > <i className="feather icon-lock f-20 text-c-yellow" /> </Link>
                      <Link to="#" title='Deletar usuário' > <i className="feather icon-x f-20 text-c-red" /> </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Proprietarios;
