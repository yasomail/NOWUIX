import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '../x-34458-table-list';

const view = (state, {updateState}) => {
	return (
		<div>
			This the main component...
			<x-34458-table-list></x-34458-table-list>
		</div>
	);
};

createCustomElement('x-34458-demo-01', {
	renderer: {type: snabbdom},
	view,
	styles
});
