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
    5.3 Na funçâo que trata o click do adicionar, incrementar a variável contagem com:
        * Criar funçâo handleAddFavorito(produto)
        ```
            setContagem(contagem++);
        ```
6. Hook - React useEffect * 

    Usando a api:

    https://dummyjson.com/docs/products

    ------Primeira parte-----

    6.1 Criar um useEffect dentro do seu compomente que faz um fecth para a api acima, listando a sua categoria. Por exemplo, 

    https://dummyjson.com/products/category/womens-shoes

    * Caso não tenha a sua categoria, utilize uma categoria próxima a seu critério. Ou ainda, busque uma caso julgue necessário.

    6.2 Realize um map para transformar o resultado no formato adequado. Assim como é feito na classe PAI(Marketplace).

    6.3 Coloque o resultado dos produtos numa variável e exiba na lista abaixo da lista anterior;

    ------ Segunda parte ------
    
    6.1 Criar um SELECT com as opções de ordenação de produto, mais estoque, menor preço, maior preço, mais bem avaliados

    6.2 Na alteração do select, alterar o valor de uma variável controlado por useState;

    6.3 Criar um useEffect que escuta essa variável, e faz uma reordenação do array, e o atualiza usando seu set do useState;


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
