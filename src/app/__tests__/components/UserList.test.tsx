import { UserList } from "@/components/UserList";
import { useUsers } from "@/hooks/useUsers";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithStore } from "../../../test-utils/renderWithStore";

jest.mock("@/hooks/useUsers");

const mockUseUsers = useUsers as jest.MockedFunction<typeof useUsers>;

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
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
    },
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
    },
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
    },
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
];

beforeEach(() => {
  jest.resetAllMocks();
});

it("Shows a loading indicator while fetching", () => {
  mockUseUsers.mockReturnValue({
    users: [],
    loading: true,
    error: null,
  });

  renderWithStore(<UserList />);

  expect(screen.getByTestId("loading")).toBeInTheDocument();
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

it("Shows an error message when fetch fails", () => {
  mockUseUsers.mockReturnValue({
    users: [],
    loading: false,
    error: "An error occurred, please try again",
  });

  renderWithStore(<UserList />);

  expect(screen.getByTestId("error")).toBeInTheDocument();
  expect(
    screen.getByText("An error occurred, please try again"),
  ).toBeInTheDocument();
});

it("Renders a card for each user", () => {
  mockUseUsers.mockReturnValue({
    users: mockUsers,
    loading: false,
    error: null,
  });

  renderWithStore(<UserList />);

  expect(screen.getByTestId("user-list")).toBeInTheDocument();
  expect(screen.getAllByTestId("user-card")).toHaveLength(4);
});

it("Filter users by name when typing in the search input", async () => {
  const user = userEvent.setup();

  mockUseUsers.mockReturnValue({
    users: mockUsers,
    loading: false,
    error: null,
  });

  renderWithStore(<UserList />);

  const input = screen.getByTestId("search-input");

  await user.type(input, "Leanne");

  expect(screen.getByText("Name: Leanne Graham")).toBeInTheDocument();
  expect(screen.queryByText("Name: Ervin Howell")).not.toBeInTheDocument();
});

it("Shows all users when search input is cleared", async () => {
  const user = userEvent.setup();

  mockUseUsers.mockReturnValue({
    users: mockUsers,
    loading: false,
    error: null,
  });

  renderWithStore(<UserList />);

  const input = screen.getByTestId("search-input");

  await user.type(input, "Leanne");
  await user.clear(input);

  expect(screen.getByText("Name: Leanne Graham")).toBeInTheDocument();
  expect(screen.getByText("Name: Ervin Howell")).toBeInTheDocument();
});

it("Show no cards when search matches nobody", async () => {
  const user = userEvent.setup();

  mockUseUsers.mockReturnValue({
    users: mockUsers,
    loading: false,
    error: null,
  });

  renderWithStore(<UserList />);

  const input = screen.getByTestId("search-input");

  await user.type(input, "ZZZ");

  expect(screen.queryAllByTestId("user-card")).toHaveLength(0);
});
