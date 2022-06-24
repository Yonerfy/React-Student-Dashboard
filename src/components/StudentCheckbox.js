export default function StudentCheckbox(props) {
  const { htmlFor, text, CpName, handlerCheckbox } = props;
  return (
    <label htmlFor={htmlFor}>
      {text}
      <input
        type="checkbox"
        name={CpName}
        onClick={handlerCheckbox}
        defaultChecked
      />
    </label>
  );
}
