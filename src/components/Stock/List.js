import React, { Component } from "react";
import Button from "../Button";
import Section from "../Section";
import Table from "../Table/Table";
import TableActionsHeader from "../Table/TableActionsHeader";
import Td from "../Table/Td";
import Th from "../Table/Th";
import Register from "./Register";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = { isRegistering: false };
        this.openRegister = this.openRegister.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    openRegister() {
        this.setState({ isRegistering: true });
    }

    handleClose() {
        this.setState({ isRegistering: false });
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
                        <tr>
                            <Th>Cód.</Th>
                            <Th center>Data de Aquisição</Th>
                            <Th>Imagem</Th>
                            <Th>Descrição</Th>
                            <Th>Categoria</Th>
                            <Th right>Valor</Th>
                            <Th right>Ações</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Td>1</Td>
                            <Td center>03/05/1994</Td>
                            <Td>Imagem</Td>
                            <Td>Bobina</Td>
                            <Td>Componente Elétrico</Td>
                            <Td right>R$ 65,00</Td>
                            <Td right>
                                <Button danger>Excluir</Button>
                            </Td>
                        </tr>
                    </tbody>
                </Table>
            </Section>
        )
    }
}

export default List