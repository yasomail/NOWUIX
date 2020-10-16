import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div>Hello</div>
	);
};

createCustomElement('x-34458-demo-01', {
	renderer: {type: snabbdom},
	view,
	styles
});
