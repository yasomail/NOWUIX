import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '../x-34458-table-list';

const view = (state, {updateState}) => {
	const myobj = {
		firstname_1: 'firstname p1',
		firstname_2: 'p2',
		firstprop: 'First prop'
	}
	return (
		<div>
			This the main component...
			<x-34458-table-list
				propobject={myobj}
				headline="I'am passed in text"
				firstname="The firstname property"
				lastname="The lastname property"></x-34458-table-list>

			<x-34458-table-list 
				headline='second one'
				firstname={myobj.firstname_1 + ' ' + myobj.firstname_2}></x-34458-table-list>
		</div>
	);
};

createCustomElement('x-34458-demo-01', {
	renderer: {type: snabbdom},
	view,
	styles
});
