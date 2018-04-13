import React, { Component } from 'react';

class phoneDetailComponent extends Component {

    render() {
        const phones = this.props.phones;
        console.log('PhoneListcontainer', phones);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {phones.map((phone, index) => {
                            return (
                                <div className='thumbnail' key={index}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={phone.image} alt={phone.name} className="img-thumbnail" />
                                        </div>
                                        <div className="col-md-6">
                                            {this.renderFields()}
                                        </div>
                                    </div>
                                    <div className="caption-full">
                                        <h4 className="pull-right">${phone.price}</h4>
                                        <h4>{phone.name}</h4>
                                        <p>{phone.description}</p>
                                    </div>
                                </div>
                            )
                        }
                        )}
                        it works!
                    </div>
                </div>
            </div>
        );
    }
}



export default phoneDetailComponent;