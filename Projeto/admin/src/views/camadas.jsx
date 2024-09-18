import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Usuarios = () => {

  const [Camadas, setCamadas] = useState()
  const [NewCamada, setNewCamada] = useState(false)
  const [DelearCamada, setDelearCamada] = useState(false)
  const [formatoInvalido, setformatoInvalido] = useState(false)



  let camadas = [
    {
      id        : 1,
      nome      : 'IBJE - estado',
      origem    : 'IBJE',
      data      : '05/09/2024',
      registros : 27,
      status    : 1
    }
  ]

  async function loadCamadas(){
    const [error, response] = await fetch('http://localhost:3333/usuarios/listar')
    console.log(error)
    console.log(await response.json())
    setCamadas(await response.json())
  }

  async function validaCampo(tipo, valor){

      let ext = valor.split('.')
      if(tipo != ext){
        setNewCamada(false)
        setformatoInvalido(true)
      }

  }


  async function salvarNovaCamada(){
    setNewCamada(false)

  }
  async function excluirCamada(){
    setDelearCamada(false)
  }


  useEffect(() => {
    loadCamadas()
    
  }, []);

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Row>
                <Col xs={10}>
                  <Card.Title as="h5">Camadas cadastrados</Card.Title>
                </Col>
                <Col xs={2}>
                  <Button onClick={() => setNewCamada(true)}>Nova camada</Button>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Origem</th>
                    <th>Data</th>
                    <th>Registros</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {Camadas.length <= 0 ? (<></>) : Camadas.map((e) => {
                    return (
                      <tr>
                        <th scope="row">{e.id}</th>
                        <td>{e.nome}</td>
                        <td>{e.origem}</td>
                        <td>{e.data}</td>
                        <td>{e.registros}</td>
                        <td>
                          {e.status == 1 ? (
                            <Link to="#" className="label theme-bg text-white f-12"> Ativo </Link>
                          ) : (
                            <Link to="#" className="label theme-bg2 text-white f-12"> Inativo </Link>
                          )}
                        </td>
                        <td>
                          <Link to="#" title='Editar usuário' > <i className="feather icon-edit f-20 text-c-green" /> </Link>
                          <Link to="#" title='Bloquear usuário' > <i className="feather icon-lock f-20 text-c-yellow" /> </Link>
                          <Link to="#" title='Deletar usuário' onClick={() => setDelearCamada(true)} > <i className="feather icon-x f-20 text-c-red" /> </Link>
                        </td>
                      </tr>
                    )
                  }) }
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Modal show={DelearCamada} size="lg" >
          <Modal.Header closeButton onClick={() => setDelearCamada(false)}>
            <Modal.Title>Tem certeza que deseja excluir essa camada?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setDelearCamada(false)}>Cancelar</Button>
            <Button variant="danger" onClick={() => excluirCamada()}>Excluir</Button>
          </Modal.Footer>
      </Modal>

      <Modal show={formatoInvalido} size="lg" >
          <Modal.Header closeButton onClick={() => setformatoInvalido(false)}>
            <Modal.Title>O formato do arquivo é inválido!</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <h5>Envie um arquivo com o formato correto para esse campo!</h5>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setformatoInvalido()}>Entendi</Button>
          </Modal.Footer>
      </Modal>




      <Modal show={NewCamada} size="lg" >
          <Modal.Header closeButton onClick={() => setNewCamada(false)}>
            <Modal.Title>Adicionar uma nova camada</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="inputPassword5">Arquivo no formato .shp</Form.Label>
              <Form.Control type="file" onChange={(e) => validaCampo('.shp', e.target.value)} />
            </Form.Group>
          
            <Form.Group className="mb-3">
              <Form.Label htmlFor="inputPassword5">Arquivo no formato .dbf</Form.Label>
              <Form.Control type="file" onChange={(e) => validaCampo('.dbf', e.target.value)} />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setNewCamada(false)}>Cancelar</Button>
            <Button variant="primary" onClick={() => salvarNovaCamada()}>Salvar</Button>
          </Modal.Footer>
      </Modal>

    </React.Fragment>
  );
};

export default Usuarios;
