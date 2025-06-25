import PropTypes from 'prop-types';

/* rafc */
export const FirstApp = ( { title, subTitle} ) => {

/*   console.log(props); */

  return (
    <>
        <h1>{title}</h1>
        <p>{subTitle}</p>
    </>
  )
}

FirstApp.prototype={
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number,
}

FirstApp.defaultProps={
  title: 'Necesito un titulo ',
  subTitle: 'Necesito un subTitle ',
}