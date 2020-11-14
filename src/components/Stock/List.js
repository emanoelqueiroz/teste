import React, { Component } from "react";
import Button from "../Button";
import Section from "../Section";
import Table from "../Table/Table";
import TableActionsHeader from "../Table/TableActionsHeader";
import TableImage from "../Table/TableImage";
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
                    data: "2020-11-04",
                    image: '',
                    title: 'Bobina',
                    description: 'Bobina',
                    category: 'Componente Elétrico',
                    value: 60,
                },
                {
                    id: 2,
                    data: "2020-11-04",
                    image: '',
                    title: 'Lampida',
                    description: 'Lampida',
                    category: 'Componente Elétrico',
                    value: 9.99,
                },
                {
                    id: 3,
                    data: "2020-11-04",
                    image: '',
                    title: 'Tomada',
                    description: 'Tomada',
                    category: 'Componente Elétrico',
                    value: 8,
                },
                {
                    id: 4,
                    data: "2020-11-04",
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
        this.updateItem = this.updateItem.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
    }

    openRegister() {
        this.setState({ isRegistering: true });
    }

    handleClose() {
        this.setState({ isRegistering: false });
    }

    handleRegistration(data) {
        data.id = this.state.produtos.reduce((acc, item) => {
            if (item.id > acc) acc = item.id;
            return acc + 1;
        }, 0);

        const produtos = [...this.state.produtos];
        produtos.push(data);

        this.setState({
            ...this.state,
            produtos
        });
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

    updateItem(item) {
        console.log(item);
    }

    render() {
        return (
            <Section>
                <Register
                    open={this.state.isRegistering}
                    onClose={this.handleClose}
                    onRegistration={this.handleRegistration} />
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
                            <Th>Título</Th>
                            <Th>Categoria</Th>
                            <Th right>Valor</Th>
                            <Th right>Ações</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {this.state.produtos.length ? this.state.produtos.map(item => (
                            <Tr key={item.id}>
                                <Td>{item.id}</Td>
                                <Td center>{item.data}</Td>
                                <Td center>
                                    <TableImage src={item.image} />
                                </Td>
                                <Td>{item.title}</Td>
                                <Td>{item.category}</Td>
                                <Td right>{this.formatMoney(item.value)}</Td>
                                <Td right>
                                    <Button onClick={() => this.updateItem(item)}>Editar</Button>
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