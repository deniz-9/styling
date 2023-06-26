import { Alert, Button, ButtonGroup } from 'reactstrap';

import styled from 'styled-components';

const SpecialButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const StyledDiv = styled.div`
  border-radius: 3px;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${props => (props.type === 'success' ? `background-color: green;` : null)}
  ${props => (props.type === 'error' ? `background-color: red;` : null)}
`


function App() {
  return (
    <div className="App" style={{ width: '60vw', margin: '0 auto' }} >
      <Alert color='success'>
        Başarıyla Bootstrap kullanıyoruz!
      </Alert>
      <ButtonGroup>
        <Button color="danger">
          Left
        </Button>
        <Button color="warning">
          Middle
        </Button>
        <Button color="success">
          Right
        </Button>
      </ButtonGroup>
      <SpecialButton>Button 1</SpecialButton>
      <br/>
      <br/>
      <StyledDiv type={"success"}>Merhaba!</StyledDiv>
      <StyledDiv type={"error"}>Hata var.</StyledDiv>
    </div>
  );
}

export default App;
