// Write your solution in this file!
const employee = {};

function updateEmployeeWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromEmployeeByKey(object, key) {
    const newEmployee = Object.assign({}, object);
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
}

