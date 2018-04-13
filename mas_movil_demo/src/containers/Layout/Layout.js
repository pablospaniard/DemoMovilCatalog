import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


import styles from './Layout.scss';

import * as actionTypes from '../../store/actions';
import fetchPhones from '../../api/index';


class Layout extends Component {

	state = {
		disabled: true
	}

	isButtonDisabled = () => {
		this.props.onRenderPhones();
		this.setState({
			disabled: false
		})
	}

	render() {
		console.log('this.props.phones', this.props.phones)
		return (
			<div className={`${styles.App} container`}>
				<div className="row jus">
					<div className="col-md-12 text-center">
						<div className={styles.App_header}>
							<h1 className={styles.App_title}>Welcome to MasMovil Catalog</h1>
						</div>

					</div>
					<div className="col-md-12 text-center">
						<button
							className="btn btn-warning"
							onClick={this.isButtonDisabled} >
							Receive Phones
            			</button>
						<NavLink
							to='/phones'
							exact
							className="btn btn-primary"
							style={this.state.disabled ? { pointerEvents: 'none', cursor: 'not-allowed', opacity: '0.2' } : { pointerEvents: 'all', cursor: 'pointer', opacity: '1' }}>Go to catalog
						</NavLink>
					</div>
					{React.cloneElement(this.props.children, { phones: this.props.phones })}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log('StateToProps', state)
	return { phones: state }
}

const mapDispatchToProps = dispatch => {
	return {
		onRenderPhones: () => dispatch({
			type: actionTypes.ADD_PHONES,
			payload: fetchPhones()
		})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
