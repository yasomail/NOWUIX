import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '../x-34458-hyper-link';

const view = (state, {updateState}) => {
	const {headline,firstname,lastname} = state.properties;
	if( !state.properties.propobject )  {
		state.properties.propobject = { firstprop: 'NOT AVAILABLE' };
	}
	return (
		<div>
			<br></br>
			<h3>Headline: {headline}</h3>
			<h3>Hyperlink <x-34458-hyper-link linklabel={state.properties.propobject.firstprop}></x-34458-hyper-link></h3>
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
                    <td>lastname</td>
                    <td>{lastname}</td>
                </tr>
            </table>
		</div>
	);
};

createCustomElement('x-34458-table-list', {
	renderer: { type: snabbdom },
	view,
	properties: {
		propobject: {},
		headline: {},
		firstname: { default: '<firstname>' },
		lastname: { default: '<lastname>' }
	},
	styles
});
