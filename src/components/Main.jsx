import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
 
 
const Main = function () { 
  return ( 
    <Col xs={12} md={9} className="offset-md-3 mainPage"> 
      <Row> 
        <Col sm={9} lg={11} className="mainLinks d-none d-md-flex"> 
          <a href="#t">TRENDING</a> 
          <a href="#p">PODCAST</a> 
          <a href="#m">MOODS AND GENRES</a> 
          <a href="#n">NEW RELEASES</a> 
          <a href="#d">DISCOVER</a> 
        </Col> 
      </Row> 
      <Row> 
        <Col xs={10}> 
          <div id="searchResults" style={{ display: "none" }}> 
            <h2>Search Results</h2> 
            <div className=" imgLinks py-3"></div> 
          </div> 
        </Col> 
      </Row> 
      <Row> 
        <Col xs={10}> 
          <div id="rock"> 
            <h2>Rock Classics</h2> 
            <Row 
              xs={{ cols: 1 }} 
              sm={{ cols: 2 }} 
              lg={{ cols: 3 }} 
              xl={{ cols: 4 }} 
              className="imgLinks py-3" 
              id="rockSection" 
            > 
              
            </Row> 
          </div> 
        </Col> 
      </Row> 
      <Row> 
        <Col xs={10}> 
          <div id="pop"> 
            <h2>Pop Culture</h2> 
            <Row 
              xs={{ cols: 1 }} 
              sm={{ cols: 2 }} 
              lg={{ cols: 3 }} 
              xl={{ cols: 4 }} 
              className="imgLinks py-3" 
              id="popSection" 
            > 
               
            </Row> 
          </div> 
        </Col> 
      </Row> 
      <Row> 
        <Col xs={10}> 
          <div id="hiphop"> 
            <h2>#HipHop</h2> 
            <Row 
              xs={{ cols: 1 }} 
              sm={{ cols: 2 }} 
              lg={{ cols: 3 }} 
              xl={{ cols: 4 }} 
              className="imgLinks py-3" 
              id="hipHopSection" 
            > 
               
            </Row> 
          </div> 
        </Col> 
      </Row> 
    </Col> 
  ); 
}; 
 
export default Main;