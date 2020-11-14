import React, { Component } from "react";
import Button from "../Button";
import Section from "../Section";
import Table from "../Table/Table";
import TableActionsHeader from "../Table/TableActionsHeader";
import Td from "../Table/Td";
import Th from "../Table/Th";
import Tr from "../Table/Tr";
import Register from "./Register";

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isRegistering: false,
            produtos: [
                {
                    id: 1,
                    data: new Date(),
                    image: '',
                    title: 'Bobina',
                    description: 'Bobina',
                    category: 'Componente Elétrico',
                    value: 60,
                },
                {
                    id: 2,
                    data: new Date(),
                    image: '',
                    title: 'Lampida',
                    description: 'Lampida',
                    category: 'Componente Elétrico',
                    value: 9.99,
                },
                {
                    id: 3,
                    data: new Date(),
                    image: '',
                    title: 'Tomada',
                    description: 'Tomada',
                    category: 'Componente Elétrico',
                    value: 8,
                },
                {
                    id: 4,
                    data: new Date(),
                    image: '',
                    title: 'Circuito',
                    description: 'Circuito',
                    category: 'Componente Elétrico',
                    value: 12,
                }
            ]
        };

        this.openRegister = this.openRegister.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    openRegister() {
        this.setState({ isRegistering: true });
    }

    handleClose() {
        this.setState({ isRegistering: false });
    }

    formatMoney(value) {
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    deleteItem(item) {
        const produtos = this.state.produtos.filter(produto => produto.id !== item.id);

        this.setState({
            ...this.state,
            produtos
        });
    }

    render() {
        return (
            <Section>
                <Register open={this.state.isRegistering} onClose={this.handleClose} />
                <TableActionsHeader>
                    <h2>Produtos</h2>
                    <Button onClick={this.openRegister}>Novo</Button>
                </TableActionsHeader>
                <Table>
                    <thead>
                        <Tr>
                            <Th>Cód.</Th>
                            <Th center>Data de Aquisição</Th>
                            <Th center>Imagem</Th>
                            <Th>Descrição</Th>
                            <Th>Categoria</Th>
                            <Th right>Valor</Th>
                            <Th right>Ações</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {this.state.produtos.length ? this.state.produtos.map(item => (
                            <Tr key={item.id}>
                                <Td>{item.id}</Td>
                                <Td center>{item.data.toLocaleDateString()}</Td>
                                <Td center>{item.image}</Td>
                                <Td>{item.title}</Td>
                                <Td>{item.category}</Td>
                                <Td right>{this.formatMoney(item.value)}</Td>
                                <Td right>
                                    <Button danger onClick={() => this.deleteItem(item)}>Excluir</Button>
                                </Td>
                            </Tr>
                        )) :
                            <Tr>
                                <Td colSpan="7" center>
                                    Nenhum registro existente!
                                </Td>
                            </Tr>
                        }
                    </tbody>
                </Table>
            </Section>
        );
    }
}

export default List;