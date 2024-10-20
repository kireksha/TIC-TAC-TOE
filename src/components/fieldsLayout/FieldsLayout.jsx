import Field from '../field/Field';
import { Component } from 'react';
import { connect } from 'react-redux';

class FieldsLayoutContainer extends Component {
	render() {
		return (
			<div className="grid-element">
				{this.props.fields.map((field, index) => {
					return <Field index={index} key={index} field={field} />;
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
    fields: state.fields,
});

const FieldsLayout = connect(mapStateToProps)(FieldsLayoutContainer);

export default FieldsLayout;
