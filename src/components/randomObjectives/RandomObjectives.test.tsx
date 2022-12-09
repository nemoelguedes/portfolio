import { fireEvent, screen } from "@testing-library/react";

describe("Gerando Objetivos Aleatórios", () => {

  test("Novo Objetivo", () => {

    const button = screen.getByRole("button", {name: "Gerar novo objetivo"});
    const objective = screen.getByTestId("objetivo");

    fireEvent.click(button);

    const newObjective = screen.getByTestId("objetivo");

    expect(objective).not.toEqual(newObjective);
  })

})