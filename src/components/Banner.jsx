import {useEffect , useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import headerImg from '../assets/img/header-img.svg'

const Banner = () => {


  const [loopNum , setLoopNum] = useState(0);
  const [isDeleting , setIsDeleting] = useState(false);
  const toRotate =  ["Web Developer" , "Frontend Developmer"  , "React Developer"] ;
  const [text , setText] = useState("") ; 
  const [detlta , setDelta] = useState(300 - Math.random()*100)
  const period =  2000;

  useEffect(()=>{
    let ticker= setInterval(() => {
      tick()
    }, detlta);

    return () => {clearInterval(ticker)}
  } , [text])


  const tick = () => {
    let i = loopNum % toRotate.length ;
    let fullText = toRotate[i]  ;
    let updatedText = isDeleting ?  fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); 
    setText(updatedText);

    if(isDeleting){
      setDelta( prevDelta => prevDelta / 2)
    }

    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    }else if(isDeleting && updatedText ===''){
      setIsDeleting(false)
      setLoopNum(loopNum+1)
      setDelta(500)

    }
  } 

  return (
    <section className='banner' id='home'>
      <Container >
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my  Portfolio</span>
            <h1>{'Hi I am Ahmad Alanaswah'} <span className='wrap'>{text}</span></h1>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, est officiis laborum deleniti distinctio dolore reiciendis labore amet. Modi explicabo ullam numquam facere repellendus, iusto aspernatur animi dolorem dolore unde!</p> */}
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='header img'/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner