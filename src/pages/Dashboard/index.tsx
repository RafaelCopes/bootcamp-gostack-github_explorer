import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Dashboard</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43898344?s=460&u=eb74357d7256c90a87aaa720761d2917b006bd6a&v=4"
            alt="Rafael Copes"
          />

          <div>
            <strong>RafaelCopes/bootcamp-gostack-github_explorer</strong>
            <p>Recursion bitch!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43898344?s=460&u=eb74357d7256c90a87aaa720761d2917b006bd6a&v=4"
            alt="Rafael Copes"
          />

          <div>
            <strong>RafaelCopes/bootcamp-gostack-github_explorer</strong>
            <p>Recursion bitch!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43898344?s=460&u=eb74357d7256c90a87aaa720761d2917b006bd6a&v=4"
            alt="Rafael Copes"
          />

          <div>
            <strong>RafaelCopes/bootcamp-gostack-github_explorer</strong>
            <p>Recursion bitch!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43898344?s=460&u=eb74357d7256c90a87aaa720761d2917b006bd6a&v=4"
            alt="Rafael Copes"
          />

          <div>
            <strong>RafaelCopes/bootcamp-gostack-github_explorer</strong>
            <p>Recursion bitch!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43898344?s=460&u=eb74357d7256c90a87aaa720761d2917b006bd6a&v=4"
            alt="Rafael Copes"
          />

          <div>
            <strong>RafaelCopes/bootcamp-gostack-github_explorer</strong>
            <p>Recursion bitch!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43898344?s=460&u=eb74357d7256c90a87aaa720761d2917b006bd6a&v=4"
            alt="Rafael Copes"
          />

          <div>
            <strong>RafaelCopes/bootcamp-gostack-github_explorer</strong>
            <p>Recursion bitch!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43898344?s=460&u=eb74357d7256c90a87aaa720761d2917b006bd6a&v=4"
            alt="Rafael Copes"
          />

          <div>
            <strong>RafaelCopes/bootcamp-gostack-github_explorer</strong>
            <p>Recursion bitch!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43898344?s=460&u=eb74357d7256c90a87aaa720761d2917b006bd6a&v=4"
            alt="Rafael Copes"
          />

          <div>
            <strong>RafaelCopes/bootcamp-gostack-github_explorer</strong>
            <p>Recursion bitch!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
