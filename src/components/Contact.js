/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import ContactInfo from './ContactInfo';
import ContactDetail from './ContactDetail';

export default class Contact extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
        selectedKey : -1,
        keyword: '',
          contactData : [{
            name: 'Abet',
            phone: '010-1234-5678'
          }, {
            name: 'Betty',
            phone: '010-9012-3456'
          }, {
            name: 'Charlie',
            phone: '010-7899-1234'
          }, {
            name: 'David',
            phone: '010-1111-9999'
          }]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
      
      handleChange(e){
        this.setState({
            keyword: e.target.value
        });
      }
      
      handleClick(key){
        this.setState({
            selectedKey : key
        });
        
        console.log(key, 'is selected');
      }
      
    render(){
        const mapToComponets = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase().indexOf(this.state.keyword) > -1 ;  
                }
            );
            return data.map((contact, i) => {
                    return (<ContactInfo 
                                contact={contact} 
                                key={i} 
                                onClick={() => this.handleClick(i)}
                            />);
            });
        };
        
        return(
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder='Search...'
                    value={this.state.keyword}
                    onChange={this.handleChange}
                    
                />
                <div>{mapToComponets(this.state.contactData)}</div>
                <ContactDetail 
                  isSelected={this.state.selectedKey != -1}
                  contact={this.state.contactData[this.state.selectedKey]}
                />
            </div>
        );
    }
}