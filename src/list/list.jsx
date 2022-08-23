import './list.css';
import Item from '../item/item';

function List(props) {
    // console.log(props);
    return (
        <div className='list'>
            {props.pets ? props.pets.map(pet => {
                return (<Item key={pet.desertionNo} data={pet} onSelected={props.onSelected} />);
            }) : "검색 결과가 없습니다."}
        </div>
    )
}

export default List;