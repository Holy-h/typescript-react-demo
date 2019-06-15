import React from "react";

interface IInputProps {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInputProps> = ({ value, onChange }) => (
  <input type="text" placeholder="Name" value={value} onChange={onChange} />
);

interface IFormProps {
  onSubmit: (event: React.FormEvent) => void;
}

export const Form: React.FC<IFormProps> = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>{children}</form>
);
