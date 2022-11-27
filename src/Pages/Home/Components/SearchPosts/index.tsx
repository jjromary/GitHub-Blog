import { ContainerSearch, HeaderSearch, NumberPost, Title } from "./styles";

export default function SearchPost() {
  return (
    <ContainerSearch>
      <HeaderSearch>
        <Title>Publicações</Title>
        <NumberPost>6 Publilcações</NumberPost>
      </HeaderSearch>
      <input
        type='text'
        placeholder="Buscar conteúdo"
      />
    </ContainerSearch>
  )
}