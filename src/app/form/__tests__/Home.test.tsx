import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../Form";
import userEvent from "@testing-library/user-event";

describe("Form", () => {
  describe("Render", () => {
    it("should render the input", () => {
      render(<Form />);
      const input = screen.getByPlaceholderText("example");
      expect(input).toBeInTheDocument();
    });

    it("should render a disabled submit button", () => {
      render(<Form />);

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });

  describe("Behavior", () => {
    it("should be able to add text to the input", async () => {
      render(<Form />);

      const input = screen.getByPlaceholderText("example");
      await userEvent.type(input, "hey");
      expect(input).toHaveValue("hey");
    });

    it("should enable the submit button when input has value", async () => {
      render(<Form />);

      const input = screen.getByPlaceholderText("example");
      await userEvent.type(input, "hey");
      const button = screen.getByRole("button", {
        name: "Submit",
      });

      expect(button).toBeEnabled();
    });

    it("should empty the text input when submitted", async () => {
      render(<Form />);

      const input = screen.getByPlaceholderText("example");
      await userEvent.type(input, "hey");
      const button = screen.getByRole("button", {
        name: "Submit",
      });

      await userEvent.click(button);
      expect(input).toHaveValue("");
    });
  });
});
