import { useRef, useEffect } from 'react';
import './search.css';

function Search({ onSearch, sido }) {
    const bgnde = useRef();
    const endde = useRef();
    const sidoRef = useRef();
    const kindRef = useRef();

    useEffect(() => {
        const today = new Date().toISOString().slice(0, 10);
        endde.current.value = today;
    }, [])

    const searchHandle = (evt) => {
        evt.preventDefault();
        onSearch(
            bgnde.current.value.replaceAll("-", ""),
            endde.current.value.replaceAll("-", ""),
            sidoRef.current.value,
            kindRef.current.value
        );
    }

    const makeSido = (item) => {
        return <option value={item.orgCd} key={item.orgCd}>{item.orgdownNm}</option>;
    };

    const kind = [
        { kindCd: "", KNm: "전체" },
        { kindCd: 417000, KNm: "개" },
        { kindCd: 422400, KNm: "고양이" },
        { kindCd: 429900, KNm: "기타" },
    ]
    const makeKind = (item) => {
        return <option value={item.kindCd} key={item.kindCd}>{item.KNm}</option>;
    }

    return (
        <div className='search'>
            <form onSubmit={searchHandle} className='search-form'>
                <select name="sido" ref={sidoRef}>
                    <option value="" key="all">전체</option>
                    {sido.map(makeSido)}
                </select>
                &nbsp;
                <select name="kind" ref={kindRef}>
                    {kind.map(makeKind)}
                </select>
                <input type="date" ref={bgnde} />
                <span>~</span>
                <input type="date" ref={endde} />
                <button type="submit">검색</button>
            </form>
        </div>
    )
}

export default Search;