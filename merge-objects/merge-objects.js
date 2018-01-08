'use strict';

function appendToObject_Example1() {
    var validationMessages = {
        'inputMiddleName': {
            'required': 'This field is required.'
        },
        'inputBirthDate': {
            'required': 'This field is required.',
            'INVALID_VALUE': 'This date is invalid',
            'minDate': 'Min. date is 01-01-1900',
            'maxCurrentDate': 'Max. date is current date'
        },
        'inputDisplayName': {
            'required': 'This field is required.'
        },
    };


    var extensions = {
        'NEW_FIELD1': 'I am new field one'
    }

    console.log('BEFORE APPEND');
    console.log(JSON.stringify(validationMessages));
    console.log(JSON.stringify(extensions));

    // it will add new object to validationMessages.inputBirthDate
    Object.assign(validationMessages.inputBirthDate, extensions);

    console.log('AFTER APPEND');
    console.log(JSON.stringify(validationMessages));
    console.log(JSON.stringify(extensions));

    console.log('AFTER VALUE CHANGE VIA ARRAY ACCESS');
    validationMessages['inputBirthDate']['NEW_FIELD1'] = 'new value!!!';

    console.log(JSON.stringify(validationMessages));
}

function mergeObjects_Example1(){
    var validationMessages = {
        'inputMiddleName': {
            'required': 'This field is required.'
        },
        'inputBirthDate': {
            'required': 'This field is required.',
            'INVALID_VALUE': 'This date is invalid',
            'minDate': 'Min. date is 01-01-1900',
            'maxCurrentDate': 'Max. date is current date'
        },
        'inputDisplayName': {
            'required': 'This field is required.'
        },
    };
	
	var extensions = {
		    'inputBirthDate': {
            'NEW_FIELD1': 'I am new field one'
        }
	}

	console.log(JSON.stringify(validationMessages));
	console.log(JSON.stringify(extensions));

	// Properties in the target object will be overwritten by properties in the sources if they have the same key.
    // Later sources' properties will similarly overwrite earlier ones.
    // So field inputBirthDate from validationMessages is overwritten by field inputBirthDate from extensions.
	var merge1 = Object.assign({}, validationMessages, extensions);

    console.log(JSON.stringify(merge1));

    var merge2 = _.merge({}, validationMessages, extensions);

    console.log(JSON.stringify(merge2));
}
