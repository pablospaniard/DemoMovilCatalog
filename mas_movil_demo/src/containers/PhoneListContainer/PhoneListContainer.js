import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PhoneListContainer extends Component {

    render() {
        const phones = this.props.phones;
        console.log('phones', this.props.phones);
        return (
            <div className="container">
                <div className="row">
                    {phones.map((phone, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <div className='img-thumbnail' key={index}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img src={phone.image} alt={phone.name} />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="justify-content-end d-flex">${phone.price}</h4>
                                        <h4>{phone.name}</h4>
                                        <p className="text-left">{phone.description}</p>
                                        <Link
                                            to={this.props.match.url + '/' + index}
                                            className="btn btn-info"
                                        >More...</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}

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
