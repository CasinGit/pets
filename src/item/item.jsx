import './item.css';

function Item({ data, onSelected }) {

    return (
        <div className='item' onClick={() => onSelected(data)}>
            <img src={data.filename} alt='thumbnail' className='thumbnail' />
            <div className='inform'>
                <p>
                    <b>{data.kindCd} ({data.colorCd})</b>
                </p>
                <p>
                    <small>{data.orgNm} {data.happenPlace}</small>
                </p>
                <p>
                    <b><small>접수날짜: {data.happenDt.slice(0, 4)}-{data.happenDt.slice(4, 6)}-{data.happenDt.slice(6, 8)}</small></b>
                </p>
            </div>
        </div>
    )
}

export default Item;