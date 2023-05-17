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
    ``
      <Routes>
        <Route path="/" element={<Marketplace/>}></Route>
        <Route path="jogos" element={<JogosHomeComponent/>}></Route>
        <Route path="filmes" element={<FilmesHomeComponent/>}></Route>
      </Routes>
    ``
  5. Adicionar Link nos componentes para levar a outras páginas
    <Link to="filmes">Clique para ir a página de filmes</Link>

# Recursos mais dinâmicos com rotas
  6. Parametros dinâmicos:
    Passando parâmetros pelas rotas:
    ``` jsx
      <Route path="/books/:id" element={<Book />} />
    ```

    ``` js
      const { id } = useParams()
    ```
  7. Rota default - não encontrada
    Configurando uma rota default:
    ``` jsx
      <Route path="*" element={<NotFound />} />
    ```
  8. Nested Routes
    Agrupamento de rotas:
    ``` 
App.jsx
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/filmes">
          <Route index element={<FilmesPageComponent />} />
          <Route path=":id" element={<FilmeDetalhesComponent />} />
          <Route path="new" element={<FilmeFormComponent />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    ```
  9. Layout Compartilhados
    Ex.: Criar uma área comum, por exemplo cabeçalho e/ou rodapé para diferentes componentes 
  
    ```
App.jsx
    <Routes>
      <Route path="/" element={<Marketplace />} />
      <Route path="/filmes" element={<ProdutosHomeLayout />}>
        <Route index element={<FilmesPageComponent />} />
        <Route path=":id" element={<FilmeDetalhesComponent />} />
        <Route path="new" element={<FilmeFormComponent />} />
      </Route>
      <Route element={<OtherLayout />}>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  ```

```
.js
  import { Link, Outlet } from "react-router-dom"

  export function ProdutosHomeLayout() {
    return (
      <>
        <nav>
          <ul>
            <li><Link to="/filmes">Filmes</Link></li>
            <li><Link to="/jogos">Jogos</Link></li>
            <li><Link to="/sapatos">Sapatos</Link></li>
          </ul>
        </nav>

        <Outlet />
      </>
    )
  }

```

## Extras

1. Nested Routes
Definindo novos arquivos de rotas para melhor separação de conceitos;
```
.jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/books/*" element={<BookRoutes />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

```
.JSX

  import { Routes, Route } from "react-router-dom"
  import { BookList } from "./pages/BookList"
  import { Book } from "./pages/Book"
  import { NewBook } from "./pages/NewBook"
  import { BookLayout } from "./BookLayout"

  export function BookRoutes() {
    return (
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    )
  }
```

## Manual Navigation

### useNavigation Hook

``` .JSx
  const navigate = useNavigate()

  function onSubmit() {
    // Submit form results
    navigate("/books", { replace: true, state: { bookName: "Fake Title" }})
  }
```

```
  .JS
  const {state} = useLocation();
  const { id, color } = state; // Read values passed on state
```

    

# EXTRAS 

  1. Tarefa de useState, com select
    a. Interface
        Criar componente <select> com as opções de ordenação.
        ```
            <select>
                <option value="">Ordenar por</option>
                <option value="nome">Nome</option>
                <option value="preco">Preço</option>
                <option value="avaliacao">Avaliaçâo</option>
            </select>
        ```
    b. Criar uma variavel que observa a mudança do critério de ordenação
    ``` jsx
        const [ordem, setOrdem] = useState(null);
    ```

    c. Disparar mudança para ao mudar o select, mudar o atributo de ordenação
    ```jsx
        <select onChange={(evt) => setOrdem(evt.target.value)}>
            <option value="">Ordenar por</option>
            <option value="nome">Nome</option>
            <option value="preco">Preço</option>
            <option value="avaliacao">Avaliaçâo</option>
        </select>
    ```

    d. Criar um useEffect que escuta as mudanças no ordem:
    ``` jsx
         useEffect(() => {

            console.log('ordenar ' + ordem);
           
        
        }, [ordem]);
    ```

    e. Com a nova ordem, ordenar a lista

    ``` jsx
        useEffect(() => {
            if(listaBrinquedos?.length >0){
                const listaOrdenada = listaBrinquedos.sort(function(a,b) {
                    return (a[ordem] < b[ordem]) ? -1 : (a[ordem] > b[ordem]) ? 1 : 0;
                });

                console.log(listaBrinquedos);
                setListaBrinquedos([...listaOrdenada]);
            }
        }, [ordem]);
    ```
