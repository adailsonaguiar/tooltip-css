import styled from "styled-components";

const Container = styled.div``;

const Link = styled.a`
  position: relative;
  &:hover::after {
    pointer-events: all;
    opacity: 1;
  }

  &:after {
    content: attr(aria-label);
    content: attr(aria-label);
    background: #222;
    color: #fff;
    padding: 4px;
    font-size: 11px;
    border-radius: 3px;
    position: absolute;
    pointer-events: none;
    opacity: 0;
    white-space: nowrap;
    transition: 0.2s;
  }
`;

export default function Home() {
  return (
    <Container>
      <Link
        href="#component-tooltip"
        role="tooltip"
        aria-label="valor do área label"
      >
        Tooltip Aqui
      </Link>
      <a>teste</a>
    </Container>
  );
}
