import { it, expect, describe, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../src/components/button/Button';



describe('Button', () => {
  it('should render Button Label', () => {
    render(<Button>Hello</Button>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

   it('should trigger on click when clicking on button', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
   });


   it('should render an outline button', () => {
     render(<Button isOutline>Hello</Button>);

   const button = screen.getByRole('button');
   expect(button).toHaveClass('bg-white text-textColor');
   });

    [
      {
        style: 'primary',
        class: 'bg-primary outline-blue-700 hover:border-neutral-700',
      },
      {
        style: 'success',
        class: 'bg-emerald-700 outline-emerald-700 hover:bg-emerald-600',
      },
      {
        style: 'secondary',
        class: 'bg-gray-400 outline-gray-400 hover:bg-gray-600 text-black',
      },
      { style: 'danger', class: 'bg-red-700 outline-red-700 hover:bg-red-900' },
    ].forEach(({ style, class: className }) => {
      it(`should render button ${style} style`, () => {
        render(<Button variant={style as any}>Hello</Button>);

        expect(screen.getByRole('button')).toHaveClass(className);
      });
    });


});
