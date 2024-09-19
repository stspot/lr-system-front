export const EMAIL_REGEX = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
export const EMAIL_REGEX_MSG_ERR =
  'An error occurred. Please enter a valid email address.';

export const USERNAME_REGEX = '^[a-zA-Z0-9._-]{3,16}$';
export const USERNAME_REGEX_MSG_ERR =
  'An error occurred. Please enter a valid username.' +
  'The input must contain between 3 and 16 characters,' +
  'consisting of only letters (uppercase and lowercase),' +
  'numbers, periods (.), underscores (_), or hyphens (-).' +
  'No other special characters are allowed.' +
  'The length must be strictly' +
  'within the specified range for the input to be valid';

export const PASSWORD_REGEX =
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+{}\\[\\]:;"\'<>,.?\\/~`|\\\\-]).{8,}$';
export const PASSWORD_REGEX_MSG_ERR =
  'An error occurred. Please enter a valid password.' +
  'The input must contain at least one lowercase letter, one uppercase letter,' +
  'one digit, one special character (@, $, !, %, *, ?, &),' +
  'and be at least 8 characters long to be valid according to the regex.';

export const FIRST_NAME_REGEX = "^[A-ZА-Я][a-zа-я'-]{1,49}$";
export const FIRST_NAME_REGEX_MSG_ERR =
  'An error occurred. Please enter a valid first name.' +
  'The input must start with an uppercase Latin or Cyrillic letter, ' +
  'followed by 1 to 49 lowercase Latin or Cyrillic letters, apostrophes, or hyphens.';

export const LAST_NAME_REGEX = "^[A-ZА-Я][a-zа-я'-]{1,49}$";
export const LAST_NAME_REGEX_MSG_ERR =
  'An error occurred. Please enter a valid last name.' +
  'The input must start with an uppercase Latin or Cyrillic letter, ' +
  'followed by 1 to 49 lowercase Latin or Cyrillic letters, apostrophes, or hyphens.';

	export const BIRTHDAY_REGEX = "^(19|20)\\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$";
	export const BIRTHDAY_REGEX_MSG_ERR = "An error occurred. Please enter a valid birthday."
				+ "The input must be a valid date in the format DD/MM/YYYY, where the day is between 01 and 31, "
				+ "the month is between 01 and 12, and the year starts with 19 or 20, followed by two digits.";

// export const BIRTHDAY_REGEX_MSG_ERR =
//   'An error occurred. Please enter a valid birthday.' +
//   'Birthday must be a date in the past';

export const PHONE_NUMBER_REGEX = '^\\+[0-9 -\\.]{7,21}$';
export const PHONE_NUMBER_REGEX_MSG_ERR =
  'An error occurred. Please enter a valid phone number.' +
  'It can includes spaces, dashes, dots. Max lenght 20 symbols.';

export const AUTHORITY_NAME_REGEX = '^[a-zA-Z\\-]+$';
export const AUTHORITY_NAME_REGEX_MSG_ERR =
  'An error occurred. Please enter a valid authority name.' +
  'The input must only contain uppercase and lowercase letters and hyphens, ' +
  'with no spaces or other special characters, to be valid according to the regex.';

export const ROLE_NAME_REGEX = AUTHORITY_NAME_REGEX;
export const ROLE_NAME_REGEX_MSG_ERR =
  'An error occurred. Please enter a valid role name.' +
  'The input must only contain uppercase and lowercase letters and hyphens, ' +
  'with no spaces or other special characters, to be valid according to the regex.';

export const ID_REGEX = '^[a-zA-Z0-9\\-]+$';
export const ID_REGEX_MSG_ERR =
  'An error occurred. Please enter a valid id.' +
  'The input must only contain uppercase and lowercase letters and hyphens, ' +
  'with no spaces or other special characters, to be valid according to the regex.';
