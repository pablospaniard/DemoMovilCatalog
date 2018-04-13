import React, { Component } from 'react';
import { connect } from 'react-redux';

class PhoneListContainer extends Component {
    render() {
        console.log('PhoneListcontainer', this.props);
        const phones = this.props.phones;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {/* {phones.map((phone, index) => {
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
                        )} */}
                        it works!
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('StateToProps', state)
    return { phones: state.phones }
}


export default connect(mapStateToProps)(PhoneListContainer);
