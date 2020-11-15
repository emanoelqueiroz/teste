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
            initialValues: {},
            produtos: [
                {
                    id: 1,
                    data: "2020-11-04",
                    image: '',
                    title: 'Bobina',
                    description: 'Bobina',
                    category: 1,
                    value: 60,
                }
            ]
        };

        this.openRegister = this.openRegister.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
        this.newId = this.newId.bind(this);
    }

    openRegister() {
        this.setState({ isRegistering: true });
    }

    handleClose() {
        this.setState({ isRegistering: false });
    }

    newId() {
        return this.state.produtos.reduce((acc, item) => {
            if (item.id > acc) acc = item.id;
            return acc + 1;
        }, 0);
    }

    handleRegistration(data) {
        const produtos = [...this.state.produtos];

        if (!data.id)
            data.id = this.newId();

        const produtoIndex = produtos.findIndex(item => item.id === data.id);
        if (produtoIndex > -1)
            produtos[produtoIndex] = data;
        else
            produtos.push(data);

        this.setState({
            ...this.state,
            produtos,
            initialValues: {}
        });
    }

    formatMoney(value) {
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    getCategory(category) {
        switch (Number(category)) {
            case 1:
                return 'Componente Eletrico';
            case 2:
                return 'Parafuso';
            case 3:
                return 'Placa';
            default:
                return 'Sem categoria';
        }
    }

    deleteItem(item) {
        const produtos = this.state.produtos.filter(produto => produto.id !== item.id);

        this.setState({
            ...this.state,
            produtos
        });
    }

    updateItem(item) {
        this.setState({
            ...this.state,
            initialValues: item,
            isRegistering: true
        })
    }

    render() {
        return (
            <Section>
                <Register
                    open={this.state.isRegistering}
                    initialValues={this.state.initialValues}
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
                                <Td>
                                    <Th mobile>Cód.</Th>
                                    {item.id}
                                </Td>
                                <Td center>
                                    <Th mobile>Data de Aquisição</Th>
                                    {item.data}
                                </Td>
                                <Td center>
                                    <Th mobile>Imagem</Th>
                                    <TableImage src={item.image} />
                                </Td>
                                <Td>
                                    <Th mobile>Título</Th>
                                    {item.title}
                                </Td>
                                <Td>
                                    <Th mobile>Categoria</Th>
                                    {this.getCategory(item.category)}
                                </Td>
                                <Td right>
                                    <Th mobile>Valor</Th>
                                    {this.formatMoney(item.value)}
                                </Td>
                                <Td right>
                                    <Th mobile>Ações</Th>
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