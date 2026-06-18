import { ChevronDown } from "lucide-react";
import { CommonField } from "../../styles/common/components";

const formatPhoneNumber = (value = "") => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
};

const formatName = (value = "") => value.replace(/[0-9]/g, "").slice(0, 20);

const createFieldEvent = (event, value) => ({
  ...event,
  target: {
    ...event.target,
    name: event.target.name,
    value,
    type: event.target.type,
    checked: event.target.checked,
  },
});

export const TextField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  maxLength = 80,
  ...props
}) => (
  <CommonField>
    <span>{label}</span>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      {...props}
    />
  </CommonField>
);

export const NameField = ({ label, name = "name", value, onChange, placeholder, ...props }) => {
  const handleChange = (event) => {
    onChange(createFieldEvent(event, formatName(event.target.value)));
  };

  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      autoComplete="name"
      maxLength={20}
      {...props}
    />
  );
};

export const PhoneField = ({ label, name = "phone", value, onChange, placeholder, ...props }) => {
  const handleChange = (event) => {
    onChange(createFieldEvent(event, formatPhoneNumber(event.target.value)));
  };

  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      inputMode="numeric"
      autoComplete="tel"
      maxLength={13}
      {...props}
    />
  );
};

export const SelectField = ({ label, name, value, onChange, placeholder, options = [] }) => (
  <CommonField className="relative">
    <span>{label}</span>
    <select name={name} value={value} onChange={onChange}>
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <ChevronDown
      className="pointer-events-none absolute bottom-[17px] right-3.5 text-we-gray-500"
      size={17}
    />
  </CommonField>
);

export const TextAreaField = ({ label, name, value, onChange, placeholder, maxLength = 500 }) => (
  <CommonField>
    <span>{label}</span>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  </CommonField>
);
