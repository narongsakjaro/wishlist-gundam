const TextInput = ({ label, value, onChange, placeholder, required }) => (
  <div className="flex flex-col">
    <label className="text-sm">{label}</label>
    <input
      className="block w-full"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default TextInput;
