export interface AuthInterface {
  name?: string | null;
  email?: string | null;
  currentPassword?: string | null;
  password?: string | null;
  rePassword?: string | null;
  phone?: string | null;
  resetCode?: string | null;
}