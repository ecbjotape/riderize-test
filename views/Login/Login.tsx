import Image from "next/image";
import { Button, Container, ContainerElement, Header, Input } from "./styles";

const Login = () => {
  const navigateToHome = () => {
    console.log("navigateToHome");
  };
  return (
    <>
      <Header>
        <img src="/images/logo-pokedex.webp" alt="Logo pokedex" />
        <Image
          src="/images/settings.svg"
          width={40}
          height={40}
          alt="engrenagem"
        />
      </Header>
      <Container>
        <ContainerElement>
          <Image
            src="/images/pokeball.svg"
            width={160}
            height={160}
            alt="pokeball"
          />
          <form onSubmit={navigateToHome}>
            <Input type="email" required placeholder="Seu melhor e-mail" />
            <Button type="submit">Acessar</Button>
          </form>
        </ContainerElement>
      </Container>
    </>
  );
};

export default Login;