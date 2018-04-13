import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PhoneDetailComponent extends Component {

    renderPhone(phone, index) {
        return (
            <div className="col-sm-4 book-list" key={index}>
                <div className="thumbnail">
                    <img src={phone.image} alt={phone.name} className="img-thumbnail" />
                    <div className="caption">
                        <h4 className="pull-right">
                            $ {phone.price}
                        </h4>
                        <h4>
                            <Link to={`/phones/${phone.id}`}>
                                {phone.name}
                            </Link>
                        </h4>
                        <p>Description</p>
                        <p className="itemButton">
                            <Link to={`/phones/${phone.id}`} className="btn btn-default">
                                More info
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="books row">
                    {this.props.phones.map((phone, index) => this.renderPhone(phone, index))}
                </div>
            </div>
        )
    }
}

export default PhoneDetailComponent;