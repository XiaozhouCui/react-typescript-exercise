interface ChildProps {
  color: string;
  onClick: () => void; // onClick is a function returning void
}

export const Child = ({ color, onClick }: ChildProps) => {
  // To use {children} props, need to modify ChildProps interface
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// alternative way of using prop interface
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  // this expression can auto add {children} props without modifying the interface ChildProps
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
// ChildAsFC.contextTypes
// ChildAsFC.displayName
