type UserData = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserData>): UserData {
  // Оновлення користувача
  const defaultUser: UserData = {
    name: "",
    email: "",
    surname: "",
    password: "",
  };
  return { ...defaultUser, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
