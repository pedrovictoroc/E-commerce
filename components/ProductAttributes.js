import {Header, Divider, Table} from 'semantic-ui-react'

//podemos criar na aba de flows propriedades para os produtos
//basta adicionar aqui o nome da propriedade e criar uma table
//Conferir a parte 3 do curso em caso de duvida 
export default ({
    description,
}) => (
    <React.Fragment>
        <Header as='h3'>
            Sobre o produto
        </Header>
        <p>
            {description}
        </p>
    </React.Fragment>
)