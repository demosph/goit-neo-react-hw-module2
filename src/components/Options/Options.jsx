import PropTypes from "prop-types";
import css from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={css.optionsWrapper}>
      <button className={css.button} onClick={() => updateFeedback("good")}>Good</button>
      <button className={css.button} onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button className={css.button} onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
};

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  resetFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired
};

export default Options;