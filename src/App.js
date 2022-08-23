import { useEffect, useState } from 'react';
import './App.css';
import List from './list/list';
import Detail from './detail/detail';
import Search from './search/search';
import Loading from './loading/loading';
const key = "14vO7irUqxzcsU123CehPOI8f5Awq8qy9AwUSrZSFQixbxoV1vdWejk6bnA%2Fvk1cT58WAzlan35rbSLKs1t3QQ%3D%3D";

function App() {
    console.log("App render...");
    document.title = "유기동물 조회서비스";

    const [pets, setPets] = useState([]);
    const [selected, setSelected] = useState();
    const [sido, setSido] = useState([]);
    const [loading, setLoading] = useState(null);

    let petsUrl = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=30`;
    let sidoUrl = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?numOfRows=20&serviceKey=${key}&_type=json`;

    useEffect(() => {
        console.log("useEffect...");

        // 유기 동물 데이터 fetch
        fetch(petsUrl)
            .then(response => response.json())
            .then(json => {
                setPets(json.response.body.items.item);
            })
            .catch(e => {
                console.log(e);
            })

        // 시/도 조회 fetch
        fetch(sidoUrl)
            .then(response => response.json())
            .then(json => {
                setSido(json.response.body.items.item);
            })
            .catch(e => {
                console.log(e);
            })

    }, [])

    useEffect(() => {
        setLoading(false);
    }, [pets])

    const handleSearch = (bgnde, endde, sido, kind) => {
        petsUrl = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=30&bgnde=${bgnde}&endde=${endde}&upr_cd=${sido}&upkind=${kind}`;

        setLoading(true);

        fetch(petsUrl)
            .then(response => response.json())
            .then(json => {
                setPets(json.response.body.items.item);
                // setLoading(false);
            })
            .catch(e => {
                console.log(e);
            })
    }

    const handleSelected = (data) => {
        setSelected(data)
    }

    return (
        <div className='container'>
            <Search onSearch={handleSearch} sido={sido} />
            <div className="app">
                {selected && <Detail target={selected} />}
                {loading ? <Loading /> : <List pets={pets} onSelected={handleSelected} />}
                {/* <List pets={pets} onSelected={handleSelected} /> */}
            </div>
        </div>
    );
}

export default App;
