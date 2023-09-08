function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "😄";
  if (percentage < 100 && percentage >= 80) emoji = "😎";
  if (percentage < 80 && percentage >= 50) emoji = "🙂";
  if (percentage < 50 && percentage >= 0) emoji = "😑";
  if (percentage === 0) emoji = "😫";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You Scored <strong>{points}</strong>out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highScore">(Highscore: {highscore} points)</p>
    </>
  );
}

export default FinishScreen;