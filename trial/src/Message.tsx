function Message() {
  const name = "World";
  if (name) return <h1>Message Hello {name}</h1>;
  else return <h1>Message Component</h1>;
}

export default Message;
