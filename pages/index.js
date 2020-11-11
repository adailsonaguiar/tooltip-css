import styled from "styled-components";

const Link = styled.a`
  &:hover::after {
    display: block;
  }

  &:after {
    content: attr(aria-label);
    content: attr(aria-label);
    background: #222;
    color: #fff;
    padding: 4px;
    font-size: 11px;
    border-radius: 3px;
    display: none;
  }
`;

export default function Home() {
  return (
    <div>
      <Link
        href="#component-tooltip"
        role="tooltip"
        aria-label="valor do área label"
      >
        Tooltip Aqui
      </Link>
    </div>
  );
}
