const FormInput = ({ label, name, type, defaultValue, size, readOnly, placeholder, required}) => {

    return (
      <div className='form-control'>
        <label htmlFor={name} className='label'>
          <span className='label-text capitalize'>{label}</span>
        </label>
        <input
        required={required}
          type={type}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={`input input-bordered ${size}`}
          readOnly={readOnly ? true : false}
        />
      </div>
    );
  };
  export default FormInput;