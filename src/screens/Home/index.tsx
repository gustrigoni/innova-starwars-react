import { useState, useTransition, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/router";

import { APP_ROUTES } from "../../lib/constants";
import { Container, Row, Logo, InputContainer, Input, Button } from "./styles";

export function Home() {
  const [keyword, setKeyword] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.currentTarget.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    startTransition(() => {
      router.push(`${APP_ROUTES.search}?name=${encodeURIComponent(keyword.trim())}`);
    });
  }

  return (
    <Container>
      <Row>
        <Logo />
        <InputContainer onSubmit={handleSubmit}>
          <Input onChange={handleInput} />
        </InputContainer>
      </Row>
      <Button
        disabled={isPending}
        onClick={() =>
          startTransition(() => {
            router.push(APP_ROUTES.search);
          })
        }
      >
        {isPending ? "Loading..." : "View all"}
      </Button>
    </Container>
  );
}
