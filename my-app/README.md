# Roteiro

1. CRIAR PROJETO - npx create-react-app
2. Criar componentes
3. Passar parametros via props
4. Passar funçoes como parametros

5. Hook - React useState
    5.0 Usar chatgpt para pesquisar OU QUALQUER FONTE A SEU CRITÉRIO(* incluindo zap e vozes da sua cabeça)
    5.1 Criar variável em cada componente usando useState
        ```
            const [contagem, setContagem] = useState(0);
        ```
    5.2 Exibir a variável no return:
        ```
            <label>{contagem}</label>
        ```
    5.3 Na função que trata o click do adicionar, incrementar a variável contagem com:
        ```
            setContagem(contagem++);
        ```
6. Hook - React useEffect *

7. Rotas - React-Router
  
  https://www.freecodecamp.org/news/how-to-use-react-router-version-6/

  1. Instalar react-router-dom v6
    ```
      npm install react-router-dom 
    ```
  2. Config index.js
    ```
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ```
  3. Criar componentes que serão páginas únicas
    FilmesHome
    JogosHome
  
  4. Definir rotas no App.js
    ```
      <Routes>
        <Route path="/" element={<Marketplace/>}></Route>
        <Route path="jogos" element={<JogosHomeComponent/>}></Route>
        <Route path="filmes" element={<FilmesHomeComponent/>}></Route>
      </Routes>
    ```
  5. Adicionar Link nos componentes para levar a outras páginas
    <Link to="filmes">Clique para ir a página de filmes</Link>