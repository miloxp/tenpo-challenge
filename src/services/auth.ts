export const fakeLogin = async (email: string, password: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    status: 200,
    token: "fake-toke-qwerty123",
    user: { email },
  };
};
