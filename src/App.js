import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { H, Section } from "react-headings";


function App() {
  return (
    <>
<Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

  <Section  component={<H style={{textAlign: 'center'}}>My Books</H>}></Section>  

<div className='row'>


<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/book1.jpg" />
      <Card.Body>
        <Card.Title>Wole Soyinka: Literature, Activism, and African Transformation</Card.Title>
        <Card.Text>
        

        This timely and expansive biography of Wole Soyinka, the Nigerian writer, Nobel laureate, and social activist, shows how the author's early years influence his life's work and how his writing, in turn, informs his political engagement. Three sections spanning his life, major texts, and place in history, connect Soyinka's legacy with global issues beyond the borders of his own country, and indeed beyond the African continent

        </Card.Text>
        <Button variant="primary">Click To Read</Button>
      </Card.Body>
    </Card>

 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/book2.jpg"/>
      <Card.Body>
        <Card.Title>Rich Dad, Poor Dad</Card.Title> 
        <Card.Text>
        Rich Dad, Poor Dad”, it will explode the myth that you need to earn a high income to become rich, challenge the belief that your house is an asset, show parents why they can’t rely on the school system to teach their kids about money, define once and for all an asset and a liability and teach you what to teach your kids about money for their future financial success
        </Card.Text>
        <Button variant="primary">Click To Read</Button>
      </Card.Body>
    </Card>

    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/book3.jpg" />
      <Card.Body>
        <Card.Title>The Last Days at Forcados High Schools</Card.Title>
        <Card.Text>
        The Last Days at Forcados High tells the story of Jimi Solade, the most popular boy at the elite Forcados High School. As he begins his final year in senior secondary together with his friends, the sweet-hearted and devout Nene and Ansa, the nerdy art genius, he's determined it's going to be his best year yet.
        </Card.Text>
        <Button variant="primary">Click To Read</Button>
      </Card.Body>
    </Card>
</div>
  

    
    </>
    
    

    
    

  
  );
}





export default App;