import renderer from "react-test-renderer";
import Button from "./Button";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Button label="Test Button" hasError={false} bg="yellow" color="black" />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
