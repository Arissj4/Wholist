import { fetchUsers } from "@/lib/fetchUsers";

const mockUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

beforeEach(() => {
  jest.resetAllMocks();
});

it("Return a list of users on success", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [mockUser],
  } as unknown);

  const users = await fetchUsers();

  expect(users).toHaveLength(1);
  expect(users[0].name).toBe("Leanne Graham");
});

it("Calls the correct API URL", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [],
  } as unknown);

  await fetchUsers();

  expect(global.fetch).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/users",
  );
});

it("Throws an error when response is not ok", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: false,
  } as unknown);

  await expect(fetchUsers()).rejects.toThrow("Failed to fetch users");
});
