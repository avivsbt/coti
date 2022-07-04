import React, { useState } from 'react'

interface props { //<T>
  children: any
}

// interface IButton {
//   str: string
// }
const DynamicButton = () => {
  return (
    <React.Fragment>
      <Button>
        <InitButton>Init</InitButton>
        <ActiveButton>Active</ActiveButton>
      </Button>
    </React.Fragment>
  )
}
export default DynamicButton;

const Button: React.FC<props> = ({ children }) => {

  const [active, setActive] = useState(false);
  const click = () => setActive(true);

  const alertButton = () => {
    alert();
  }

  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { active, click, alertButton });
  });

}

const InitButton: React.FC<any> = ({ active, click, children }) => {
  return (
    !active ? (<button style={{ color: 'red' }} onClick={click}>{children}</button>) : null
  )
}

const ActiveButton: React.FC<any> = ({ active, alertButton, children }) => {
  return (
    active ? (<button style={{ color: 'pinc' }} onClick={alertButton}>{children}</button>) : null
  )
}