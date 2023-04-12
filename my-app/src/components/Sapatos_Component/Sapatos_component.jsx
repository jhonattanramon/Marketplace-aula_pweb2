import './sapatos.css'

const Sapatos_component = (props) => {

    if( props.produtos.length === 0){

        return
    }

const setProps = props.setProps

// console.log(props);

    return(

    <div className='caixaDeSapato'>

        <div className='sapatos'>

            <img className='img' src={props.produtos.sapatos[0].imagem}alt="" />
            <p>{props.produtos.sapatos[0].nome}</p>
            <p>{props.produtos.sapatos[0].preco}</p>

    <button onClick={ () => {

        setProps( [...props.PropFavoritos, props.produtos.sapatos[0]])
    }}>Adicionar Favoritos</button>

        </div>

        <div className='sapatos'>

            <img className='img' src={props.produtos.sapatos[1].imagem}alt="" />
            <p>{props.produtos.sapatos[1].nome}</p>
            <p>{props.produtos.sapatos[1].preco}</p>

    <button onClick={ () => {

        setProps( [...props.PropFavoritos, props.produtos.sapatos[1]])
    }}>Adicionar Favoritos</button>

        </div>

        <div className='sapatos'>

            <img className='img' src={props.produtos.sapatos[2].imagem}alt="" />
            <p>{props.produtos.sapatos[2].nome}</p>
            <p>{props.produtos.sapatos[2].preco}</p>

    <button onClick={ () => {

        setProps( [...props.PropFavoritos, props.produtos.sapatos[2]])

    }}>Adicionar Favoritos</button>

        </div>



        <div className='sapatos'>

            <img className='img' src={props.produtos.sapatos[3].imagem}alt="" />

            <p>{props.produtos.sapatos[3].nome}</p>

            <p>{props.produtos.sapatos[3].preco}</p>



    <button onClick={ () => {

        setProps( [...props.PropFavoritos, props.produtos.sapatos[3]])

    }}>Adicionar Favoritos</button>

        </div>



        <div className='sapatos'>

            <img className='img' src={props.produtos.sapatos[4].imagem}alt="" />

            <p>{props.produtos.sapatos[4].nome}</p>

            <p>{props.produtos.sapatos[4].preco}</p>

            <button onClick={ () => {

                setProps( [...props.PropFavoritos, props.produtos.sapatos[4]])

                }}>Adicionar Favoritos
                
            </button>

        </div>

        <div className='sapatos'>

            <img className='img' src={props.produtos.sapatos[5].imagem}alt="" />

            <p>{props.produtos.sapatos[5].nome}</p>

            <p>{props.produtos.sapatos[5].preco}</p>

            <button onClick={ () => {

            setProps( [...props.PropFavoritos, props.produtos.sapatos[5]])

            }}>Adicionar Favoritos</button>

        </div>

            <div className='sapatos'>

                <img className='img' src={props.produtos.sapatos[7].imagem}alt="" />

                <p>{props.produtos.sapatos[7].nome}</p>

                <p>{props.produtos.sapatos[7].preco}</p>

                <button onClick={ () => {

            setProps( [...props.PropFavoritos, props.produtos.sapatos[7]])

            }}>Adicionar Favoritos</button>

            </div>



    </div>
    )
}
export default Sapatos_component