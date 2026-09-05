import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

const fieldClass = 'w-full rounded-md px-3.5 text-sm outline-none transition-colors';
const fieldStyle = { border: '1px solid var(--qt-border-grey, #D0D0D0)', background: 'var(--qt-clinical-white)', color: 'var(--qt-near-black)', height: 44 };

function Label({ children }: { children: ReactNode }) {
  return <span className="mb-1.5 block text-xs font-semibold" style={{ color: 'var(--qt-near-black)' }}>{children}</span>;
}

export function TextField({ label, ...rest }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <input {...rest} className={`${fieldClass} qt-focus`} style={fieldStyle} onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--qt-deep-teal)')} onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--qt-border-grey)')} />
    </label>
  );
}

export function SelectField({ label, children, ...rest }: { label: string; children: ReactNode } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <select {...rest} className={`${fieldClass} qt-focus appearance-none`} style={fieldStyle}>
        {children}
      </select>
    </label>
  );
}

export function TextareaField({ label, ...rest }: { label: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <textarea {...rest} className={`${fieldClass} qt-focus`} style={{ ...fieldStyle, height: 96, padding: '10px 14px' }} onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--qt-deep-teal)')} onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--qt-border-grey)')} />
    </label>
  );
}
