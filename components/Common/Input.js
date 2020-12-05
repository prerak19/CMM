import React from 'react';
import PropTypes from 'prop-types';
import { getRegExp } from './helper';

const changeHandler = (e, onChangeFunc) => {
  // name, value, error (for select), obj (for select), event
  onChangeFunc(e.target.name, e.target.value, null, null, e);
}

const validationHandler = (e, props, reqErrorMsg) => {
  const { value, name } = e.target;
  const { title, isReq, reqType, minLength } = props;
  let errorMsg = isReq ? null : undefined;

  if (props.onBlurFunc) {
    props.onBlurFunc(name, value);
  }
  if (!props.validationFunc) return;

  if (!value && isReq)
    errorMsg = reqErrorMsg;
  else if (value && reqType && !getRegExp(reqType).test(value))
    errorMsg = `Please enter valid ${title}.`;
  else if (minLength && value.length < minLength)
    errorMsg = `${title} must be at least ${minLength} characters long.`;
  props.validationFunc(name, errorMsg);
}

const validateNumber = (evt) => {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
    key = theEvent.clipboardData.getData('text/plain');
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

const Input = (props) => {
  const { isReq, autoComplete, reqType, title, type, className, outerClassName, placeholder, value, name, error, onKeyUpFunc, loading, onChangeFunc, prefix, maxLength,
    minLength, checked, disabled, maxDate, minDate, appendIcon, prependIcon, outerStyle, style, smallSize, inputRefFunc, onClickFunc } = props;

  const reqErrorMsg = `Please enter ${title}.`;
  const inputProps = {
    type: type,
    className: className,
    value: value,
    disabled,
    autoComplete
  }
  if (style) inputProps.style = style;
  if (placeholder) inputProps.placeholder = placeholder;
  if (name) inputProps.name = name;
  if (onKeyUpFunc) inputProps.onKeyUp = onKeyUpFunc;
  if (reqType === 'mobile') inputProps.maxLength = 10;
  if (reqType === 'number' || reqType === 'mobile' || reqType === 'expiryDate' || reqType === 'cvv') inputProps.onKeyPress = validateNumber;
  if (maxLength) inputProps.maxLength = maxLength;
  if (minLength) inputProps.minLength = minLength;
  if (checked) inputProps.checked = checked;
  if (type == 'date' && maxDate) inputProps.max = maxDate;
  if (type == 'date' && minDate) inputProps.min = minDate;
  if (type === 'date' && !maxDate) inputProps.max = "9999-12-31";
  if (smallSize) inputProps.className = `${inputProps.className} small-input`;
  if (inputRefFunc) inputProps.ref = inputRefFunc;
  if (onClickFunc) inputProps.onClick = onClickFunc;

  return (
    <div style={outerStyle} className={`form-group${outerClassName ? ` ${outerClassName}` : ''}${loading !== null ? ' input-loading' : ''}${prefix ? ' input-prefix' : ''}`}>
      {/* {title ? <label className="col-form-label">
                {title}
                {isReq ? <span className="req-msg">*</span> : null}
            </label> : null} */}
      <div className='d-flex'>
        {prependIcon && prependIcon}
        <input
          {...inputProps}
          onChange={(e) => changeHandler(e, onChangeFunc)}
          onBlur={(e) => validationHandler(e, props, reqErrorMsg)}
        />
        {appendIcon && appendIcon}
      </div>
      {reqType === 'mobile' && <div style={{ fontSize: 10 }}>{title} should be 10 digits.</div>}
      {prefix && <span className="prefix-ic">{prefix}</span>}
      {loading && <i className="fa fa-spinner fa-pulse fa-fw font-16"></i>}
      {error && <span className="req-msg">{error === true ? reqErrorMsg : error}</span>}
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  className: 'form-control',
  outerClassName: null,
  outerStyle: null,
  isReq: null,
  reqType: '',
  value: '',
  onChangeFunc: () => { },
  onKeyUpFunc: () => { },
  onBlurFunc: () => { },
  loading: null,
  disabled: false,
  smallSize: false
}

Input.propTypes = {
  title: PropTypes.string,
  isReq: PropTypes.bool,
  reqType: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  outerClassName: PropTypes.string,
  outerStyle: PropTypes.object,
  style: PropTypes.object,
  value: PropTypes.any,
  error: PropTypes.any,
  onChangeFunc: PropTypes.func,
  onBlurFunc: PropTypes.func,
  validationFunc: PropTypes.func,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  checked: PropTypes.bool,
  autoComplete: PropTypes.string,
  onKeyUpFunc: PropTypes.func,
  loading: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  prefix: PropTypes.string,
  disabled: PropTypes.bool,
  prependIcon: PropTypes.element,
  appendIcon: PropTypes.element,
  smallSize: PropTypes.bool,
  inputRefFunc: PropTypes.func,
  onClickFunc: PropTypes.func
}

export default Input;