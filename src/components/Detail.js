import { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom';

function Detail(){ // props : 문자열 "" , 문자열 외의 값 {}
  let keys = {
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

  const mvCd = useParams().mvCd;
  
  let [mv,setMv] = useState();

  useEffect(() => {
    let url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=' + mvCd;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        let res = data.movieInfoResult.movieInfo;
        
        setMv(
          <div className="detail">
            <div className="detailTitle">{res.movieNm}</div>
            <div className="detailContent">
              <div className="detailContentItem">
                <div className="key">개봉일</div><div className="value">{res.openDt}</div>
              </div>
              <div className="detailContentItem">
                <div className="key">영화구분</div><div className="value">{res.typeNm}</div>
              </div>
              <div className="detailContentItem">
                <div className="key">제작상태</div><div className="value">{res.prdtStatNm}</div>
              </div>
              <div className="detailContentItem">
                <div className="key">상영시간</div><div className="value">{res.showTm}</div>
              </div>
              <div className="detailContentItem">
                <div className="key">장르</div><div className="value">{res.genres[0].genreNm}</div>
              </div>
              <div className="detailContentItem">
                <div className="key">관람등급</div><div className="value">{res.audits[0].watchGradeNm}</div>
              </div>
              <div className="detailContentItem">
                <div className="key">감독</div><div className="value">{res.directors[0].peopleNm}</div>
              </div>
              <div className="detailContentItem">
                <div className="key">제작국가</div><div className="value">{res.nations[0].nationNm}</div>
              </div>
              <div className="detailContentItem">
                <div className="key">배급사</div><div className="value">{res.companys[1].companyNm}</div>
              </div>
            </div>
          </div>
        );
      })
      .catch((err) => {console.log(err)})
  },[])

  return(
    <>
      <div  className="goHome">
        <Link to="/">홈으로</Link>
      </div>
      {mv}
    </>
  );
}

export default Detail;