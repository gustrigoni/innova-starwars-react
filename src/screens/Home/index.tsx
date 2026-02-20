import { useState, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/router";
import { Container, Row, Logo, InputContainer, Input, Button } from "./styles";

export function Home() {
  const [keyword, setKeyword] = useState<string>("");
  const router = useRouter();

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setKeyword(e.currentTarget.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/search?name=${encodeURIComponent(keyword)}`);
  }

  return (
    <Container>
      <Row>
        <Logo />
        <InputContainer onSubmit={handleSubmit}>
          <Input onChange={handleInput} />
        </InputContainer>
      </Row>
      <Button onClick={() => router.push("/search")}>ver todos</Button>
    </Container>
  );
}
