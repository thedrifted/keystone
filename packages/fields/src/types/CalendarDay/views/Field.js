/** @jsx jsx */

import { jsx } from '@emotion/core';

import { FieldContainer, FieldLabel, FieldDescription, FieldInput } from '@arch-ui/fields';
import { TextDayPicker } from '@arch-ui/day-picker';
import { Alert } from '@arch-ui/alert';

const CalendarDayField = ({
  autoFocus,
  field: { format, path, label, isRequired, adminDoc },
  value,
  errors,
  onChange,
  isDisabled,
}) => {
  const htmlID = `ks-daypicker-${path}`;

  return (
    <FieldContainer>
      <FieldLabel htmlFor={htmlID} field={{ label, isRequired }} errors={errors} />
      <FieldDescription text={adminDoc} />
      <FieldInput>
        <TextDayPicker
          id={htmlID}
          autoFocus={autoFocus}
          date={value}
          format={format}
          onChange={onChange}
          disabled={isDisabled}
        />
      </FieldInput>

      {errors.map(({ message, data }) => (
        <Alert appearance="danger" key={message}>
          {message}
          {data ? ` - ${JSON.stringify(data)}` : null}
        </Alert>
      ))}
    </FieldContainer>
  );
};

export default CalendarDayField;
