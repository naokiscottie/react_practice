export const ColorMessage = (props) => {
    const {color,children} = props;
      const style_sample1 = {
        color: color,
        fontSize: "20px"
      };
      return <p style={style_sample1}>{children}</p>;
};
