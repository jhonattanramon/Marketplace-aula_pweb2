# Roteiro

## 1. CRIAR PROJETO - npx create-react-app
## 2. Criar componentes
## 3. Passar parametros via props
## 4. Passar funçoes como parametros

# 5. Hook - React useState
1. Usar chatgpt para pesquisar OU QUALQUER FONTE A SEU CRITÉRIO(* incluindo zap e vozes da sua cabeça)
2. Criar variável em cada componente usando useState
    ```
        const [contagem, setContagem] = useState(0);
    ```
3. Exibir a variável no return:
    ```
        <label>{contagem}</label>
    ```
4. Na funçâo que trata o click do adicionar, incrementar a variável contagem com:
    * Criar função handleAddFavorito(produto)
    ```
        const handleAddFavorito = () => {
             setContagem(contagem++);
        }
      
    ```
# 6. Hook - React useEffect * 

### Usando a api:

    * (LINK DA API PRODUTOS)[https://dummyjson.com/docs/products]

#### Primeira parte - Carregar os produtos uma vez no componente

1. Criar um _useEffect_ dentro do seu compomente que faz um fecth para a api acima, listando a sua categoria. Por exemplo, 

[https://dummyjson.com/products/category/womens-shoes](https://dummyjson.com/products/category/womens-shoes)

** Caso não tenha a sua categoria, utilize uma categoria próxima a seu critério. Ou ainda, busque uma caso julgue necessário.**

2. Realize no array um _map_ para transformar o resultado no formato adequado. Assim como é feito na classe PAI(Marketplace).

3. Coloque o resultado dos produtos numa variável e exiba na lista abaixo da lista anterior;

#### Segunda parte - Atualizar a ordenação via menu select

1. Criar um SELECT com as opções de ordenação de produto, mais estoque, menor preço, maior preço, mais bem avaliados

2. Na alteração do select, alterar o valor de uma variável controlado por useState;

3. Criar um useEffect que escuta essa variável, e faz uma reordenação do array, e o atualiza usando seu set do useState;


## 7. Rotas - React-Router
### 7.1 Instalação
  
1. [LINK TUTORIAL](https://www.freecodecamp.org/news/how-to-use-react-router-version-6/)

2.Instalar react-router-dom v6 
```
      npm install react-router-dom 
```

3. Config index.js
```
  <BrowserRouter>
    <App />
  </BrowserRouter>
```
### 7.2 Criar
4. Criar componentes que serão páginas únicas
    * FilmesHome
    * JogosHome
  
5. Definir rotas no App.js
```
  <Routes>
    <Route path="/" element={<Marketplace/>}></Route>
    <Route path="jogos" element={<JogosHomeComponent/>}></Route>
    <Route path="filmes" element={<FilmesHomeComponent/>}></Route>
  </Routes>
```
6. Adicionar Link nos componentes para levar a outras páginas
```
    <Link to="filmes">Clique para ir a página de filmes</Link>
```

### 7.3 Rota dinâmicos - Enviando parâmetros:
  
1. Parametros dinâmicos:
Passando parâmetros pelas rotas:
App.jsx
``` 
  <Route path="/books/:id" element={<Book />} />
```

No seu componente, recuperar o parâmetro
Ler o parâmetro no código, também criando a variável que armazenará o produto:
Ex.: ProdutoInformaticaPage.jsx
```
  const { id } = useParams();
  const { produto, setProduto } = useState(null);
```

Uma vez estadando com parâmetro, fazer um _useEffect_ para realizar a consulta na API externa, e recuperar um produto específico:
```
    useEffect(() => {
        const loadProduto = async () => {
            const result = await fetch(`https://dummyjson.com/products/${id}`);
            const p = await result.json();
            
            setProduto({
                id: p.id,
                nome: p.name,
                preco: p.price,
                avaliacao: p.rating,
                estoque: p.stock
            });
        }
        if(id)
            loadProduto();
    }, [id]);
```

Uma vez declarada as variáveis, e o useEffect definido, você pode montar o retorno
```
    return (
        <div>{produto.nome}</div>
    )
```
    
### 7.4 Rota default - não encontrada
Configurando uma rota default:
App.jsx
```
  <Route path="*" element={<NotFound />} />
```
    
8. Nested Routes
Agrupamento de rotas:
App.jsx
``` 
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

### 7.5 Layout Compartilhados

Ex.: Criar uma área comum, por exemplo cabeçalho e/ou rodapé para diferentes componentes 
App.jsx
```
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
Na definição do componente template abaixo, a navegação dos componentes definidos na rotas ficará dentro do <Outlet />, o conteúdo de navegação será mantido.

ProdutuHomeComponent.js
```
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

### 7.6 Nested Routes
Definindo novos arquivos de rotas para melhor separação de conceitos;
Dessa forma, os arquivos de rotas ficam menores;
```
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/books/*" element={<BookRoutes />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

```
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

## Navegação manual das rotas

### useNavigate Hook
Em um componente qualquer que inicia a navegação, usando o hook e disparando via **navigate('ROTA','PARAMETROS')**. 
Observe o uso do state. A ação de navegar poderia estar um qualquer método handle de onPress, onClick;
```
  const navigate = useNavigate()

  function onSubmit() {
    // Submit form results
    navigate("/books", { replace: true, state: { bookName: "Fake Title" }})
  }
```
Já no componente de Page que recebe, para recuperar as informações passando no **state**(body):
```
  const {state} = useLocation();
  const { id, color } = state; // Read values passed on state
```

# EXTRAS - Tarefa de usar select/ordenar por 
## Tarefa de useState, com select
### Layout/HTML/JSX

1. Criar componente html que vai ser usado
```
<select>
    <option value="">Ordenar por</option>
    <option value="nome">Nome</option>
    <option value="preco">Preço</option>
    <option value="avaliacao">Avaliaçâo</option>
</select>
```

2. Criar variável que observa a mudança de ordenação:
```
const [ordem, setOrdem] = useState(null);
```

3. Disparar mudança ao selecionar um novo método de ordenação, alterando o **setOrdem**:
```
 <select onChange={(evt) => setOrdem(evt.target.value)}>
    <option value="">Ordenar por</option>
    <option value="nome">Nome</option>
    <option value="preco">Preço</option>
    <option value="avaliacao">Avaliaçâo</option>
</select>
```

4. Criar um useEffect que escuta as mudanças no ordem:
```
useEffect(() => {
    console.log('ordenar ' + ordem);
}, [ordem]);
```

5. Com a nova ordem, ordenar a lista:
```
useEffect(() => {
    if(listaProdutos?.length >0){
        const listaOrdenada = listaProdutos.sort(function(a,b) {
            return (a[ordem] < b[ordem]) ? -1 : (a[ordem] > b[ordem]) ? 1 : 0;
        });

        setListaBrinquedos([...listaOrdenada]);
    }
}, [ordem]);
```
