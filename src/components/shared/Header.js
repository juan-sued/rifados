import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderClass>
      <button>
        <h1>Rifados</h1>
      </button>
      <div className="spaceHeaderClass">
        <button>
          <h2>Quem somos</h2>
        </button>
        <button>
          <h2>Novidades</h2>
        </button>
        <button>
          <h2>Entrar</h2>
        </button>
      </div>
    </HeaderClass>
  );
}

const HeaderClass = styled.header`
  height: 70px;
  box-shadow: 0 0.5px 10px #7c7c7c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 0 50px 0 10px;

  button {
    border: none;
    background-color: transparent;
    :hover {
      cursor: pointer;
      h1 {
        color: black;
      }
      h2 {
        color: black;
      }
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 300px;
  }
`;
