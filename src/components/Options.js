function Options({ question }) {
  return (
    <div className="options">
      {question.options.map((option, ind) => (
        <button className="btn btn-option" key={ind}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
