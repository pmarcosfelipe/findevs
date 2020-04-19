import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Usuário do GitHub</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/20467588?s=460&u=020f0006be276a09357a1df9826ae2117049ff1c&v=4"
                alt="Marcos Felipe"
              />
              <div className="user-info">
                <strong>Marcos Felipe</strong>
                <span>ReactJS, React Native, Nodejs</span>
              </div>
            </header>
            <p>coffee, focus and coding.</p>
            <a href="https://github.com/pmarcosfelipe">
              Acessar perfil no GitHub
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/20467588?s=460&u=020f0006be276a09357a1df9826ae2117049ff1c&v=4"
                alt="Marcos Felipe"
              />
              <div className="user-info">
                <strong>Marcos Felipe</strong>
                <span>ReactJS, React Native, Nodejs</span>
              </div>
            </header>
            <p>coffee, focus and coding.</p>
            <a href="https://github.com/pmarcosfelipe">
              Acessar perfil no GitHub
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/20467588?s=460&u=020f0006be276a09357a1df9826ae2117049ff1c&v=4"
                alt="Marcos Felipe"
              />
              <div className="user-info">
                <strong>Marcos Felipe</strong>
                <span>ReactJS, React Native, Nodejs</span>
              </div>
            </header>
            <p>coffee, focus and coding.</p>
            <a href="https://github.com/pmarcosfelipe">
              Acessar perfil no GitHub
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/20467588?s=460&u=020f0006be276a09357a1df9826ae2117049ff1c&v=4"
                alt="Marcos Felipe"
              />
              <div className="user-info">
                <strong>Marcos Felipe</strong>
                <span>ReactJS, React Native, Nodejs</span>
              </div>
            </header>
            <p>coffee, focus and coding.</p>
            <a href="https://github.com/pmarcosfelipe">
              Acessar perfil no GitHub
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
