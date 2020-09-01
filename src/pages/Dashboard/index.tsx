import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Form, Repositories, Title } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/29241472?s=460&u=1f7adc75ce252f58f35f83f7fabbd9047cdd2a00&v=4"
            alt="Ian Mesquita"
          />
          <div>
            <strong>ianbmesquita</strong>
            <p>Desenvolvedor Web desde 2015.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/29241472?s=460&u=1f7adc75ce252f58f35f83f7fabbd9047cdd2a00&v=4"
            alt="Ian Mesquita"
          />
          <div>
            <strong>ianbmesquita</strong>
            <p>Desenvolvedor Web desde 2015.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/29241472?s=460&u=1f7adc75ce252f58f35f83f7fabbd9047cdd2a00&v=4"
            alt="Ian Mesquita"
          />
          <div>
            <strong>ianbmesquita</strong>
            <p>Desenvolvedor Web desde 2015.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
