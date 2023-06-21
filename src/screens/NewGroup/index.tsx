import React from "react";
import { Container, Content, Icon } from "./styles";
import { Button } from "@components/Button";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Highlight } from "@components/Highlight";

export function NewGroup() {
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <Highlight title="Nova turma" subtitle="Crie a turma para adicionar as pessoas" />
                <Input
                    placeholder="Nome da turma"
                />
                <Button title="Criar" style={{ marginTop: 20 }} />
            </Content>
        </Container>
    )
};