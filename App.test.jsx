import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import App from "./src/App"
import userEvent from '@testing-library/user-event';

describe('Testing Links', () => {
    it('Test one', async () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
      
      const one = screen.getByText("Click to get all characters");
      userEvent.click(one) 
      screen.findByText(/...loading/i)
      const char = await screen.findByText('Morty Smith')
      expect(char).toBeInTheDocument();
      userEvent.click(char)
      const type = await screen.findByText('Human')
      expect(type).toBeInTheDocument();
      screen.debug();
    })
})

describe('Test 2', () => {
    it('List', async () => {
        render(
            <MemoryRouter initialEntries={['/list/1','/list/3','/list/5']} initialIndex={2}>
              <App />
            </MemoryRouter>
          );
          const name = await screen.findByText('Jerry Smith');
          expect(name).toBeInTheDocument();
          const type = await screen.findByText('Alive');
          expect(type).toBeInTheDocument();
        screen.debug();
    })
})