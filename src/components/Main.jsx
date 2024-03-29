import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import React, { useState, useEffect  } from 'react';
 
const Main = function () { 
    const [searchSongs, setSearchSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=SferaEbbasta"; 
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Errore nella ricerca delle canzoni');
        }
        const data = await response.json();
        setSearchSongs(data.data.slice(0, 8) || []);
      } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
      }
    };

    fetchData();
  }, []);
  return ( 
    <Col xs={12} md={9} className="offset-md-3 mainPage"> 
      <Row> 
        <Col sm={9} lg={11} className="mainLinks d-none d-md-flex"> 
          <a href="#">TRENDING</a> 
          <a href="#">PODCAST</a> 
          <a href="#">MOODS AND GENRES</a> 
          <a href="#">NEW RELEASES</a> 
          <a href="#">DISCOVER</a> 
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
              style={{ marginLeft: "-5px", marginRight: "-5px"}}
            > 
               {searchSongs.map((result, index) => (
                <Col key={index} >
                  <img src={result.album.cover_medium} alt={result.album.title} className="modi"/>
                </Col>
              ))}
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
              style={{ marginLeft: "-5px", marginRight: "-5px" }}
            > 
               {searchSongs.map((result, index) => (
                <Col key={index} >
                  <img src={result.album.cover_medium} alt={result.album.title} className="modi" />
                </Col>
                ))}
            </Row> 
          </div> 
        </Col> 
      </Row> 
      <Row> 
        <Col xs={10}> 
          <div id="hiphop"> 
            <h2>HipHop</h2> 
            <Row 
              xs={{ cols: 1 }} 
              sm={{ cols: 2 }} 
              lg={{ cols: 3 }} 
              xl={{ cols: 4 }} 
              className="imgLinks py-3" 
              id="hipHopSection" 
              style={{ marginLeft: "-5px", marginRight: "-5px" }}
            > 
               {searchSongs.map((result, index) => (
                <Col key={index} >
                  <img src={result.album.cover_medium} alt={result.album.title} className="modi"/>
                </Col>
                ))}
            </Row> 
          </div> 
        </Col> 
      </Row> 
    </Col> 
  ); 
}; 
 
export default Main;