import { cloneDeep } from 'lodash';

// get regexp by type
export const getRegExp = (type) => {
  let regx = null;
  switch (type) {
    case 'email':
      regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      break;
    case 'mobile':
      regx = /^[0-9]{10}$/;
      break;
    case 'number':
      regx = /^[0-9]*$/;
      break;
    case 'url':
      regx = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
      break;
    case 'intent':
      regx = /^[ A-Za-z0-9_.-]*$/;
      break;
    case 'cvv':
      regx = /^[0-9]{3,4}$/;
      break;
    case 'expiryDate':
      regx = /(0[1-9]|10|11|12)\/[0-9]{2}|\./;
      break;
    case 'price':
      regx = /^\d{0,8}(\.\d{1,4})?$/;
      break;
    case 'PHONE':
      regx = /^[0-9]{10}$/;
      break;
    case 'EMAIL':
      regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      break;
    case 'TEXT':
      regx = /^[$!_,-@.\/#\w\s]*$/;
      break;
    case 'NUMBER':
      regx = /^[0-9]*$/;
      break;
    default:
      break;
  }
  return regx;
}

// get object of state form
export const getFormDetails = (form, changeValidation, formValueInKey = null) => {
  let failed;
  for (let val in form.errors) {
    const fieldError = form.errors[val];
    const fieldValue = formValueInKey ? form[formValueInKey] : form[val];
    if (fieldError) {
      failed = true;
    }
    else if (fieldError === null && !fieldValue) {
      failed = true;
      if (changeValidation)
        changeValidation(val, true);
    }
  }
  if (failed) {
    return false;
  }
  else {
    const cloneObj = cloneDeep(form);
    delete cloneObj['errors'];
    return cloneObj;
  }
}