import { useEffect, useState } from "react";

function Detail(url){ // props : 문자열 "" , 문자열 외의 값 {}
  let key1 = ['openDt','prdtStatNm','typeNm']
  let key2 = ['watchGradeNm','showTm','nations']
  let key3 = ['directors','genreNm','companyNm']

  let koKey = {
    'openDt' : '개봉일',
    'prdtStatNm' : '제작상태',
    'typeNm' : '영화구분',
    'watchGradeNm' : '관람등급',
    'showTm' : '상영시간',
    'nations' : '제작국가',
    'directors' : '감독',
    'genreNm' : '장르',
    'companyNm' : '배급사',
  }
  // <Detail url={'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd='
  //                 + m.movieCd} />



  return(
    <>
      hello
    </>
  );
}

export default Detail;