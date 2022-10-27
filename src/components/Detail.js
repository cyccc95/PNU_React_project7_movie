import { useEffect, useState } from "react";


function NoDetail(){
  return(
    <>
      noDetail
    </>
  );
}

function MvDetail(props){
  const mvCd = props.item;
  
  const url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=' + mvCd;

  

  let keys = ['openDt','prdtStatNm','typeNm','watchGradeNm','showTm','nations','directors','genreNm','companyNm'];

  let koKey = {
    "openDt" : '개봉일',
    'prdtStatNm' : '제작상태',
    'typeNm' : '영화구분',
    'watchGradeNm' : '관람등급',
    'showTm' : '상영시간',
    'nations' : '제작국가',
    'directors' : '감독',
    'genreNm' : '장르',
    'companyNm' : '배급사',
  }

  let [mv,setMv] = useState({});
  
  const getMovie = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setMv(mv = data.movieInfoResult.movieInfo)
  
      })
      .catch((err) => {console.log(err)})

  }

  useEffect(() => {
    getMovie()
  },[])

  let list = []
  for(let k of keys){
    
    list.push(
      <div>
        <div>{koKey[k]}</div>
        <div>{mv[k]}</div>
      </div>

    )
  }

  
    
  
  
  
 
  

  
  

  
  

  
  
  

  return(
    <>
      {list}
    </>
  );
}

export {NoDetail, MvDetail};