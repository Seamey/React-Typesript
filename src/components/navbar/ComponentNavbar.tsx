
'use client';

import { Button, Navbar } from 'flowbite-react';

function ComponentNavbar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <img src="https://i.pinimg.com/564x/3c/07/40/3c0740017fa1c2ca4b529179ef1ffb08.jpg" className="mr-5 h-8 sm:h-9" alt=" Logo" />
        <span className="self-center whitespace-nowrap text-2xl  font-semibold dark:text-white">React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Sign In</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ComponentNavbar