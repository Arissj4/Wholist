import { renderHook, waitFor } from "@testing-library/react";
import { useUsers } from "@/hooks/useUsers";
import { fetchUsers } from "@/lib/fetchUsers";

jest.mock("@/lib/fetchUsers");

const mockFetchUsers = fetchUsers as jest.MockedFunction<typeof fetchUsers>;

const mockUsers = [
  {
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
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

beforeEach(() => {
  jest.resetAllMocks();
});

it("starts with loading: true", () => {
  mockFetchUsers.mockResolvedValue(mockUsers);

  const { result } = renderHook(() => useUsers());

  expect(result.current.loading).toBe(true);
  expect(result.current.users).toHaveLength(0);
  expect(result.current.error).toBeNull();
});

it("returns users after successful fetch", async () => {
  mockFetchUsers.mockResolvedValue(mockUsers);

  const { result } = renderHook(() => useUsers());

  await waitFor(() => expect(result.current.loading).toBe(false));

  expect(result.current.users).toHaveLength(1);
  expect(result.current.users[0].name).toBe("Alice");
  expect(result.current.error).toBeNull();
});

it("sets error when fetch fails", async () => {
  mockFetchUsers.mockRejectedValue(new Error("network error"));

  const { result } = renderHook(() => useUsers());

  await waitFor(() => expect(result.current.loading).toBe(false));

  expect(result.current.error).toBe("Failed to load users");
  expect(result.current.users).toHaveLength(0);
});
