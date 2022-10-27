import Style from './Style.css';
import {useEffect, useRef, useState} from 'react';
import image from './React.png';
import {NoDetail, MvDetail} from './Detail';

function Main(){
  // list를 담을 mv state변수
  let [mv, setMv] = useState();

  // json 받아와서 list 생성하고 보여주는 함수
  const mvLoad = (d) => {
    const url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=" + d;
    
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        
        mv = data.boxOfficeResult.dailyBoxOfficeList;
        

        setMv(mv.map((m) =>
          <tr key={m.movieCd} onMouseEnter={(e) => {e.preventDefault(); setView(view = <MvDetail item={m.movieCd} />)}}>
            <td>{m.rank}</td>
            <td>{m.movieNm}</td>
            <td>{m.salesShare}%</td>
            <td>{m.audiAcc}명</td>
          </tr>
        ))
      })
      .catch((err) => {console.log(err)})
  }

  // 최초 랜더링 되면 어제 날짜 list 보여줌
  useEffect(() => {
    let today = new Date()
    let yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 1)
    let year = String(yesterday.getFullYear())
    let month = String(yesterday.getMonth() + 1)
    let day = String(yesterday.getDate())

    let dd = year + month + day
    mvLoad(dd)
  },[])

 

  const dRef = useRef()

  // 날짜 선택하면 변경해서 list 보여주도록 요청
  const handleChange = (e) => {
    e.preventDefault();
    let dd = dRef.current.value.replaceAll('-','')
    mvLoad(dd)
    
  }
  
  let [view, setView] = useState(<NoDetail />)

  return(
    <div className="main">
      <div className='selectDate'>
        <form>
          <input type='date' ref={dRef} name='d' onChange={handleChange} />
        </form>
        <img src={image} alt=""></img>
      </div>
      <div className='mvDetail'>
        {view}
      </div> 
      <table className="mvChart">
        <th>순위</th>
        <th>영화명</th>
        <th>점유율</th>
        <th>관객수</th>
        {mv}
      </table>
    </div>
    
  );
}

export default Main;