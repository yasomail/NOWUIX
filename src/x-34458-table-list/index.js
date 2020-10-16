import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	const {headline,firstname,lastname} = state.properties;
	return (
		<div>
			<br></br>
			<h3>Headline: {headline}</h3>
            <table border="1" width="400">
                <tr>
                    <td>Parameter</td>
                    <td>Value</td>
                </tr>
                <tr>
                    <td>firstname</td>
                    <td>{firstname}</td>
                </tr>
                <tr>
                    <td>first_name</td>
                    <td>{lastname}</td>
                </tr>
            </table>
		</div>
	);
};

createCustomElement('x-34458-table-list', {
	renderer: {type: snabbdom},
	view,
	properties: {
		headline: {},
		firstname: {default: '<firstname>'},
		lastname: {default: '<lastname>'}
	},
	styles
});