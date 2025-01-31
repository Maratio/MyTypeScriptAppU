import { ListProps } from '../types/types';

function List<T>(props: ListProps<T>){
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    );
};

export default List;