import { render, screen } from "@testing-library/react";
import UserCard from "@/components/UserCard";

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
};

it("renders the user name", () => {
  render(<UserCard user={mockUser} />);

  expect(screen.getByText("Name: Leanne Graham")).toBeInTheDocument();
});

it("renders the email, city and company", () => {
  render(<UserCard user={mockUser} />);

  expect(screen.getByText("Email: Sincere@april.biz")).toBeInTheDocument();
  expect(screen.getByText("City: Gwenborough")).toBeInTheDocument();
  expect(screen.getByText("Name: Romaguera-Crona")).toBeInTheDocument();
});

it("matches snapshot", () => {
  const { container } = render(<UserCard user={mockUser} />);

  expect(container).toMatchSnapshot();
});
