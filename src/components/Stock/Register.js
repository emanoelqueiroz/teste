import { Form, Formik } from "formik";
import * as Yup from 'yup';

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
import InputImage from "../InputImage";
import noImage from "../../no-image.png";
import Select from "../Select";

const Schema = Yup.object().shape({
    title: Yup.string()
        .max(100, 'Deve conter menos de 100 caracteres!')
        .required('Campo obrigatório!'),
    barCode: Yup.number().integer('Precisa ser um número inteiro!'),
    data: Yup.date().max(new Date(), 'Não pode ser maior que a data atual!')
});

class Register extends Component {

    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClose() {
        this.props.onClose();
    }

    handleSubmit(data) {
        this.props.onRegistration(data);
        this.props.onClose();
    }

    render() {
        if (!this.props.open) return null;

        console.log(this.props.initialValues);

        const initialValues = {
            id: null,
            title: '',
            description: '',
            image: noImage,
            weight: 0,
            medida: {
                altura: 0,
                largura: 0,
                comprimento: 0,
            },
            barCode: 0,
            value: 0,
            category: 0,
            data: "2020-11-04",
            ...this.props.initialValues
        };

        return (
            <Formik
                initialValues={initialValues}
                validationSchema={Schema}
                onSubmit={(values, { setSubmitting }) => {
                    values.value = Number(values.value || 0);
                    setSubmitting(false);
                    this.handleSubmit(values);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    setFieldValue,
                    isSubmitting,
                }) => (
                        <Form>
                            <ModalWrapper>
                                <ModalHeader>
                                    <h3>Cadastrar Produto</h3>
                                    <Button type="button" onClick={this.handleClose} flat>X</Button>
                                </ModalHeader>
                                <ModalBody>
                                    <InputImage type="file"
                                        name="image"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        setFieldValue={setFieldValue}
                                        image={values.image}></InputImage>
                                    <InputBlock>
                                        <Label>
                                            Título *
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
                                            Descrição
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

                                            <InputBlock parent>
                                                <InputBlock child>
                                                    Altura
                                                    <Input
                                                        type="text"
                                                        name="altura"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.medida.altura}
                                                        number
                                                    />
                                                </InputBlock>

                                                <InputBlock child>
                                                    Largura
                                                    <Input
                                                        type="text"
                                                        name="largura"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.medida.largura}
                                                        number
                                                    />
                                                </InputBlock>

                                                <InputBlock child>
                                                    Comprimento
                                                    <Input
                                                        type="text"
                                                        name="comprimento"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.medida.comprimento}
                                                        number
                                                    />
                                                </InputBlock>
                                            </InputBlock>
                                        </Label>
                                        <InputError>
                                            {errors.password && touched.password && errors.password}
                                        </InputError>
                                    </InputBlock>
                                    <InputBlock>
                                        <Label>
                                            Peso do produto (KG)
                                            <Input
                                                type="number"
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
                                                type="number"
                                                name="barCode"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.barCode}
                                            />
                                        </Label>
                                        <InputError>
                                            {errors.barCode && touched.barCode && errors.barCode}
                                        </InputError>
                                    </InputBlock>
                                    <InputBlock>
                                        <Label>
                                            Categoria
                                            <Select
                                                name="category"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.category}>
                                                <option value="0">Selecione uma Categoria</option>
                                                <option value="1">Componente Eletronico</option>
                                                <option value="2">Parafuso</option>
                                                <option value="3">Placa</option>
                                            </Select>
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
                                                number
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
                                        <InputError>
                                            {errors.data && touched.data && errors.data}
                                        </InputError>
                                    </InputBlock>
                                </ModalBody>
                                <ModalFooter>
                                    <Button type="button" onClick={this.handleClose} default>Cancelar</Button>
                                    <Button type="submit" disabled={isSubmitting}>Salvar</Button>
                                </ModalFooter>
                            </ModalWrapper>
                        </Form>
                    )
                }
            </Formik>
        );
    }
}

export default Register