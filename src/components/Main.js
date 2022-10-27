import Style from './Style.css';
import Detail from './Detail';
import {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';


function Main(){
  // list를 담을 mv state변수
  let [mv, setMv] = useState();

  // json 받아와서 list 생성하고 보여주는 함수
  const mvLoad = (d) => {
    const url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=" + d;
    
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        const res = data.boxOfficeResult.dailyBoxOfficeList;
                
        setMv(
          res.map((m) => (
            <div
              className='mvChartContent' 
              key={m.movieCd}
              onClick={(e) => {
                e.preventDefault();
                <Link to="/Detail"></Link>
              }}
            >
              <span className='rank'>{m.rank}</span>
              <span className='movieNm'>{m.movieNm}</span>
              <span className='salesShare'>{m.salesShare}%</span>
              <span className='audiAcc'>{m.audiAcc}명</span>
            </div>
          )
        ));
      })
      .catch((err) => {console.log(err)})
  }

  // 최초 랜더링 되면 어제 날짜 list 보여줌
  useEffect(() => {
    let today = new Date();
    let yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    let year = String(yesterday.getFullYear());
    let month = String(yesterday.getMonth() + 1);
    let day = String(yesterday.getDate());

    let dd = year + month + day;
    mvLoad(dd);
  },[])

  const dRef = useRef();
 
  // 날짜 선택하면 변경해서 list 보여주도록 요청
  const handleChange = (e) => {
    e.preventDefault();
    let dd = dRef.current.value.replaceAll('-','');
    mvLoad(dd);  
  }
  
  return(
    <div className="main">
      <form>
        <input type='date' ref={dRef} name='d' onChange={handleChange} />
      </form>
      <div className="mvChart">
        <div className='mvChartTitle'>
          <span className='rank'>순위</span>
          <span className='movieNm'>영화명</span>
          <span className='salesShare'>점유율</span>
          <span className='audiAcc'>관객수</span>
        </div>
        {mv}
      </div>
    </div>
  );
}

export default Main;