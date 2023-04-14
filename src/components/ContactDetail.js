import React, {Component} from 'react';

export default class ContactDetail extends Component{
    render() {

        const details = (
            <div>
                <p>이름 : {this.props.contact.name}</p>
                <p>전화번호 : {this.props.contact.phone}</p>
            </div>
        );
        const blank = (<div></div>);
        
        return(
            <div>
                <h2>{this.props.isSelected ? '상세정보' : blank}</h2>
                {this.props.isSelected ? details : blank}
            </div>
        );
    }
}

ContactDetail.defaultProps = {
    contact: {
        name: '',
        phone: ''
    }
};