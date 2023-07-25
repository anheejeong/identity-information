import './InformList.css'
import Card from '../UI/Card';

const InformList = (props) => {
    console.log(props.name)

    return (
        <li>
            <Card className="inform-item">
                <div className='inform-item__des'>
                    <label>{props.name} ({props.age} years old)</label>
                </div>
            </Card>
        </li>
    );
}

export default InformList;