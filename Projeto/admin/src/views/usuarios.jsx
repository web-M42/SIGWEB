import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Usuarios = () => {

  const [Mnew, setMnew] = useState(false)
  const [user,setUser] = useState({ nome : '', email : '', senha : '', cidade : '', tipoParceiro : '', instituicao : '', estado : '', sexo : '' })

  const [DUser, setDeleteUser] = useState(false)
  const [userId, setuserId] = useState()
  const [userList, setuserList] = useState([])
  

  async function loadusers(){

    let dados = await fetch('http://localhost:3333/usuarios/listar')
    setuserList(await dados.json())

  }

  function salvarUsuario(){
    console.log(user)
  }


  function excluirUsuario(userId){
    console.log(userId)
    setDeleteUser(false)
  }

  async function editarUser(id){

    await fetch('http://localhost:3333/usuarios/view/'+id)
    .then(async (e) => {

      //console.log(await e.json())

      let dados = await e.json()

      console.log(dados)

      console.log('Nome -> '+dados[0][1])

      setUser({
        nome : dados[0][1],
        email : dados[0][2],
        senha : '',
        cidade : dados[0][5],
        tipoParceiro : dados[0][6],
        instituicao : dados[0][4],
        estado : dados[0][12],
        sexo : dados[0][8]
      })
  
      setMnew(true) 

    })
    .catch(() => {

    })
    
  }


  async function bloquearUser(id){
    let dados = await fetch('http://localhost:3333/usuarios/bloquear/'+id, { method: 'PUT' })

    loadusers()
  }
  
  

  useEffect(() => {
    loadusers()
    
  }, []);


  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Header>
            <Row>
              <Col xs={10}>
                <Card.Title as="h3">Usuários cadastrados</Card.Title>
              </Col>
              <Col xs={2}>
                <Button onClick={() => setMnew(true)}>Novo usuário</Button>
              </Col>
            </Row>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Instituição</th>
                    <th>Estado</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {userList.length <= 0 ? (<>
                    <tr><td colSpan={12}>Nenhum usuário encontrado</td></tr>
                  </>) : userList.map((e) => {
                    return (
                      e[10] == '3' ? null : (
                      <>
                        <tr>
                          <th scope="row">{e[0]}</th>
                          <td>{e[1]}</td>
                          <td>{e[2]}</td>
                          <td>{e[4]}</td>
                          <td>{e[5]}</td>
                          <td>
                            { e[10] == '1' || e[10] == 'status1' ? (<>
                              <Link to="#" className="label theme-bg text-white f-12">Ativo</Link>
                            </>) : (<>
                              <Link to="#" className="label theme-bg2 text-white f-12">Inativo</Link>
                            </>)  }
                          </td>
                          <td>
                            <Link to="#" title='Editar usuário' onClick={() => editarUser(e[0]) } > <i className="feather icon-edit f-20 text-c-green" /> </Link>
                            <Link to="#" title='Bloquear usuário' onClick={() => bloquearUser(e[0]) } > <i className="feather icon-lock f-20 text-c-yellow" /> </Link>
                            <Link to="#" title='Deletar usuário' onClick={() => { setDeleteUser(true); setuserId(e[0]) }}> <i className="feather icon-x f-20 text-c-red" /> </Link>
                          </td>
                        </tr>
                      </>
                    ))
                  })}
                  
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Modal show={Mnew} size="lg" >
          <Modal.Header closeButton onClick={() => setMnew(false)}>
            <Modal.Title>Cadastrar novo usuário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Informe o nome do usuário" onChange={(e) => { setUser({...user, nome : e.target.value}) }} value={user.nome} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="text" placeholder="Informe o nome do usuário" onChange={(e) => { setUser({...user, email : e.target.value}) }} value={user.email} />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Informe o nome do usuário" onChange={(e) => { setUser({...user, senha : e.target.value}) }} value={user.senha} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Cidade</Form.Label>
                <Form.Control type="text" placeholder="Informe o nome do usuário" onChange={(e) => { setUser({...user, cidade : e.target.value}) }} value={user.cidade} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Tipo de parceiro</Form.Label>
                <Form.Select onChange={(e) => { setUser({...user, tipoParceiro : e.target.value}) }} value={user.tipoParceiro}>
                  <option value="--">Selecione</option>
                  <option value="U">Usuário</option>
                  <option value="P">Proprietário</option>
                  <option value="E">Empresário</option>
                </Form.Select>  
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Instituição</Form.Label>
                <Form.Control type="text" placeholder="Informe o nome do usuário" onChange={(e) => { setUser({...user, instituicao : e.target.value}) }} value={user.instituicao} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Estado</Form.Label>
                <Form.Select onChange={(e) => { setUser({...user, estado : e.target.value}) }} value={user.estado}>
                  <option value="--">Selecione</option>
                  <option value="AC">AC - Acre</option>
                  <option value="AL">AL - Alagoas</option>
                  <option value="AP">AP - Amapá</option>
                  <option value="AM">AM - Amazonas</option>
                  <option value="BA">BA - Bahia</option>
                  <option value="CE">CE - Ceará</option>
                  <option value="ES">ES - Espírito Santo</option>
                  <option value="GO">GO - Goiás</option>
                  <option value="MA">MA - Maranhão</option>
                  <option value="MT">MT - Mato Grosso</option>
                  <option value="MS">MS - Mato Grosso do Sul</option>
                  <option value="MG">MG - Minas Gerais</option>
                  <option value="PA">PA - Pará</option>
                  <option value="PB">PB - Paraíba</option>
                  <option value="PR">PR - Paraná</option>
                  <option value="PE">PE - Pernambuco</option>
                  <option value="PI">PI - Piauí</option>
                  <option value="RJ">RJ - Rio de Janeiro</option>
                  <option value="RN">RN - Rio Grande do Norte</option>
                  <option value="RS">RS - Rio Grande do Sul</option>
                  <option value="RO">RO - Rondônia</option>
                  <option value="RR">RR - Roraima</option>
                  <option value="SC">SC - Santa Catarina</option>
                  <option value="SP">SP - São Paulo</option>
                  <option value="SE">SE - Sergipe</option>
                  <option value="TO">TO - Tocantins</option>
                  <option value="DF">DF - Distrito Federal</option>
                </Form.Select>  
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Sexo</Form.Label>
                <Form.Select onChange={(e) => { setUser({...user, sexo : e.target.value}) }} value={user.sexo}>
                  <option value="--">Selecione</option>
                  <option value="F">Feminino</option>
                  <option value="M">Masculino</option>
                  <option value="O">Outro</option>
                </Form.Select>  
              </Form.Group>
            </Col>
          </Row>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setMnew(false)}>Cancelar</Button>
            <Button variant="primary" onClick={() => salvarUsuario()}>Salvar</Button>
          </Modal.Footer>
      </Modal>




      <Modal show={DUser} size="lg" >
          <Modal.Header closeButton onClick={() => setDeleteUser(false)}>
            <Modal.Title>Tem certeza que deseja excluir esse usuário?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setDeleteUser(false)}>Cancelar</Button>
            <Button variant="danger" onClick={() => excluirUsuario(userId)}>Excluir</Button>
          </Modal.Footer>
      </Modal>


    </>
  );
};

export default Usuarios;
