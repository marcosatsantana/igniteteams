import { Container, Logo, BackIcon, BackButton } from "./styles";
import logoImg from '@assets/logo.png';

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
    return (
        <Container>
            {
                showBackButton &&
                <BackButton>
                    <BackIcon source={logoImg} />
                </BackButton>
            }
            <Logo source={logoImg} />
        </Container>
    )
}