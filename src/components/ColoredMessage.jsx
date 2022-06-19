export const ColoredMessage = (props) => {
  console.log(props);

  //propsを分割代入
  const { color, children } = props;

  const contentStyle = {
    color, //props.不要 cplor = color, → 省略記法も使える！
    fontSize: "20px"
  };
  return <p style={contentStyle}>{children}</p>; //props.不要
};
