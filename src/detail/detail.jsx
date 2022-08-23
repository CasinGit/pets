import './detail.css';

function Detail({ target }) {

    return (
        <div className='detail'>
            <img src={target.popfile} alt="popImg" />
            <h2>
                {target.kindCd} {target.colorCd}
            </h2>
            <table border="1">
                <tr><td><b>발견 장소</b></td> <td>{target.happenPlace}</td></tr>
                <tr><td><b>성별</b></td> <td>{target.sexCd} (중성화: {target.neuterYn})</td></tr>
                <tr><td><b>생일</b></td> <td>{target.age}</td></tr>
                <tr><td><b>몸무게</b></td> <td>{target.weight}</td></tr>
                <tr><td><b>특징</b></td> <td>{target.specialMark}</td></tr>
                <tr><td><b>접수 날짜</b></td> <td>{target.happenDt}</td></tr>
                <tr><td><b>공고 시작/종료일</b></td> <td>{target.noticeSdt}~{target.noticeEdt}</td></tr>
                <tr><td><b>보호 장소</b></td> <td>{target.careAddr}<br />{target.careNm}</td></tr>
                <tr><td><b>Tel</b></td> <td>{target.careTel}</td></tr>
                <tr><td><b>특이사항</b></td> <td>{!target.noticeComment && "N"}</td></tr>
            </table>
        </div>
    )
}

export default Detail;