import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	const {linkurl, linklabel} = state.properties;
	return (
	<a href={linkurl}>{linklabel}</a>
	);
};

createCustomElement('x-34458-hyper-link', {
	renderer: {type: snabbdom},
	view,
	properties: {
		linklabel: {default: 'label of the hyperlink'},
		linkurl: {default: 'https://www.google.com'}
	},
	styles
});
