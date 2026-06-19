import { ChevronDown } from "lucide-react";
import { Field, FieldInput, FieldLabel } from "../../styles/common/components";

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
  <Field>
    <FieldLabel>{label}</FieldLabel>
    <FieldInput
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      {...props}
    />
  </Field>
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
  <Field className="relative">
    <FieldLabel>{label}</FieldLabel>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="min-h-12 w-full cursor-pointer appearance-none rounded-[12px] border border-white/10 bg-we-black/70 px-3.5 pr-11 text-we-gray-100 transition focus:border-we-blue-300 focus:bg-we-black focus:shadow-[0_0_0_3px_rgba(59,130,246,0.22)] max-[640px]:min-h-10 max-[640px]:px-3 max-[640px]:pr-10 max-[640px]:text-[13px]">
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
  </Field>
);

export const TextAreaField = ({ label, name, value, onChange, placeholder, maxLength = 500 }) => (
  <Field>
    <FieldLabel>{label}</FieldLabel>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      className="min-h-[120px] w-full resize-none rounded-[12px] border border-white/10 bg-we-black/70 p-3.5 leading-[1.6] text-we-gray-100 transition focus:border-we-blue-300 focus:bg-we-black focus:shadow-[0_0_0_3px_rgba(59,130,246,0.22)] placeholder:text-we-gray-500 [scrollbar-color:#334155_transparent] [scrollbar-width:thin] max-[640px]:min-h-[96px] max-[640px]:p-3 max-[640px]:text-[13px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-we-gray-700"
    />
  </Field>
);
