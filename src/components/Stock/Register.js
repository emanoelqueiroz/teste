import { Form, Formik } from "formik";
import React, { Component } from "react";
import Button from "../Button";
import Input from "../Input";
import InputBlock from "../InputBlock";
import InputError from "../InputError";
import Label from "../Label";
import ModalBody from "../Modal/ModalBody";
import ModalFooter from "../Modal/ModalFooter";
import ModalHeader from "../Modal/ModalHeader";
import ModalWrapper from "../Modal/ModalWrapper";

class Register extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.onClose();
    }

    render() {
        if (!this.props.open) return null;

        return (
            <Formik
                initialValues={{ 
                    title: '', 
                    description: '', 
                    weight: 0, 
                    barCode: 0,
                    value: 0,
                 }}
                validate={values => {
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                }) => (
                        <Form>
                            <ModalWrapper>
                                <ModalHeader>
                                    <h3>Cadastrar Produto</h3>
                                    <Button type="button" onClick={this.handleClose} flat>X</Button>
                                </ModalHeader>
                                <ModalBody>
                                    <InputBlock>
                                        <Label>
                                            Imagem do Produto
                                            <Input
                                                type="file"
                                                name="image"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.image}
                                            />
                                        </Label>
                                    </InputBlock>
                                    <InputBlock>
                                        <Label>
                                            Título do produto
                                            <Input
                                                type="text"
                                                name="title"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.title}
                                            />
                                        </Label>
                                        <InputError>
                                            {errors.title && touched.title && errors.title}
                                        </InputError>
                                    </InputBlock>
                                    <InputBlock>
                                        <Label>
                                            Descrição longa
                                            <Input
                                                type="text"
                                                name="description"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.description}
                                            />
                                        </Label>
                                    </InputBlock>
                                    <InputBlock>
                                        <Label>
                                            Medidas
                                        </Label>
                                        <InputError>
                                            {errors.password && touched.password && errors.password}
                                        </InputError>
                                    </InputBlock>
                                    <InputBlock>
                                        <Label>
                                            Peso do produto (KG)
                                            <Input
                                                type="text"
                                                name="weight"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.weight}
                                            />
                                        </Label>
                                    </InputBlock>
                                    <InputBlock>
                                        <Label>
                                            Código de Barras
                                            <Input
                                                type="text"
                                                name="barCode"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.barCode}
                                            />
                                        </Label>
                                    </InputBlock>
                                    <InputBlock>
                                        <Label>
                                            Categoria
                                            {/* Select */}
                                        </Label>
                                    </InputBlock>
                                    <InputBlock>
                                        <Label>
                                            Valor (monetário/R$)
                                            <Input
                                                type="text"
                                                name="value"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.value}
                                            />
                                        </Label>
                                    </InputBlock>
                                    <InputBlock>
                                        <Label>
                                            Data de aquisição
                                            <Input
                                                type="date"
                                                name="data"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.data}
                                            />
                                        </Label>
                                    </InputBlock>
                                </ModalBody>
                                <ModalFooter>
                                    <Button type="button" onClick={this.handleClose} default>Cancelar</Button>
                                    <Button type="submit" disabled={isSubmitting}>Salvar</Button>
                                </ModalFooter>
                            </ModalWrapper>
                        </Form>
                    )}
            </Formik>
        )
    }
}

export default Register 