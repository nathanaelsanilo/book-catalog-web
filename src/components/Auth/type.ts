export type AuthField = {
  username: string;
  password: string;
};

export type Props = {
  loading?: boolean;
  isSignup?: boolean;
  onSubmit: (field: AuthField) => void;
};
